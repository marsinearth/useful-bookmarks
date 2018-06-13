import React, {
  createRef,
  Fragment,
  PureComponent,
  RefObject
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
import { IPost, IComment, TooltipMenuProps, Menu, BlurEvent } from '../types' 

type State = {
  menu?: boolean,
  commentMode?: boolean,
  editComment: IComment | null
}

type Props = {
  post: IPost,
  viewerId: string
}

type ImgContainerProps = {
  url: string,
  mobile: string
}

class Post extends PureComponent<Props, State> {
  state: State = {
    menu: false,
    commentMode: false,
    editComment: null
  }

  optionTooltip: RefObject<HTMLDivElement> = createRef()

  _openMenuPanel = () => {
    this.setState({ menu: true }, () => {
      this.optionTooltip.current.focus()
    })
  }

  _handleBlur = (e: BlurEvent) => {
    const target = e.target
    const stateObj: State = { editComment: null }
    if (target instanceof HTMLInputElement
      || target instanceof HTMLFormElement
    ) stateObj['commentMode'] = false
    else stateObj['menu'] = false
    this.setState(stateObj)
  }

  _editPost = () => {
    const { post } = this.props
    this.setState({ menu: false }, () => { 
      history.push({
        pathname: '/create',
        state: { editPost: post }
      })
    })
  }

  _deletePost = () => {
    const { post, viewerId } = this.props
    if (window.confirm(`Are you sure to delete: ${post.description}?`)) {
      DeletePostMutation(post.id, viewerId)
    }
    this.setState({ menu: false })
  }

  _addComment = () => {
    this.setState({
      commentMode: true,
      menu: false
    })
  }

  _editComment = (comment: IComment) => {
    this.setState({
      commentMode: true,
      editComment: comment
    })
  }

  render() {
    const { post, viewerId } = this.props
    const {
      menu,
      commentMode,
      editComment
    } = this.state
    const {
      id,
      description,
      imageUrl,
      siteUrl,
      postedBy
    } = post
    const posterId = postedBy && postedBy.id

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
              {description}
              {user.id &&
                <VertOptionContainer onClick={this._openMenuPanel}>
                  <FontAwesomeIcon icon={faEllipsisV}/>
                </VertOptionContainer>
              }
              <Tooltip
                innerRef={this.optionTooltip}
                onBlur={this._handleBlur}
                menu={menu}
                tabIndex={-1}
              >
                <TooltipMenu comment={true} onClick={this._addComment}>
                  + Comment
                </TooltipMenu>
                {posterId === user.id &&
                  <Fragment>               
                    <TooltipMenu edit={true} onClick={this._editPost}>                      
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
`
const Container = styled.div`
  width: 365px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, .05);
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
`
const ImgContainer = styled.div`
  width: 100%;
  background-size: cover;
  background-image: ${(props: ImgContainerProps) => props.url && 'url(' + props.url + ')'};
  padding-bottom: 100%;
  ${(props: ImgContainerProps) => props.mobile === 'false' ? Dim : ''}
`
const InfoContainer = styled.div`
  padding-top: 1rem;
  position: relative;
`
const VertOptionContainer = styled.div`
  float: right;
  cursor: pointer;
  color: #aaa;
  text-align: center;
  width: 1rem;
`
const Tooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  padding: .25rem;
  background-color: white;
  outline: 0;
  display: ${(props: Menu) => props.menu ? 'flex' : 'none'};
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1px;
  margin-right: -15px;
`
const TooltipMenu = styled.div`
  color: ${(props: TooltipMenuProps) => (props.comment || props.edit) ? '#aaa' : 'red'};
  font-size: .875rem;
  padding: .25rem .5rem;
  vertical-align: middle;
  ${Dim}
`
