import React, {
  PureComponent,
  createRef,
} from 'react'
import {
  createPaginationContainer,
  RelayPaginationProp
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../assets/images/loading.gif'
import { ITEMS_PER_PAGE } from '../utils/constants'
import Comment from './Comment'
import { IPost, handleEdit } from '../types';
import { OverlayConsumer } from '../utils/overlayContext';

type State = {
  commentLoading: boolean,
  endCursor: string,
  closable: boolean,
  contHeight?: number | string
}

type Props = {
  post: IPost,
  relay: RelayPaginationProp,
  handleEdit: handleEdit,
  userId: string | null,
}

class ListComments extends PureComponent<Props, State> {
  state = {
    commentLoading: false,
    endCursor: '',
    closable: false,
    contHeight: 'auto'
  }
  listContainer = createRef<any>()

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { post: { comments } } = nextProps
    const { endCursor: stateEndCursor, closable: prevClosable } = prevState
    if (comments) {
      const { edges, pageInfo: { endCursor } } = comments
      if (endCursor !== stateEndCursor) {
        return {
          endCursor,
          commentLoading: false
        }
      }
      if (edges.length > ITEMS_PER_PAGE && !prevClosable) {
        return {
          closable: true
        }
      }
      if (edges.length <= ITEMS_PER_PAGE && prevClosable) {
        return {
          closable: false
        }
      }
    }
    return null
  }

  componentDidMount() {
    const { post } = this.props
    const comments = post && post.comments

    if (comments && comments.edges.length > 0) {
      const { clientHeight: contHeight = 'auto' } = this.listContainer.current || {}
      this.setState({ contHeight })
    }
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    const { post: { comments: { edges: { length: prevEdgesLen } } } } = prevProps
    const { post: { comments: { edges: { length: thisEdgesLen } } } } = this.props
    const { endCursor: prevCursor } = prevState
    const { endCursor: thisCursor } = this.state
    if (prevCursor !== thisCursor || prevEdgesLen !== thisEdgesLen) {
      return true
    }
    return false
  }

  componentDidUpdate(
    _prevProps: Props,
    _prevState: State,
    contDiff: boolean
  ) {
    if (contDiff) {
      const { clientHeight: contHeight = 'auto' } = this.listContainer.current || {}
      this.setState({ contHeight })
    }
  }

  _loadMore = () => {
    const { relay } = this.props
    if (!relay.hasMore()) return
    relay.loadMore(ITEMS_PER_PAGE, () => this.setState({ closable: true }))
  }

  _closeMoreComments = () => {
    const { relay } = this.props
    relay.refetchConnection(
      ITEMS_PER_PAGE,
      () => this.setState({ closable: false }),
      { after: null }
    )
  }

  render() {
    const { post, handleEdit, userId } = this.props
    const { comments, id } = post
    const { edges, count } = comments
    const pageMore = edges && edges.length < count
    const { commentLoading, closable, contHeight } = this.state

    return (
      <CommentsContainer>
        {edges.length > 0 &&
          <>
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
              style={{ paddingTop: '1.75rem' }}
            >
              <div ref={this.listContainer}>
              <OverlayConsumer>
                {({ isOverlay, toggleOverlay }) => (
                  !commentLoading && edges.map(({ node }) => (
                    <Comment
                      key={node.__id}
                      comment={node}
                      postId={id}
                      userId={userId}
                      handleEdit={handleEdit}
                      isOverlay={isOverlay}
                      toggleOverlay={toggleOverlay}
                    />
                  )))}
                </OverlayConsumer>
              </div>
            </AnimateHeight>
            <CommentMoreContainer>
              {pageMore &&
                <div onClick={this._loadMore}>
                  <span>More </span>
                  <FontAwesomeIcon icon="caret-down" />
                </div>
              }
              {closable &&
                <div onClick={this._closeMoreComments}>
                  <span>Close </span>
                  <FontAwesomeIcon icon="caret-up" />
                </div>
              }
            </CommentMoreContainer>
          </>
        }
      </CommentsContainer>
    )
  }
}

export default createPaginationContainer(ListComments,
  {
    post: graphql`
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
      }
    `
  },
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
    margin-bottom: 0;
  }
`
const CommentsLoading = styled.div`
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
`
const CommentMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div {
    display: flex;
    color: #aaa;
    padding: 0 2rem;
    cursor: pointer;

    span {
      margin-right: 0.25rem;
      font-size: .75rem;
    }

    &:active {
      color: #444;
    }
  }
`
