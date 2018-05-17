import React, { createRef, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import CreatePostMutation from '../mutations/CreatePostMutation'
import UpdatePostMutation from '../mutations/UpdatePostMutation'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../utils/Environment'
import Loading from '../assets/images/loading.gif'
import DefaultImg from '../assets/images/default.jpeg'
import { GC_USER_ID } from '../utils/constants'
import styled, { css } from 'styled-components'
import { urlregex, validateURL } from '../utils/validateURL'
import history from '../utils/history'

const CreatePostViewerQuery = graphql`
  query CreatePostViewerQuery {
    viewer {
      id,
      allPosts(
        last: 10,
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
  handlers = {}

  componentDidMount(){
    const userId = localStorage.getItem(GC_USER_ID)
    if(!userId) history.replace('/')
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

  _handleChange = input => {
    if (!this.handlers[input]) {
      this.handlers[input] = e => {
        const { error } = this.state
        const value = e.target.value,
        valid = validateURL(value)
        error[input] = valid ? false : true
        this.setState({
          [input]: value,
          error
        })
      }
    }
    return this.handlers[input]
  }

  _handlePost = viewerId => e => {
    const { imageUrl, siteUrl, error } = this.state

    if(error.siteUrl || error.imageUrl) {
      if(error.siteUrl) this.siteUrlNode.current.focus()
      if(error.imageUrl) this.imageUrlNode.current.focus()
    } else {
      const { location } = this.props,
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

  onErrorImg = e => {
    const target = e.target
    if (target) target.src = DefaultImg
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
                    onChange={this._handleChange(description)}
                  />
                  <Input
                    type='url'
                    pattern={urlregex}
                    error={error && error.imageUrl ? true : false}
                    value={imageUrl}
                    innerRef={this.imageUrlNode}
                    placeholder='Image Url'
                    onChange={this._handleChange('imageUrl')}
                  />
                  <Input
                    type='url'
                    pattern={urlregex}
                    error={error && error.siteUrl ? true : false}
                    value={siteUrl}
                    innerRef={this.siteUrlNode}
                    placeholder='Site Url'
                    onChange={this._handleChange('siteUrl')}
                  />
                  {imageUrl &&
                    <img
                      src={imageUrl}
                      onError={this.onErrorImg}
                      alt={description}
                    />
                  }
                  {description && imageUrl && siteUrl &&
                    <PostBtn onClick={this._handlePost(props.viewer.id)}>
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
