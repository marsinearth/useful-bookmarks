import React, { createRef, PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import DeletePostMutation from '../mutations/DeletePostMutation'
import { withRouter } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import AnimateHeight from 'react-animate-height'
import Comment from './Comment'
import styled, { css } from 'styled-components'

//let's practice the new context with commenting theme!!!
class AddComment extends PureComponent {
  render(){
    const { mode, handleBlur } = this.props
    return (
      <AnimateHeight
        duration={500}
        height={mode ? 'auto' : 0}
      >
        <Input
          type='text'
          placeholder='Add Comment'
          onBlur={handleBlur}
        />
      </AnimateHeight>
    )
  }
}

class Post extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      menu: false,
      commentMode: false
    }
    this.optionTooltip = createRef()
  }
  render() {
    const { description, imageUrl, siteUrl, postedBy, comments } = this.props.post,
    { menu, commentMode } = this.state,
    userName = postedBy && postedBy.name
    console.log('userName: ', userName)
    console.log('comments: ', comments)
    return (
      <Container>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImgContainer url={imageUrl} />
        </a>
        <InfoContainer>
          {description}
          {userName &&
            <VertOptionContainer onClick={this._openMenuPanel}>
              <FontAwesomeIcon
                icon={faEllipsisV}
                pull='right'
              />
            </VertOptionContainer>
          }
          <Tooltip
            innerRef={this.optionTooltip}
            onBlur={this._handleBlur}
            menu={menu}
            tabIndex='-1'
          >
            <TooltipMenu comment onClick={this._addComment}>
              + Comment
            </TooltipMenu>
            <TooltipMenu onClick={this._handleDelete}>
              Delete
            </TooltipMenu>
          </Tooltip>
          {comments.pageInfo.startCursor &&
            <CommentsContainer>
              <CommentsTitle>
                Comments
              </CommentsTitle>
              {comments.edges.map(({ node }) =>
                <Comment
                  key={node.__id}
                  comment={node}
                />
              )}
            </CommentsContainer>
          }
          <AddComment
            mode={commentMode}
            handleBlur={this._handleBlur}
          />
        </InfoContainer>
      </Container>
    )
  }
  _openMenuPanel = () => {
    this.setState({ menu: true }, () => {
      this.optionTooltip.current.focus()
    })
  }
  _handleBlur = e => {
    const target = e.target || e.srcElement,
    tagName = target && target.tagName
    let stateObj = {}
    switch(tagName) {
      case 'INPUT':
        stateObj['commentMode'] = false
        break
      default:
        stateObj['menu'] = false
        break
    }
    this.setState(stateObj)
  }
  _addComment = () => {
    this.setState({ commentMode: true, menu: false })
  }
  _handleDelete = () => {
    const { post, viewer } = this.props
    if(window.confirm(`Are you sure to delete: ${post.description}?`))
      DeletePostMutation(post.id, viewer.id)
    this.setState({ menu: false })
  }
}

const FragmentContainer = createFragmentContainer(Post, graphql`
  fragment Post_viewer on Viewer {
    id
  }
  fragment Post_post on Post {
    id
    description
    imageUrl
    siteUrl
    postedBy {
      name
    }
    comments(
      last: 100,
      orderBy: createdAt_DESC
    ) @connection(
      key: "Post_comments",
      filters: []
    ) {
      edges {
        node {
          ...Comment_comment
        }
      }
    }
  }
`)

export default withRouter(FragmentContainer)

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
Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
`,
Container = styled.div`
  padding: 1rem;
  background-color: rgba(0, 0, 0, .05);
  margin: 1rem;
`,
ImgContainer = styled.div`
  width: 100%;
  background-size: cover;
  background-image: ${props => props.url && 'url(' + props.url + ')'};
  padding-bottom: 100%;
  ${Dim}
`,
InfoContainer = styled.div`
  padding-top: 1rem;
  position: relative;
`,
VertOptionContainer = styled.div`
  float: right;
  cursor: pointer;
  color: #aaa;
  padding-right: .25rem;
`,
Tooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  outline: 0;
  display: ${props => props.menu ? 'inline-block' : 'none'};
  margin-top: 1px;
  margin-right: -15px;
`,
TooltipMenu = styled.div`
  color: ${props => props.comment ? '#aaa' : 'red'};
  font-size: .875rem;
  text-align: right;
  padding: .25rem .5rem;
  cursor: pointer;
  ${Dim}
`,
CommentsContainer = styled.div`
  width: 100%;
`,
CommentsTitle = styled.p`
  color: #aaa;
  font-weight: bold;
  font-size: .875rem;
`
