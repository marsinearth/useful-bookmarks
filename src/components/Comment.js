import React, { PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import styled from 'styled-components'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props,
    content = comment && comment.content,
    commentedBy = comment && comment.commentedBy

    return (
      <Container>
        <Writer>
          {commentedBy.name}:
        </Writer>
        <Content>
          {content}
        </Content>
      </Container>
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

const Container = styled.div`
  font-size: .75rem;
  padding-left: .5rem;
  padding-right: .5rem;
`,
Writer = styled.span`
  color: #999;
  font-weight: bold;
  margin-right: .5rem;
`,
Content = styled.span`
  color: #aaa;
`
