import React, { PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props,
    content = comment && comment.content

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default createFragmentContainer(Comment, graphql`
  fragment Comment_comment on Comment {
    id
    content
    commentedBy {
      id
      name
    }
    commentedPost {
      id
      description
    }
  }
`)
