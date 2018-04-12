import React, { PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import DeletePostMutation from '../mutations/DeletePostMutation'
import { withRouter } from 'react-router-dom';

class Post extends PureComponent {
  render() {
    const { description, imageUrl, siteUrl } = this.props.post
    return (
      <div className='pa3 bg-black-05 ma3'>
        <a
          className='link pointer'
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className='w-100 dim'
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              paddingBottom: '100%'
            }}
          />
        </a>
        <div className='pt3'>
          {description}&nbsp;
          <span
            className='red f6 pointer dim'
            onClick={this._handleDelete}
          >
            Delete
          </span>
        </div>
      </div>
    )
  }
  _handleDelete = () => {
    const { post, viewer } = this.props
    window.confirm(`Are you sure to delete: ${post.description}?`) &&
      DeletePostMutation(post.id, viewer.id)
  }
}

const FragmentContainer = createFragmentContainer(Post, graphql`
  fragment Post_viewer on Viewer {
    id
  }
  fragment Post_post on Post {
    id
    description
    imageUrl
    siteUrl
  }
`)

export default withRouter(FragmentContainer)
