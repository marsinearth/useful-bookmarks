import React, {
  createRef,
  Fragment,
  PureComponent
} from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { isMobile } from 'react-device-detect'
import styled, { css } from 'styled-components'
import DeletePostMutation from '../mutations/DeletePostMutation'
import CreateComment from './CreateComment'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import { UserConsumer } from '../utils/userContext'
import ListComments from './ListComments'
import history from '../utils/history'

class Post extends PureComponent {
  state = {
    menu: false,
    commentMode: false,
    editComment: null
  }
  optionTooltip = createRef()

  _openMenuPanel = () => {
    this.setState({ menu: true }, () => {
      this.optionTooltip.current.focus()
    })
  }

  _handleBlur = e => {
    let target = e, stateObj = { editComment: null }
    if(e.target) target = e.target || e.srcElement
    const tagName = target && target.tagName
    if(tagName === 'INPUT') stateObj['commentMode'] = false
    else stateObj['menu'] = false
    this.setState(stateObj)
  }

  _editPost = () => {
    const { post } = this.props
    this.setState({
      commentMode: true,
      menu: false
    }, () => history.push({
      pathname: '/create',
      state: { editPost: post }
    }))
  }

  _deletePost = () => {
    const { post, viewer } = this.props
    if(window.confirm(`Are you sure to delete: ${post.description}?`))
      DeletePostMutation(post.id, viewer.id)
    this.setState({ menu: false })
  }

  _addComment = () => {
    this.setState({
      commentMode: true,
      menu: false
    })
  }

  _editComment = comment => {
    this.setState({
      commentMode: true,
      editComment: comment
    })
  }

  render() {
    const { post, viewerId } = this.props,
    {
      menu,
      commentMode,
      editComment
    } = this.state,
    {
      id,
      description,
      imageUrl,
      siteUrl,
      postedBy
    } = post,
    posterId = postedBy && postedBy.id

    return (
      <Container>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImgContainer
            url={imageUrl}
            mobile={isMobile ? 'true' : 'false'}
          />
        </a>
        <UserConsumer>
          {user => (
            <InfoContainer>
              <TitleContainer>
                <span>{description}</span>
                {user.id &&
                  <VertOptionContainer onClick={this._openMenuPanel}>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                  </VertOptionContainer>
                }
              </TitleContainer>
              <Tooltip
                innerRef={this.optionTooltip}
                onBlur={this._handleBlur}
                menu={menu}
                tabIndex='-1'
              >
                <TooltipMenu comment onClick={this._addComment}>
                  + Comment
                </TooltipMenu>
                {posterId === user.id &&
                  <Fragment>
                    <TooltipMenu edit onClick={this._editPost}>
                      <FontAwesomeIcon icon={faPencilAlt} size='xs'/>
                      &nbsp;Edit
                    </TooltipMenu>
                    <TooltipMenu onClick={this._deletePost}>
                      Delete
                    </TooltipMenu>
                  </Fragment>
                }
              </Tooltip>
              <ListComments
                post={post}
                handleEdit={this._editComment}
                userId={user.id}
              />
              <CreateComment
                mode={commentMode}
                editComment={editComment}
                commentedPostId={id}
                viewerId={viewerId}
                user={user}
                handleBlur={this._handleBlur}
              />
            </InfoContainer>
          )}
          </UserConsumer>
      </Container>
    )
  }
}

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    description
    imageUrl
    siteUrl
    postedBy {
      id
      name
    }
    ...ListComments_post
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
  width: 365px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, .05);
  margin-bottom: 1.5rem;
  box-sizing: border-box;
`,
ImgContainer = styled.div`
  width: 100%;
  background-size: cover;
  background-image: ${props => props.url && 'url(' + props.url + ')'};
  padding-bottom: 100%;
  ${props => props.mobile === 'false' ? Dim : ''}
`,
InfoContainer = styled.div`
  padding-top: 1rem;
  position: relative;
`,
TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,
VertOptionContainer = styled.div`
  cursor: pointer;
  color: #aaa;
  text-align: center;
  width: 1rem;
`,
Tooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  padding: .25rem;
  background-color: white;
  outline: 0;
  display: ${props => props.menu ? 'flex' : 'none'};
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1px;
  margin-right: -15px;
`,
TooltipMenu = styled.div`
  color: ${props => (props.comment || props.edit) ? '#aaa' : 'red'};
  font-size: .875rem;
  padding: .25rem .5rem;
  vertical-align: middle;
  ${Dim}
`
