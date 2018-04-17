import React, { createRef, PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import DeletePostMutation from '../mutations/DeletePostMutation'
import { withRouter } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import AnimateHeight from 'react-animate-height'
import Comment from './Comment'

//let's practice the new context with commenting theme!!!
class AddComment extends PureComponent {
  render(){
    const { mode, handleBlur } = this.props
    return (
      <AnimateHeight
        duration={500}
        height={mode ? '1rem' : 0}
      >
        <input
          type='text'
          placeholder='Add Comment'
          className='w-100 pa3 mt3'
          onBlur={handleBlur}
        />
      </AnimateHeight>
    )
  }
}

class Post extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      menu: false,
      commentMode: false
    }
    this.optionTooltip = createRef()
  }
  render() {
    const { description, imageUrl, siteUrl, comments } = this.props.post,
    { menu, commentMode } = this.state
    //console.log('comments: ', comments)
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
        <div className='pt3 relative'>
          {description}&nbsp;
          <div
            className='fr pointer light-silver pr1'
            onClick={this._openMenuPanel}
          >
            <FontAwesomeIcon
              icon={faEllipsisV}
              pull='right'
            />
          </div>
          <div
            ref={this.optionTooltip}
            onBlur={this._handleBlur}
            className={`absolute top-0 right-0 bg-white d${menu ? 'ib' : 'n'} outline-0`}
            style={{ marginTop:'1px', marginRight:'-15px' }}
            tabIndex='-1'
          >
            <div
              className='light-silver f6 pointer dim pv1 ph2 tr'
              onClick={this._addComment}
            >
              + Comment
            </div>
            <div
              className='red f6 pointer dim pv1 ph2 tr'
              onClick={this._handleDelete}
            >
              Delete
            </div>
          </div>
          {comments.edges.map(({ node }) =>
            <Comment
              key={node.__id}
              comment={node}
            />
          )}
          <AddComment
            mode={commentMode}
            handleBlur={this._handleBlur}
          />
        </div>
      </div>
    )
  }
  _openMenuPanel = () => {
    this.setState({ menu: true }, () => {
      this.optionTooltip.current.focus()
    })
  }
  _handleBlur = e => {
    const target = e.target || e.srcElement,
    tagName = target && target.tagName
    let stateObj = {}
    switch(tagName) {
      case 'INPUT':
        stateObj['commentMode'] = false
        break
      default:
        stateObj['menu'] = false
        break
    }
    this.setState(stateObj)
  }
  _addComment = () => {
    this.setState({ commentMode: true, menu: false })
  }
  _handleDelete = () => {
    const { post, viewer } = this.props
    if(window.confirm(`Are you sure to delete: ${post.description}?`))
      DeletePostMutation(post.id, viewer.id)
    this.setState({ menu: false })
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
    comments(
      last: 100,
      orderBy: createdAt_DESC
    ) @connection(
      key: "Post_comments",
      filters: []
    ) {
      edges {
        node {
          ...Comment_comment
        }
      }
    }
  }
`)

export default withRouter(FragmentContainer)
