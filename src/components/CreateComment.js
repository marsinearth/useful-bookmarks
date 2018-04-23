import React, { PureComponent, createRef } from 'react'
import CreateCommentMutation from '../mutations/CreateCommentMutation'
import AnimateHeight from 'react-animate-height'
import { GC_USER_ID } from '../constants'
import styled from 'styled-components'
import UpdateCommentMutation from '../mutations/UpdateCommentMutation'

class CreateComment extends PureComponent {
  state = {
    edit: false,
    content: ''
  }
  commentNode = createRef()

  static getDerivedStateFromProps(nextProps, prevState) {
    const { edit, editingComment } = nextProps
    if(edit && !prevState.edit)
      return { content: editingComment.content, edit: true }
    return null
  }
  componentDidUpdate() {
    if(this.props.mode) this.commentNode.current.focus()
  }
  render(){
    const { mode, handleBlur } = this.props,
    { edit } = this.state

    return (
      <AnimateHeight
        duration={500}
        height={mode ? 'auto' : 0}
      >
        <form onSubmit={this._handleSubmit}>
          <Input
            type='text'
            innerRef={this.commentNode}
            placeholder={`${edit ? 'Edit' : 'Add'} Comment`}
            onChange={this._handleChange}
            onBlur={handleBlur}
            value={this.state.content}
          />
        </form>
      </AnimateHeight>
    )
  }
  _handleChange = e => {
    const target = e.target || e.srcElement,
    content = target && target.value
    this.setState({ content })
  }
  _handleSubmit = e => {
    e.preventDefault()
    const commentedById = localStorage.getItem(GC_USER_ID),
    { content, edit } = this.state,
    {
      commentedPostId,
      editingComment,
      viewerId,
      userName,
      handleBlur
    } = this.props,
    target = e.target || e.srcElement,
    targetInput = target && target.querySelector('input')

    if(edit) UpdateCommentMutation(
      content,
      editingComment,
      viewerId,
      () => this.setState({
        content: '',
        edit: false
      }, () => handleBlur(targetInput))
    )

    else CreateCommentMutation(
      content,
      commentedById,
      userName,
      commentedPostId,
      viewerId,
      () => this.setState({ content: '' }, () => handleBlur(targetInput))
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
