import React, { PureComponent } from 'react'
import {
  createPaginationContainer,
  RelayPaginationProp,
} from 'react-relay'
import { PageInfo } from 'relay-runtime'
import graphql from 'babel-plugin-relay/macro'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import styled, { css } from 'styled-components'
import Post, { Dim } from './Post'
import Loading from '../assets/images/loading.gif'
import { UserConsumer } from '../utils/userContext'
import { ITEMS_PER_PAGE } from '../utils/constants'
import { IPost, toggleOverlay } from '../types';
import { OverlayProvider, OverlayConsumer } from '../utils/overlayContext'

type PostNode = {
  node: IPost
}

type Props = {
  relay: RelayPaginationProp,
  viewer: {
    id: string,
    allPosts: {
      edges: PostNode[],
      pageInfo: PageInfo
    }
  }
}

type State = {
  isOverlay: boolean
}

class ListPage extends PureComponent<Props, State> {
  _toggleOverlay: toggleOverlay = e => {
    const { target } = e
    const { dataset: { overlay: overlayVal } } = target as HTMLDivElement
    let overlay: boolean = false
    if (!overlayVal) {
      overlay = true
    }
    this.setState({ isOverlay: overlay })
  }

  state = {
    isOverlay: false,
    toggleOverlay: this._toggleOverlay
  }

  _loadMore = () => {
    const { relay } = this.props
    if (!relay.hasMore()) return
    relay.loadMore(ITEMS_PER_PAGE, () => null)
  }

  render() {
    const { viewer, relay } = this.props
    const { allPosts: { edges } } = viewer

    return (
      <OverlayProvider value={this.state}>
        <Wrapper>
          <OverlayConsumer>
            {({ isOverlay, toggleOverlay }) => (
              isMobile && <Overlay onTouchEnd={toggleOverlay} on={isOverlay} data-overlay="close" />
            )}
          </OverlayConsumer>
          <UserConsumer>
            {user => (
              <TopPart>
                {user.name &&
                  <WelcomeUser>
                    Hello {user.name}!
                  </WelcomeUser>
                }
                <StyledLink
                  mobile={isMobile.toString()}
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
              </PostsLoading>}
          >
            <ScrollContainer>
              <OverlayConsumer>
                {({ isOverlay, toggleOverlay }) => (
                  edges && edges.map(({ node }) =>
                    <Post
                      key={node.__id}
                      post={node}
                      viewerId={viewer.id}
                      isOverlay={isOverlay}
                      toggleOverlay={toggleOverlay}
                    />
                ))}
              </OverlayConsumer>
            </ScrollContainer>
          </InfiniteScroll>
        </Wrapper>
      </OverlayProvider>
    )
  }
}

export default createPaginationContainer(ListPage,
  {
    viewer: graphql`
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
      }
    `
  },
  {
    direction: 'forward',
    query: graphql`
      query ListPagePaginationQuery($count: Int! $pCursor: String, $cCursor: String) {
        viewer {
          ...ListPage_viewer
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allPosts
    },
    getVariables(_, { count, cursor }) {
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
`

const Wrapper = styled.div`
  margin-top: 5.2rem;
  position: relative;
  div {
    max-width: 100%;
  }
`
const ScrollContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-template-rows: repeat(auto-fill, minmax(40px,1fr));
  grid-auto-flow: row;
  justify-items: center;
`
const TopPart = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, .6);
  height: 5.2rem;
`
const WelcomeUser = styled.div`
  left: 0;
  color: rgba( 0, 0, 0, .3 );
  ${Decorated}
`
const StyledLink = styled(Link)`
  right: 0;
  color: black;
  ${({ mobile }: { mobile: string }) => mobile === 'true' ? '' : Dim}
  ${Decorated}
`
const PostsLoading = styled.div`
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
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props: { on: boolean }) => props.on ? '100%' : 0};
  z-index: 2;
`
