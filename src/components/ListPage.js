import React, { PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { Link } from 'react-router-dom'
import Post from './Post'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants';

class ListPage extends PureComponent {
  componentWillUnmount() {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
  }
  render() {
    const { viewer } = this.props
    //userId = localStorage.getItem(GC_USER_ID)
    return (
      <div className='w-100 flex justify-center'>
        <Link
          to='/create'
          className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'
        >
          + New Post
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
