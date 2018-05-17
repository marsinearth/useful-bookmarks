import React, { PureComponent } from 'react'
import {
  createPaginationContainer,
  graphql
} from 'react-relay'
import { Link } from 'react-router-dom'
import Post from './Post'
import styled, { css } from 'styled-components'
import Loading from '../assets/images/loading.gif'
import { isMobile } from 'react-device-detect'
import InfiniteScroll from 'react-infinite-scroller'
import { UserConsumer } from '../utils/userContext'
import { ITEMS_PER_PAGE } from '../utils/constants'

class ListPage extends PureComponent {

  _loadMore = () => {
    const { relay } = this.props
    if(!relay.hasMore()) return
    relay.loadMore(ITEMS_PER_PAGE)
  }

  render() {
    const { viewer, relay } = this.props

    return (
      <Wrapper>
        <UserConsumer>
          {user => (
            <TopPart width={window.innerWidth}>
              {user.name &&
                <WelcomeUser>
                  Hello {user.name}!
                </WelcomeUser>
              }
              <StyledLink
                mobile={isMobile ? 'true' : 'false'}
                to={user.name ? '/create' : '/login'}
              >
                + {user.name ? 'New Post' : 'Sign In'}
              </StyledLink>
            </TopPart>
          )}
        </UserConsumer>
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
              viewerId={viewer.id}
              //viewer={viewer}
            />
          )}
        </InfiniteScroll>
      </Wrapper>
    )
  }
}

export default createPaginationContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    id
    allPosts(
      first: $count,
      after: $pCursor,
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
  }`,
  {
    direction: 'forward',
    query: graphql`
      query ListPagePaginationQuery(
        $count: Int!
        $pCursor: String,
        $cCursor: String
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
        pCursor: cursor
      }
    }
  }
)

const Decorated = css`
  position: absolute;
  top: 0;
  padding: 2rem;
  text-transform: uppercase;
`,
Dim = css`
  cursor: pointer;
  transition: opacity .15s ease-in;
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
  margin-top: 5.2rem;

  div {
    max-width: 100%;
  }
`,
TopPart = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.width > 700
    ? 'transparent'
    : 'rgba(255, 255, 255, .5)'
  };
  height: 5.2rem;
`,
WelcomeUser = styled.div`
  left: 0;
  color: rgba( 0, 0, 0, .3 );
  ${Decorated}
`,
StyledLink = styled(Link)`
  right: 0;
  color: black;
  ${props => props.mobile === 'false' ? Dim : ''}
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
