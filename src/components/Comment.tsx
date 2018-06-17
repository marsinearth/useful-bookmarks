import React, {
  createRef,
  Fragment,
  PureComponent,
  FocusEvent,
  MouseEvent,
  RefObject
} from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { isMobile } from 'react-device-detect'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import styled, { css } from 'styled-components'
import AnchorifyText from 'react-anchorify-text'
import DeleteCommentMutation from '../mutations/DeleteCommentMutation'
import { IComment, TooltipMenuProps, Menu, handleEdit } from '../types'
import { contextProps } from '../utils/overlayContext'

type Hover = {
  hover: boolean
}

type State = {
  commentMode?: boolean
} & Menu & Hover

type Props = {
  userId: string | null,
  comment: IComment,
  postId: string,
  handleEdit: handleEdit
} & contextProps

class Comment extends PureComponent<Props, State> {
  state = {
    menu: false,
    hover: false,
    commentMode: false
  }
  optionTooltip: RefObject<HTMLDivElement> = createRef()

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.isOverlay && !this.props.isOverlay) {
      this.setState({ menu: false, hover: false, commentMode: false })
    }
  }

  _openMenuPanel = (e: MouseEvent<HTMLDivElement>) => {
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
    const { comment, postId } = this.props
    if (window.confirm(`Are you sure to delete: ${comment.content}?`)) {
      DeleteCommentMutation(comment.id, postId)
    }
    this.setState({ menu: false })
  }

  render() {
    const { comment, userId, toggleOverlay } = this.props
    const { menu, hover } = this.state
    const content = comment && comment.content
    const commentedBy = comment && comment.commentedBy
    const commentedId = commentedBy && commentedBy.id
    const commentedName = commentedBy && commentedBy.name
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
        <Content>
          <AnchorifyText text={content} />
        </Content>
        <VertOptionContainer
          hover={hover}
          onClick={this._openMenuPanel}
        >
          <FontAwesomeIcon
            size='sm'
            icon={faEllipsisV}
          />
        </VertOptionContainer>
        <Tooltip
          innerRef={this.optionTooltip}
          onBlur={this._handleBlur}
          menu={menu}
          tabIndex={-1}
        >
          {commentAuth &&
            <Fragment>
              <TooltipMenu 
                edit={true} 
                onClick={this._handleEdit}
                onTouchEnd={toggleOverlay}
              >
                <FontAwesomeIcon icon={faPencilAlt} size='xs'/>
                &nbsp;Edit
              </TooltipMenu>
              <TooltipMenu onClick={this._handleDelete}>
                Delete
              </TooltipMenu>
            </Fragment>
          }
        </Tooltip>
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
`
const Container = styled.div`
  font-size: .75rem;
  padding: .25rem .5rem;
  position: relative;
`
const Content = styled.span`
  color: #aaa;
`
const Writer = Content.extend`
  color: #999;
  font-weight: bold;
  margin-right: .5rem;
`
const VertOptionContainer = styled.div`
  position: relative;
  float: right;
  cursor: pointer;
  color: #aaa;
  width: 1rem;
  text-align: center;
  z-index: 3;
  display: ${(props: Hover) => props.hover ? 'block' : 'none'};
`
const Tooltip = styled.div`
  position: absolute;
  bottom: .5rem;
  right: .75rem;
  height: auto;
  padding: .075rem;
  background-color: white;
  outline: 0;
  display: ${(props: Menu) => props.menu ? 'flex' : 'none'};
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: -7px;
  margin-right: -10px;
  z-index: 4;
`
const TooltipMenu = styled.div`
  color: ${(props: TooltipMenuProps) => (props.comment || props.edit) ? '#aaa' : 'red'};
  font-size: .5rem;
  padding: .25rem .5rem;
  vertical-align: middle;
  ${Dim}
`
