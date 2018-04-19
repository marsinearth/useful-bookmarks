import React, { createRef, PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import styled, { css } from 'styled-components'
import DeleteCommentMutation from '../mutations/DeleteCommentMutation'

class Comment extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      menu: false,
      hover: false,
      //commentMode: false
    }
    this.optionTooltip = createRef()
  }
  render() {
    const { comment, vertOptionIcon, viewer } = this.props,
    { menu, hover } = this.state,
    content = comment && comment.content,
    commentedBy = comment && comment.commentedBy,
    commentedId = commentedBy && commentedBy.id,
    commentedName = commentedBy && commentedBy.name,
    userInfo = viewer && viewer.User,
    userId = userInfo && userInfo.id,
    commentAuth = commentedId === userId

    return (
      <Container
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <Writer>
          {commentedName}:
        </Writer>
        <Content>
          {content}
        </Content>
        <VertOptionContainer
          hover={hover}
          onClick={this._openMenuPanel}
        >
          {vertOptionIcon}
        </VertOptionContainer>
        <Tooltip
          innerRef={this.optionTooltip}
          onBlur={this._handleBlur}
          menu={menu}
          tabIndex='-1'
        >
          {/*<TooltipMenu comment>
            + Comment
          </TooltipMenu>*/}
          {commentAuth &&
            <TooltipMenu onClick={this._handleDelete}>
              Delete
            </TooltipMenu>
          }
        </Tooltip>
      </Container>
    )
  }
  _openMenuPanel = () => {
    this.setState({ menu: true }, () => {
      this.optionTooltip.current.focus()
    })
  }
  _handleMouseEnter = () => {
    const viewer = this.props.viewer,
    userInfo = viewer && viewer.User,
    userId = userInfo && userInfo.id
    if(userId) this.setState({ hover: true })
  }
  _handleMouseLeave = () => {
    this.setState({ hover: false })
  }
  _handleBlur = e => {
    let stateObj = {}
    const target = e.target || e.srcElement,
    tagName = target && target.tagName
    if(tagName === 'INPUT') stateObj['commentMode'] = false
    else stateObj['menu'] = false
    this.setState(stateObj)
  }
  _handleDelete = () => {
    const { comment, postId } = this.props
    if(window.confirm(`Are you sure to delete: ${comment.content}?`))
      DeleteCommentMutation(comment.id, postId)
    this.setState({ menu: false })
  }
}

export default createFragmentContainer(Comment, graphql`
  fragment Comment_viewer on Viewer {
    id
    User(id: $id) {
      id
    }
    allComments(
      last: 100,
      orderBy: createdAt_ASC
    ) @connection(
      key: "Comment_allComments",
      filters: []
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
  fragment Comment_comment on Comment {
    id
    content
    commentedBy {
      id
      name
    }
    commentedPost {
      id
    }
  }
`)

const Dim = css`
  opacity: 1;
  transition: opacity .15s ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`,
Container = styled.div`
  font-size: .75rem;
  padding: .25rem .5rem;
  position: relative;
`,
Writer = styled.span`
  color: #999;
  font-weight: bold;
  margin-right: .5rem;
`,
Content = styled.span`
  color: #aaa;
`,
VertOptionContainer = styled.div`
  float: right;
  cursor: pointer;
  color: #aaa;
  width: 1rem;
  text-align: center;
  display: ${props => props.hover ? 'block' : 'none'};
`,
Tooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 1rem;
  background-color: white;
  outline: 0;
  display: ${props => props.menu ? 'flex' : 'none'};
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1px;
  margin-right: -10px;
`,
TooltipMenu = styled.div`
  color: ${props => props.comment ? '#aaa' : 'red'};
  font-size: .5rem;
  padding: .25rem .5rem;
  vertical-align: middle;
  ${Dim}
`
