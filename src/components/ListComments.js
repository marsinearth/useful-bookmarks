import React, {
  PureComponent,
  createRef,
  Fragment
} from 'react'
import {
  createPaginationContainer,
  graphql
} from 'react-relay'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import Loading from '../assets/images/loading.gif'
import { ITEMS_PER_PAGE } from '../utils/constants'
import Comment from './Comment'

class ListComments extends PureComponent {
  state = {
    commentLoading: false,
    endCursor: null,
    closable: false,
    contHeight: 'auto'
  }
  listContainer = createRef()

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.comments) {
      const { endCursor } = nextProps.comments.pageInfo
      return {
        endCursor,
        commentLoading: false
      }
    }
    return null
  }

  componentDidMount() {
    const { post } = this.props,
    comments = post && post.comments
    
    if(comments && comments.count > 0) {
      const contHeight = this.listContainer.current.clientHeight
      this.setState({ contHeight })
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const prevCommentsEdgesLen = (
      prevProps.post
      && prevProps.post.comments
      && prevProps.post.comments.edges
    ) && prevProps.post.comments.edges.length,
    thisCommentsEdgesLen = (
      this.props.post
      && this.props.post.comments
      && this.props.post.comments.edges
      && this.props.post.comments.edges.length > 0
    ) && this.props.post.comments.edges.length

    if(prevCommentsEdgesLen !== thisCommentsEdgesLen) {
      const container = this.listContainer.current
      return container
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, container) {
    if(container) {
      const contHeight = container.clientHeight
      this.setState({ contHeight })
    }
  }

  _loadMore = () => {
    const { relay } = this.props
    if(!relay.hasMore()) return
    relay.loadMore(ITEMS_PER_PAGE, e => this.setState({ closable: true }))
  }

  _closeMoreComments = () => {
    const { relay } = this.props
    relay.refetchConnection(
      ITEMS_PER_PAGE,
      e => this.setState({ closable: false }),
      { after: null }
    )
  }

  render() {
    const { post, handleEdit, userId } = this.props,
    { comments, id } = post,
    { edges, pageInfo, count } = comments,
    pageMore = pageInfo && pageInfo.hasNextPage,
    { commentLoading, closable, contHeight } = this.state

    return (
      <Fragment>
        {count > 0 &&
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
            <AnimateHeight
              duration={350}
              height={contHeight}
              easing='ease-in-out'
            >
              <div ref={this.listContainer}>
                {!commentLoading && edges.map(({ node }) =>
                  <Comment
                    key={node.__id}
                    comment={node}
                    postId={id}
                    userId={userId}
                    handleEdit={handleEdit}
                  />
                )}
              </div>
            </AnimateHeight>
            <CommentMoreContainer>
              {pageMore &&
                <div onClick={this._loadMore}>
                  <span>More </span>
                  <FontAwesomeIcon icon={faCaretDown}/>
                </div>
              }
              {closable &&
                <div onClick={this._closeMoreComments}>
                  <span>Close </span>
                  <FontAwesomeIcon icon={faCaretUp}/>
                </div>
              }
            </CommentMoreContainer>
          </CommentsContainer>
        }
      </Fragment>
    )
  }
}

export default createPaginationContainer(ListComments, graphql`
  fragment ListComments_post on Post {
    id
    comments(
      first: $count,
      after: $cCursor
    ) @connection(
      key: "ListComments_comments",
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
      count
    }
  }`,
  {
    direction: 'forward',
    query: graphql`
      query ListCommentsPaginationQuery(
        $count: Int!
        $cCursor: String,
        $id: ID
      ) {
        viewer {
          Post(id: $id) {
            ...ListComments_post
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
        cCursor: cursor,
        id: props.post.id
      }
    }
  }
)

const CommentsContainer = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div {
    color: #aaa;
    padding: 0 2rem;
    cursor: pointer;

    span {
      font-size: .75rem;
      vertical-align: middle;
    }

    &:active {
      color: #444;
    }
  }
`
