import React, {
  createRef,
  Fragment,
  PureComponent
} from 'react'
import {
  createPaginationContainer,
  graphql
} from 'react-relay'
import DeletePostMutation from '../mutations/DeletePostMutation'
import CreateComment from './CreateComment'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import Comment from './Comment'
import Loading from '../assets/images/loading.gif'
import styled, { css } from 'styled-components'
import { ITEMS_PER_PAGE } from '../constants'

class Post extends PureComponent {
  state = {
    menu: false,
    commentMode: false,
    commentLoading: false,
    endCursor: null,
    editComment: false,
    editingComment: null
  }
  optionTooltip = createRef()

  static getDerivedStateFromProps(nextProps, prevState) {
    const { comments } = nextProps.post,
    commentsPageInfo = comments && comments.pageInfo,
    endCursor = commentsPageInfo && commentsPageInfo.endCursor
    if(endCursor !== prevState.endCursor)
      return {
        endCursor,
        commentLoading: false
      }
    return null
  }
  render() {
    const { post, viewer, relay } = this.props,
    {
      menu,
      commentMode,
      editComment,
      editingComment,
      commentLoading
    } = this.state,
    {
      id,
      description,
      imageUrl,
      siteUrl,
      postedBy,
      comments
    } = post,
    viewerId = viewer && viewer.id,
    userInfo = viewer && viewer.User,
    userId = userInfo && userInfo.id,
    userName = userInfo && userInfo.name,
    posterId = postedBy && postedBy.id,
    posterAuth = posterId === userId

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
              <FontAwesomeIcon icon={faEllipsisV}/>
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
              <Fragment>
                <TooltipMenu edit onClick={this._editComment}>
                  <FontAwesomeIcon icon={faPencilAlt} size='xs'/>
                  &nbsp;Edit
                </TooltipMenu>
                <TooltipMenu onClick={this._handleDelete}>
                  Delete
                </TooltipMenu>
              </Fragment>
            }
          </Tooltip>
          {comments.edges && comments.edges.length > 0 &&
            <CommentsContainer>
              <p>Comments</p>
              {commentLoading &&
                <CommentsLoading>
                  <img
                    src={Loading}
                    alt="Loading..."
                  />
                </CommentsLoading>
              }
              {!commentLoading && comments.edges.map(({ node }) =>
                <Comment
                  key={node.__id}
                  comment={node}
                  postId={id}
                  viewer={viewer}
                  handleEdit={this._handleCommentEdit}
                />
              )}
              {relay.hasMore() &&
                <CommentMoreContainer onClick={this._loadMore}>
                  <div>
                    <span>More </span>
                    <FontAwesomeIcon icon={faCaretDown}/>
                  </div>
                </CommentMoreContainer>
              }
            </CommentsContainer>
          }
          <CreateComment
            mode={commentMode}
            edit={editComment}
            editingComment={editingComment}
            commentedPostId={id}
            viewerId={viewerId}
            userName={userName}
            handleBlur={this._handleBlur}
          />
        </InfoContainer>
      </Container>
    )
  }
  _loadMore = () => {
    const { relay } = this.props
    if(!relay.hasMore()) return
    this.setState({ CommentsLoading: true }, () =>
      relay.loadMore(ITEMS_PER_PAGE)
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
    this.setState({
      commentMode: true,
      menu: false
    })
  }
  _editComment = () => {
    this.setState({
      commentMode: true,
      menu: false
    })
  }
  _handleDelete = () => {
    const { post, viewer } = this.props
    if(window.confirm(`Are you sure to delete: ${post.description}?`))
      DeletePostMutation(post.id, viewer.id)
    this.setState({ menu: false })
  }
  _handleCommentEdit = comment => {
    this.setState({
      commentMode: true,
      editComment: true ,
      editingComment: comment
    })
  }
}

export default createPaginationContainer(
  Post,
  {
    viewer: graphql`
      fragment Post_viewer on Viewer {
        ...Comment_viewer
        id
        User(id: $id) {
          id
          name
        }
      }
    `,
    post: graphql`
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
          first: $count,
          after: $cursor,
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
          pageInfo {
            hasNextPage,
            endCursor
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    query: graphql`
      query PostPaginationQuery(
        $count: Int!
        $cursor: String
        $postID: ID!
      ) {
        viewer {
          Post(id: $postID) {
              ...Post_post
          }
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.post && props.post.comments
    },
    getVariables(props, { count, cursor }) {
      return {
        count,
        cursor,
        postID: props.post.id
      }
    }
  }
)

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
  height: auto;
  padding: .25rem;
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
  color: ${props => (props.comment || props.edit) ? '#aaa' : 'red'};
  font-size: .875rem;
  padding: .25rem .5rem;
  vertical-align: middle;
  ${Dim}
`,
CommentsContainer = styled.div`
  width: 100%;

  p {
    color: #aaa;
    font-weight: bold;
    font-size: .875rem;
  }
`,
CommentsLoading = styled.div`
  width: 100%;
  padding: 2rem;
  justify-content: center;
  display: flex;
  background-color: transparent;
  box-sizing: border-box;

  img {
    width: 5rem;
    height: 5rem;
    mix-blend-mode: multiply;
  }
`,
CommentMoreContainer = styled.div`
  width: 100%;
  text-align: center;

  div {
    color: #aaa;
    cursor: pointer;

    span {
      font-size: .75rem;
      vertical-align: text-top;
    }

    &:active {
      color: #444;
    }
  }
`
