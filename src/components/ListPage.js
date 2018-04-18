import React, { PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { Link } from 'react-router-dom'
import Post from './Post'
import styled, { css } from 'styled-components'

class ListPage extends PureComponent {
  render() {
    const { viewer } = this.props,
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
        <InnerWrapper>
          {viewer.allPosts.edges.map(({ node }) =>
            <Post
              key={node.__id}
              post={node}
              viewer={viewer}
            />
          )}
        </InnerWrapper>
      </Wrapper>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    ...Post_viewer
    User(id: $id) {
      name
    }
    allPosts(
      last: 100,
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
    }
  }
`)

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
  width: 100%;
  justify-content: center;
  display: flex;
`,
InnerWrapper = styled.div`
  width: 100%;
  max-width: 400px;
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
`
