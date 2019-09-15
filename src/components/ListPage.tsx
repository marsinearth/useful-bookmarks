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
import Masonry from 'react-masonry-component';
import history from '../utils/history'
import Post, { Dim } from './Post'
import Loading from '../assets/images/loading.gif'
import { UserContext } from '../utils/userContext'
import { ITEMS_PER_PAGE } from '../utils/constants'
import { IPost, toggleOverlay } from '../types';
import { OverlayProvider } from '../utils/overlayContext'

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

type TStyledLink = {
  mobile?: string,
  isLogOut?: boolean
}

const masonryOptions = {
  transitionDuration: 0,
  gutter: 15,
  fitWidth: true,
  stagger: 30
}

const masonryStyle = {
  margin: '0 auto',
  width: 'auto'
}

class ListPage extends PureComponent<Props, State> {
  static contextType = UserContext

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

  _onLogOut = () => {
    sessionStorage.clear()
    history.push('/login')
    setTimeout(() => {
      history.replace('/')
    })
  }

  render() {
    const { viewer: { id: viewerId, allPosts: { edges } }, relay } = this.props
    const { isOverlay, toggleOverlay } = this.state
    const { name } = this.context
    return (
      <OverlayProvider value={this.state}>
        <Wrapper>
          {isMobile && <Overlay onTouchEnd={toggleOverlay} on={isOverlay} data-overlay="close" />}
          <TopPart>
            <StyledLinkContainer>
              <StyledLink
                mobile={isMobile.toString()}
                to={name ? '/create' : '/login'}
              >
                + {name ? 'New Post' : 'Sign In'}
              </StyledLink>
              {!!name && (
                <StyledLink
                  as="div"
                  mobile={isMobile.toString()}
                  isLogOut
                  to="/"
                  onClick={this._onLogOut}
                >
                  Log Out
                </StyledLink>
              )}
            </StyledLinkContainer>
            {name &&
              <WelcomeUser>
                Hello {name}!
              </WelcomeUser>
            }
          </TopPart>
          <InfiniteScroll
            pageStart={0}
            loadMore={this._loadMore}
            hasMore={relay.hasMore()}
            loader={
              <PostsLoading key={0}>
                <img src={Loading} alt="Loading..."/>
              </PostsLoading>}
          >
            <Masonry
              enableResizableChildren
              options={masonryOptions}
              style={masonryStyle}
            >
              {edges && edges.map(({ node }) =>
                <Post
                  key={node.__id}
                  post={node}
                  viewerId={viewerId}
                  isOverlay={isOverlay}
                  toggleOverlay={toggleOverlay}
                />
              )}
            </Masonry>
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
      query ListPagePaginationQuery($count: Int! $pCursor: String, $cCursor: String, $maxLikes: Int!) {
        viewer {
          ...ListPage_viewer
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allPosts
    },
    getVariables(_, { count, cursor }, { maxLikes }) {
      return {
        count,
        pCursor: cursor,
        maxLikes
      }
    }
  }
)

const Decorated = css`
  padding: 2rem;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  margin-top: 5.2rem;
  position: relative;
`
const TopPart = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, .6);
  height: 5.2rem;
  z-index: 1;
`
const WelcomeUser = styled.div`
  display: flex;
  color: rgba( 0, 0, 0, .3 );
  ${Decorated}
`

const StyledLinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const StyledLink = styled(Link)<TStyledLink>`
  display: flex;
  align-self: stretch;
  color: ${({ isLogOut }) => isLogOut ? 'lightcoral' : 'black'};
  ${({ mobile }) => mobile === 'true' ? '' : Dim};
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
