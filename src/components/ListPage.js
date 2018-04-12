import React, { PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { Link } from 'react-router-dom'
import Post from './Post'


class ListPage extends PureComponent {
  render() {
    const { viewer } = this.props,
    userInfo = viewer.User,
    userName = userInfo && userInfo.name

    return (
      <div className='w-100 flex justify-center'>
        {userName &&
          <div className='fixed bg-white top-0 left-0 pa4 ttu black-30 no-underline'>
            Hello {userName}!
          </div>
        }
        <Link
          to={userName ? '/create' : '/login'}
          className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'
        >
          + {userName ? 'New Post' : 'Sign In'}
        </Link>
        <div
          className='w-100'
          style={{ maxWidth: 400 }}
        >
          {viewer.allPosts.edges.map(({ node }) =>
            <Post
              key={node.__id}
              post={node}
              viewer={viewer}
            />
          )}
        </div>
      </div>
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
