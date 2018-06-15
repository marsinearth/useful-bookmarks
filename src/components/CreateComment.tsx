import React, {
  createRef,
  ChangeEvent,
  FormEvent,
  PureComponent,
  RefObject
 } from 'react'
import CreateCommentMutation from '../mutations/CreateCommentMutation'
import AnimateHeight from 'react-animate-height'
import styled from 'styled-components'
import UpdateCommentMutation from '../mutations/UpdateCommentMutation'
import { contextProps } from '../utils/userContext'
import { IComment, BlurEvent } from '../types'

type State = {
  editing: boolean
  content: string
}

interface Props {
  editComment: IComment | null
  handleBlur: (e: BlurEvent) => void
  mode: boolean
  commentedPostId: string
  viewerId: string
  user: contextProps
}

export default class CreateComment extends PureComponent<Props, State> {
  state = {
    editing: false,
    content: ''
  }
  commentNode: RefObject<HTMLInputElement> = createRef()

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { editComment } = nextProps
    if (editComment && !prevState.editing) {
      const { content } = editComment
      return {
        content,
        editing: true,
      }
    }
    return null
  }

  componentDidUpdate() {
    if (this.props.mode) this.commentNode.current.focus()
  }
  
  _onBlur = (e: BlurEvent) => {
    e.persist()
    this.setState({
      editing: false,
      content: ''
    }, () => {
      this.props.handleBlur(e)
    })
  }

  _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const content = target && target.value
    this.setState({ content })
  }

  _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.persist()
    const { content } = this.state
    const {
      commentedPostId,
      editComment,
      user
    } = this.props
    const { id, name } = user

    if (editComment && content !== '') {
      UpdateCommentMutation(
        content,
        editComment,
        () => this._onBlur(e)
      )
    } else if (id && name && content !== '') {
      CreateCommentMutation(
        content,
        id,
        name,
        commentedPostId,
        () => this._onBlur(e)
      )
    }
  }

  render() {
    const { mode } = this.props
    const { editing, content } = this.state

    return (
      <AnimateHeight
        duration={500}
        height={mode ? 'auto' : 0}
      >
        <form onSubmit={this._handleSubmit}>
          <Input
            type='text'
            innerRef={this.commentNode}
            placeholder={`${editing ? 'Edit' : 'Add'} Comment`}
            onChange={this._handleChange}
            onBlur={this._onBlur}
            value={content}
          />
        </form>
      </AnimateHeight>
    )
  }
}

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
`
