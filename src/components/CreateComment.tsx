import React, {
  createRef,
  ChangeEvent,
  FormEvent,
  PureComponent
 } from 'react'
import CreateCommentMutation from '../mutations/CreateCommentMutation'
import AnimateHeight from 'react-animate-height'
import styled from 'styled-components'
import UpdateCommentMutation from '../mutations/UpdateCommentMutation'
import { contextProps } from '../utils/userContext'
import { IComment } from '../types'

type State = {
  editing: boolean
  content: string
}

interface Props {
  editComment: IComment | null
  handleBlur: (e: any) => void
  mode: boolean
  commentedPostId: string
  viewerId: string
  user: contextProps
}

class CreateComment extends PureComponent<Props, State> {
  state = {
    editing: false,
    content: ''
  }
  commentNode: any = createRef()

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
  
  _onBlur = (e: any) => {
    this.setState({
      editing: false,
      content: ''
    }, () => this.props.handleBlur(e))
  }

  _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const content = target && target.value
    this.setState({ content })
  }

  _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { content } = this.state
    const {
      commentedPostId,
      editComment,
      user
    } = this.props
    const { id, name } = user
    const target = e.target as HTMLDivElement
    const targetInput = target.querySelector('input') as EventTarget

    if (editComment) {
      UpdateCommentMutation(
        content,
        editComment,
        () => this._onBlur(targetInput)
      )
    } else if (id && name) {
      CreateCommentMutation(
        content,
        id,
        name,
        commentedPostId,
        () => this._onBlur(targetInput)
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

export default CreateComment

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
`
