import React, { createRef, PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import DeletePostMutation from '../mutations/DeletePostMutation'
import CreateComment from './CreateComment'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import Comment from './Comment'
import styled, { css } from 'styled-components'

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
    const { id, description, imageUrl, siteUrl, postedBy, comments } = this.props.post,
    { menu, commentMode } = this.state,
    viewer = this.props.viewer,
    viewerId = viewer && viewer.id,
    userInfo = viewer && viewer.User,
    userId = userInfo && userInfo.id,
    userName = userInfo && userInfo.name,
    posterId = postedBy && postedBy.id,
    posterAuth = posterId === userId,
    vertOptionIcon = <FontAwesomeIcon icon={faEllipsisV}/>

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
          {userId &&
            <VertOptionContainer onClick={this._openMenuPanel}>
              {vertOptionIcon}
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
            {posterAuth &&
              <TooltipMenu onClick={this._handleDelete}>
                Delete
              </TooltipMenu>
            }
          </Tooltip>
          {comments.edges && comments.edges.length > 0 &&
            <CommentsContainer>
              <CommentsTitle>
                Comments
              </CommentsTitle>
              {comments.edges.map(({ node }) =>
                <Comment
                  key={node.__id}
                  comment={node}
                  postId={id}
                  viewer={viewer}
                  vertOptionIcon={vertOptionIcon}
                />
              )}
            </CommentsContainer>
          }
          <CreateComment
            mode={commentMode}
            commentedPostId={id}
            viewerId={viewerId}
            userName={userName}
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
    let target = e, stateObj = {}
    if(e.target) target = e.target || e.srcElement
    const tagName = target && target.tagName
    if(tagName === 'INPUT') stateObj['commentMode'] = false
    else stateObj['menu'] = false

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

export default createFragmentContainer(Post, graphql`
  fragment Post_viewer on Viewer {
    ...Comment_viewer
    id
    User(id: $id) {
      id
      name
    }
  }
  fragment Post_post on Post {
    id
    description
    imageUrl
    siteUrl
    postedBy {
      id
      name
    }
    comments(
      last: 100,
      orderBy: createdAt_ASC
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
  text-align: center;
  width: 1rem;
`,
Tooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 3rem;
  background-color: white;
  outline: 0;
  display: ${props => props.menu ? 'flex' : 'none'};
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1px;
  margin-right: -15px;
`,
TooltipMenu = styled.div`
  color: ${props => props.comment ? '#aaa' : 'red'};
  font-size: .875rem;
  padding: .25rem .5rem;
  vertical-align: middle;
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
