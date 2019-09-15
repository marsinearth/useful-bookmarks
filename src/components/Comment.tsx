import React, {
  createRef,
  PureComponent,
  FocusEvent,
  MouseEvent,
  TouchEvent
} from 'react'
import {
  createFragmentContainer,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { isMobile } from 'react-device-detect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Linkify from 'react-linkify'
import DeleteCommentMutation from '../mutations/DeleteCommentMutation'
import { IComment, Menu, handleEdit } from '../types'
import { contextProps } from '../utils/overlayContext'
import RSwal from '../utils/reactSwal';
import { VertOptionContainer, TooltipComp } from './Post'

type Hover = {
  hover: boolean
}

type State = {
  commentMode?: boolean,
  boom: boolean
} & Omit<Menu, 'writerAuth'> & Hover

type Props = {
  userId: string | null,
  comment: IComment,
  postId: string,
  handleEdit: handleEdit
} & contextProps

type TOptionMouseProps = Hover & {
  onClick: (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void
}

export const linkifyProps = {
  target: "_blank",
  rel: "noopener noreferrer"
}

class Comment extends PureComponent<Props, State> {
  state = {
    menu: false,
    hover: false,
    commentMode: false,
    boom: false
  }
  optionTooltip: any = createRef()

  componentDidUpdate(prevProps: Props) {
    if (prevProps.isOverlay && !this.props.isOverlay) {
      this.setState({ menu: false, hover: false, commentMode: false })
    }
  }

  _openMenuPanel = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    e.persist()
    this.setState({ menu: true }, () => {
      if (isMobile) {
        this.props.toggleOverlay(e)
      }
      this.optionTooltip.current.focus()
    })
  }

  _handleMouseEnter = (e: FocusEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
    const { userId } = this.props
    const { type }: { type: string } = e
    if (userId && (
      (type === 'mouseenter' && !isMobile)
      || (type === 'click' && isMobile)
    )) this.setState({ hover: true })
  }

  _handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  _handleBlur = () => {
    this.setState({ menu: false })
  }

  _handleEdit = () => {
    const { comment, handleEdit } = this.props
    this.setState({ menu: false }, () => {
      handleEdit(comment)
    })
  }

  _handleDelete = () => {
    this.setState({ menu: false }, () => {
      const { comment: { id, content }, postId } = this.props
      RSwal('warning', `Are you sure to delete: ${content}?`, () => {
        DeleteCommentMutation(id, postId)
      })
    })
  }

  render() {
    const { comment, userId, toggleOverlay } = this.props
    const { menu, hover } = this.state
    const { content, commentedBy: { id: commentedId, name: commentedName } } = comment
    const commentAuth = commentedId === userId
    return (
      <Container
        onClick={this._handleMouseEnter}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <Writer>
          {commentedName}:
        </Writer>
        <Linkify properties={linkifyProps}>
          <Content>
            {content}
          </Content>
        </Linkify>
        <VertOptionContainerComment
          hover={hover}
          onClick={this._openMenuPanel}
        >
          <FontAwesomeIcon
            size="sm"
            icon="ellipsis-v"
          />
        </VertOptionContainerComment>
        <TooltipComp
          ref={this.optionTooltip}
          handleBlur={this._handleBlur}
          handleEdit={this._handleEdit}
          handleDelete={this._handleDelete}
          menu={menu}
          writerAuth={commentAuth}
          toggleOverlay={toggleOverlay}
        />
      </Container>
    )
  }
}

export default createFragmentContainer(Comment,
  {
    comment: graphql`
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
    `
  }
)

const Container = styled.div`
  font-size: .75rem;
  padding: .25rem .5rem;
  position: relative;
`
const Content = styled.span`
  width: 100%;
  color: #aaa;
`
const Writer = styled(Content)`
  color: #999;
  font-weight: bold;
  margin-right: .5rem;
`
const VertOptionContainerComment = styled(
  ({ hover, ...rest }) => <VertOptionContainer {...rest} />
)<TOptionMouseProps>`
  float: right;
  display: ${({ hover }) => hover ? 'block' : 'none'};
`
