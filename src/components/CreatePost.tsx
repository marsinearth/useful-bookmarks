import React, {
  createRef,
  PureComponent,
  ChangeEvent,
  MouseEvent,
  SyntheticEvent
} from 'react'
import { Link } from 'react-router-dom'
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import CreatePostMutation from '../mutations/CreatePostMutation'
import UpdatePostMutation from '../mutations/UpdatePostMutation'
import environment from '../utils/Environment'
import loadingGif from '../assets/images/loading.gif'
import defaultJpg from '../assets/images/default.jpg'
import { GC_USER_ID, ITEMS_PER_PAGE } from '../utils/constants'
import styled, { css } from 'styled-components'
import { validateURL } from '../utils/validateURL'
import history from '../utils/history'
import { IPost } from '../types'

type State = {
  editing: boolean,
  description: string,
  imageUrl: string,
  siteUrl: string,
  error: errorTypes,
  [name: string]: string | boolean | errorTypes
}

type errorTypes = {
  description?: boolean,
  imageUrl?: boolean,
  siteUrl?: boolean,
  [name: string]: boolean | undefined,
}

type Props = {
  location: {
    state?: {
      editPost?: IPost
    }
  }
}

const CreatePostViewerQuery = graphql`
  query CreatePostViewerQuery($initCount: Int!) {
    viewer {
      id,
      allPosts(
        last: $initCount,
        orderBy: createdAt_DESC
      ) @connection(
        key: "ListPage_allPosts",
        filters: []
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`

const QueryRenderee = ({
  queryState: {
    error: queryErr,
    props,
  },
  states: {
    description,
    editing,
    imageUrl,
    siteUrl,
    error
  },
  internalFuncs: {
    handleChange,
    onErrorImg,
    handlePost
  },
  internalRefs: {
    imageUrlNode,
    siteUrlNode
  }
}: {
  queryState: any,
  states: State,
  internalFuncs: any,
  internalRefs: any
}) => {
  if (queryErr) {
    return <div>{queryErr.message}</div>
  }
  if (props) {
    return (
      <Wrapper>
        <div>
          <Input
            type='text'
            value={description}
            data-error={error.description}
            placeholder='Description'
            data-label='description'
            onChange={handleChange}
          />
          <Input
            type='url'
            data-error={error.imageUrl}
            value={imageUrl}
            ref={imageUrlNode}
            placeholder='Image Url'
            data-label='imageUrl'
            onChange={handleChange}
          />
          <Input
            type='url'
            data-error={error.siteUrl}
            value={siteUrl}
            ref={siteUrlNode}
            placeholder='Site Url'
            data-label='siteUrl'
            onChange={handleChange}
          />
          {imageUrl &&
            <img
              src={imageUrl}
              onError={onErrorImg}
              alt={description}
            />
          }
          {(description && imageUrl && siteUrl) && (
            <PostBtn
              data-viewer-id={props.viewer.id}
              onClick={handlePost}
            >
              {editing ? 'Apply' : 'Post'}
            </PostBtn>
          )}
          <LinkContainer>
            <Link to="/" >
              Cancel
            </Link>
          </LinkContainer>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <img
        src={loadingGif}
        alt="Loading..."
      />
    </Wrapper>
  )
}

class CreatePost extends PureComponent<Props, State> {
  state: State = {
    editing: false,
    description: '',
    imageUrl: '',
    siteUrl: '',
    error: {}
  }
  imageUrlNode = createRef<HTMLInputElement>()
  siteUrlNode = createRef<HTMLInputElement>()

  componentDidMount() {
    const userId = localStorage.getItem(GC_USER_ID)
    if (!userId) history.replace('/')
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const { location } = nextProps
    const editPost = location.state && location.state.editPost
    if (editPost && !prevState.editing) {
      const { description, imageUrl, siteUrl } = editPost
      return {
        description,
        imageUrl,
        siteUrl,
        editing: true,
      }
    }
    return null
  }

  _handleChange = (e: ChangeEvent<HTMLInputElement>) =>  {
    const { error } = this.state
    const { target } = e
    const { dataset: { label }, value } = target
    console.log('label: ', label);
    console.log('value: ', value);
    let valid = true
    if(label) {
      if(label !== 'description') {
        valid = validateURL(value)
      }
      error[label] = valid ? false : true
      this.setState({
        error,
        [label]: value,
      })
    }
  }

  _handlePost = (e: MouseEvent<HTMLButtonElement>) => {
    const { imageUrl, siteUrl, error } = this.state
    const { target } = e
    const { dataset: { viewerId } } = target as HTMLButtonElement

    if (error.siteUrl || error.imageUrl) {
      if (error.siteUrl && this.siteUrlNode.current) this.siteUrlNode.current.focus()
      if (error.imageUrl && this.imageUrlNode.current) this.imageUrlNode.current.focus()
    } else {
      const { location: { state } } = this.props
      const { editing, description } = this.state
      const userId = localStorage.getItem(GC_USER_ID)
      const { editPost } = state || {} as { editPost?: IPost }

      if (userId && viewerId) {
        if (editing && editPost) {
          UpdatePostMutation(
            description,
            imageUrl,
            siteUrl,
            editPost,
            () => {
              this.setState({ editing: false }, () => {
                history.replace('/')
              })
            }
          )
        } else {
          CreatePostMutation(
            description,
            imageUrl,
            siteUrl,
            userId,
            viewerId,
            () => history.replace('/')
          )
        }
      }
    }
  }

  onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    const { target } = e
    if (target && target instanceof HTMLImageElement) {
      target.src = defaultJpg
    }
  }

  render() {
    const internalFuncs = {
      handleChange: this._handleChange,
      handlePost: this._handlePost,
      onErrorImg: this.onErrorImg
    }
    const internalRefs = {
      imageUrlNode: this.imageUrlNode,
      siteUrlNode: this.siteUrlNode
    }
    return (
      <QueryRenderer
        variables={{ initCount: ITEMS_PER_PAGE }}
        environment={environment}
        query={CreatePostViewerQuery}
        render={queryState => (
          <QueryRenderee
            queryState={queryState}
            internalFuncs={internalFuncs}
            internalRefs={internalRefs}
            states={this.state}
          />
        )}
      />
    )
  }
}

export default CreatePost

const Dim = css`
  opacity: 1;
  transition: opacity .15s ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`
const Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;

  div {
    max-width: 400px;

    img {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
  border-width: 1px;
  border-color: ${(props: { 'data-error'?: boolean }) => props['data-error'] ? 'red' : 'lightgray'}
`
const LinkContainer = styled.div`
  text-align: center;
  color: red;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  ${Dim}
`
const PostBtn = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  background-color: rgba( 0, 0, 0, .1 );
  border: none;
  ${Dim}
`
