import React, { createRef, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import CreatePostMutation from '../mutations/CreatePostMutation'
import UpdatePostMutation from '../mutations/UpdatePostMutation'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import Loading from '../assets/images/loading.gif'
import DefaultImg from '../assets/images/default.jpeg'
import { GC_USER_ID } from '../constants'
import styled, { css } from 'styled-components'
import { urlregex, validateURL } from '../utils'

const CreatePostViewerQuery = graphql`
  query CreatePostViewerQuery {
    viewer {
      id,
      allPosts(
        last: 100,
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

class CreatePost extends PureComponent {
  state = {
    editing: false,
    description: '',
    imageUrl: '',
    siteUrl: '',
    error: {}
  }
  imageUrlNode = createRef()
  siteUrlNode = createRef()
  componentDidMount(){
    const userId = localStorage.getItem(GC_USER_ID)
    if(!userId) this.props.history.replace('/')
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { location } = nextProps,
    editPost = location.state && location.state.editPost
    if(editPost && !prevState.editing) {
      const { description, imageUrl, siteUrl } = editPost
      return {
        editing: true,
        description,
        imageUrl,
        siteUrl
      }
    }
    return null
  }
  render() {
    const {
      description,
      editing,
      imageUrl,
      siteUrl,
      error
    } = this.state

    return (
      <QueryRenderer
        environment={environment}
        query={CreatePostViewerQuery}
        render={({ err, props }) => {
          if (err) {
            return <div>{err.message}</div>
          } else if (props) {
            return (
              <Wrapper>
                <div>
                  <Input
                    type='text'
                    value={description}
                    error={error && error.description ? true : false}
                    placeholder='Description'
                    onChange={e => this.setState({ description: e.target.value })}
                  />
                  <Input
                    type='url'
                    pattern={urlregex}
                    error={error && error.imageUrl ? true : false}
                    value={imageUrl}
                    innerRef={this.imageUrlNode}
                    placeholder='Image Url'
                    onChange={e => this._handleChange(e, 'imageUrl')}
                  />
                  <Input
                    type='url'
                    pattern={urlregex}
                    error={error && error.siteUrl ? true : false}
                    value={siteUrl}
                    innerRef={this.siteUrlNode}
                    placeholder='Site Url'
                    onChange={e => this._handleChange(e, 'siteUrl')}
                  />
                  {imageUrl &&
                    <img
                      src={imageUrl}
                      onError={e => e.target.src = DefaultImg}
                      alt={description}
                    />
                  }
                  {description && imageUrl && siteUrl &&
                    <PostBtn onClick={() => this._handlePost(props.viewer.id)}>
                      {editing ? 'Edit' : 'Post'}
                    </PostBtn>
                  }
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
                src={Loading}
                alt="Loading..."
              />
            </Wrapper>
          )
        }}
      />
    )
  }
  _handleChange = (e, input) => {
    let { error } = this.state
    const value = e.target.value,
    valid = validateURL(value)
    error[input] = valid ? false : true
    this.setState({
      [input]: value,
      error
    })
  }
  _handlePost = viewerId => {
    const { imageUrl, siteUrl, error } = this.state

    if(error.siteUrl || error.imageUrl) {
      if(error.siteUrl) this.siteUrlNode.current.focus()
      if(error.imageUrl) this.imageUrlNode.current.focus()
    } else {
      const { location, history } = this.props,
      editPost = location.state && location.state.editPost,
      { editing, description } = this.state,
      postedById = localStorage.getItem(GC_USER_ID)

      if(editing) UpdatePostMutation(
        description,
        imageUrl,
        siteUrl,
        editPost,
        viewerId,
        () => this.setState({ editing: false }, () => history.replace('/'))
      )

      else CreatePostMutation(
        description,
        imageUrl,
        siteUrl,
        postedById,
        viewerId,
        () => history.replace('/')
      )
    }
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
`,
Wrapper = styled.div`
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
`,
Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
  border-width: 1px;
  border-color: ${props => props.error ? 'red' : 'lightgray'}
`,
LinkContainer = styled.div`
  text-align: center;
  color: red;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  ${Dim}
`,
PostBtn = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  background-color: rgba( 0, 0, 0, .1 );
  border: none;
  ${Dim}
`
