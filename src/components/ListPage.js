import React, { PureComponent } from 'react'
import {
  createPaginationContainer,
  graphql
} from 'react-relay'
import { Link } from 'react-router-dom'
import Post from './Post'
import styled, { css } from 'styled-components'
import Loading from '../assets/images/loading.gif'
import InfiniteScroll from 'react-infinite-scroller'
import { GC_USER_ID, ITEMS_PER_PAGE } from '../constants'

const userId = localStorage.getItem(GC_USER_ID)

class ListPage extends PureComponent {
  render() {
    const { viewer, relay } = this.props,
    userInfo = viewer.User,
    userName = userInfo && userInfo.name

    return (
      <Wrapper>
        {userName &&
          <WelcomeUser>
            Hello {userName}!
          </WelcomeUser>
        }
        <StyledLink to={userName ? '/create' : '/login'}>
          + {userName ? 'New Post' : 'Sign In'}
        </StyledLink>
        <InfiniteScroll
          pageStart={0}
          loadMore={this._loadMore}
          hasMore={relay.hasMore()}
          loader={
            <PostsLoading key={0}>
              <img src={Loading} alt="Loading..."/>
            </PostsLoading>
          }
        >
          {viewer.allPosts.edges.map(({ node }) =>
            <Post
              key={node.__id}
              post={node}
              viewer={viewer}
            />
          )}
        </InfiniteScroll>
      </Wrapper>
    )
  }
  _loadMore = () => {
    const { relay } = this.props
    if(!relay.hasMore()) return
    relay.loadMore(ITEMS_PER_PAGE)
  }
}

export default createPaginationContainer(
  ListPage,
  {
    viewer: graphql`
      fragment ListPage_viewer on Viewer {
        ...Post_viewer
        User(id: $id) {
          name
        }
        allPosts(
          first: $count,
          after: $cursor,
          orderBy: createdAt_DESC
        ) @connection(
          key: "ListPage_allPosts",
          filters: []
        ) {
          edges {
            node {
              ...Post_post
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
      query ListPagePaginationQuery(
        $count: Int!
        $cursor: String,
        $id: ID
      ) {
        viewer {
          ...ListPage_viewer
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allPosts
    },
    getVariables(props, { count, cursor }) {
      return {
        count,
        cursor,
        id: userId
      }
    }
  }
)

const Decorated = css`
  position: fixed;
  background-color: white;
  top: 0;
  padding: 2rem;
  text-transform: uppercase;
`,
Dim = css`
  transition: opacity .15s ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`,
Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    max-width: 400px;
  }
`,
WelcomeUser = styled.div`
  left: 0;
  color: rgba( 0, 0, 0, .3 );
  ${Decorated}
`,
StyledLink = styled(Link)`
  right: 0;
  color: black;
  ${Dim}
  ${Decorated}
`,
PostsLoading = styled.div`
  width: 100%;
  max-width: 100%;
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
