import React, { PureComponent } from 'react'
import CreateCommentMutation from '../mutations/CreateCommentMutation'
import AnimateHeight from 'react-animate-height'
import { GC_USER_ID } from '../constants'
import styled from 'styled-components'

//let's practice the new context with commenting theme!!!
class CreateComment extends PureComponent {
  state = {
    content: ''
  }
  render(){
    const { mode, handleBlur } = this.props
    //console.log('createcomment this.props: ', this.props)
    return (
      <AnimateHeight
        duration={500}
        height={mode ? 'auto' : 0}
      >
        <form onSubmit={this._handleSubmit}>
          <Input
            type='text'
            placeholder='Add Comment'
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
    { content } = this.state,
    { commentedPostId, viewerId, userName, handleBlur } = this.props,
    target = e.target || e.srcElement,
    targetInput = target && target.querySelector('input')

    CreateCommentMutation(
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
