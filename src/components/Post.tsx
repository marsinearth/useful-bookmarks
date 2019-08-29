import React, {
  createRef,
  forwardRef,
  PureComponent,
  MouseEvent,
  TouchEvent
} from 'react'
import {
  createFragmentContainer,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { isMobile } from 'react-device-detect'
import styled, { css } from 'styled-components'
import Img from 'react-image'
import DeletePostMutation from '../mutations/DeletePostMutation'
import CreateComment from './CreateComment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linkify from 'react-linkify'
import { UserConsumer } from '../utils/userContext'
import ListComments from './ListComments'
import history from '../utils/history'
import { IPost, IComment, TooltipMenuProps, Menu, toggleOverlay, BlurEvent } from '../types';
import { contextProps } from '../utils/overlayContext'
import { linkifyProps } from './Comment';
import loadingGif from '../assets/images/loading.gif'
import brokenImg from '../assets/images/broken-img.png'

type State = {
  menu?: boolean,
  commentMode?: boolean,
  editComment: IComment | null
}

type Props = {
  post: IPost,
  viewerId: string
} & contextProps

type TooltipProps = {
  handleBlur: (e: BlurEvent) => void,
  handleEdit: () => void,
  handleDelete: () => void,
  menu?: boolean, 
  writerAuth: boolean,
  toggleOverlay: toggleOverlay,
  isPost?: boolean,
  addComment?: () => void
}

export const TooltipComp = forwardRef<any, TooltipProps>(({
  handleBlur, 
  handleEdit,
  handleDelete,
  menu,
  writerAuth,
  toggleOverlay,
  isPost,
  addComment
}, ref) => (
  <Tooltip
    ref={ref}
    onBlur={handleBlur}
    menu={menu}
    tabIndex={-1}
    isPost={isPost}
    writerAuth={writerAuth}
  >
    {isPost && (
      <TooltipMenu
        comment
        onClick={addComment}
        onTouchEnd={toggleOverlay}
        isPost={isPost}
      >
        + Comment
      </TooltipMenu>
    )}
    {writerAuth && (
      <>
        <TooltipMenu
          edit
          onClick={handleEdit}
          onTouchEnd={toggleOverlay}
          isPost={isPost}
        >
          <FontAwesomeIcon icon="pencil-alt" size="xs"/>
          {' Edit'}
        </TooltipMenu>
        <TooltipMenu onClick={handleDelete} isPost={isPost}>
          Delete
        </TooltipMenu>
      </>
    )}
  </Tooltip>
))

const LoadingComp = ({ className }) => (
  <div className={className}>
    <img src={loadingGif} alt="Loading..." />
  </div>
)

class Post extends PureComponent<Props, State> {
  state: State = {
    menu: false,
    commentMode: false,
    editComment: null
  }
  optionTooltip = createRef<any>()

  componentDidUpdate(prevProps: Props, _: unknown) {
    if (prevProps.isOverlay && !this.props.isOverlay) {
      this.setState({ menu: false, commentMode: false })
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

  _handleBlur = (e: BlurEvent) => {
    const { target } = e
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
    const { post: { id, description }, viewerId } = this.props
    if (window.confirm(`Are you sure to delete: ${description}?`)) {
      DeletePostMutation(id, viewerId)
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
    const {
      post,
      post: {
        id,
        description,
        imageUrl,
        siteUrl,
        postedBy: { 
          id: posterId,
          name: posterName 
        }
      },
      viewerId,
      toggleOverlay
    } = this.props
    const {
      menu,
      commentMode,
      editComment
    } = this.state
    return (
      <Container>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImgContainer
            src={[imageUrl, brokenImg]}
            mobile={isMobile.toString()}
            loader={<LoadingWrapper />}
          />
        </a>
        <UserConsumer>
          {user => (
            <InfoContainer>
              <TitleContainer>
                <div className="titleSection">
                  <span className="username">
                    {posterName}
                  </span>
                  <Linkify properties={linkifyProps}>
                    {description}
                  </Linkify>
                </div>
                {user.id &&
                  <VertOptionContainer onClick={this._openMenuPanel}>
                    <FontAwesomeIcon icon="ellipsis-v" />
                  </VertOptionContainer>
                }
              </TitleContainer>
              <TooltipComp 
                ref={this.optionTooltip}
                handleBlur={this._handleBlur} 
                handleEdit={this._editPost}
                handleDelete={this._deletePost}
                menu={menu}
                writerAuth={posterId === user.id}
                toggleOverlay={toggleOverlay}
                addComment={this._addComment}
                isPost
              />
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

export const Dim = css`
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
  box-sizing: border-box;
  border-radius: 0.5rem;
`
const ImgContainer = styled(Img)`
  width: 100%;
  max-height: 270px;
  object-fit: cover;
  ${({ mobile }) => mobile === 'true' ? '' : Dim}
`
const LoadingWrapper = styled<any>(LoadingComp)`
  padding: 2rem;
  justify-content: center;
  display: flex;
`
const InfoContainer = styled.div`
  padding-top: 1rem;
  position: relative;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div.titleSection {
    display: flex;
    flex-direction: column;

    span.username {
      font-size: .8rem;
      color: #999;
      font-weight: bold;
      padding: 0 .5rem 0 0;  
      text-transform: capitalize;    
    }
  }
`
export const VertOptionContainer = styled.div`
  position: relative;
  cursor: pointer;
  color: #aaa;
  text-align: center;
  width: 1rem;
  z-index: 3;
`
const Tooltip = styled("div")<Menu>`
  position: absolute;
  ${({ isPost, writerAuth }) => isPost 
    ? (writerAuth ? 'top: 0' : 'top: 1rem') 
    : 'bottom: .5rem'
  };
  right: ${({ isPost }) => isPost ? '0' : '.75rem'};
  height: auto;
  padding: .25rem;
  background-color: white;
  outline: 0;
  display: ${({ menu }) => menu ? 'flex' : 'none'};
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  ${({ isPost }) => isPost ? 'margin-top: 1px' : 'margin-bottom: -7px' };
  margin-right: ${({ isPost }) => isPost ? '-15px' : '-10px'};
  z-index: 4;
`
const TooltipMenu = styled("div")<TooltipMenuProps>`
  color: ${({ comment, edit }) => (comment || edit) ? '#aaa' : 'red'};
  font-size: ${({ isPost }) => isPost ? '.875rem' : '.5rem'};
  padding: .25rem .5rem;
  vertical-align: middle;
  ${Dim}
`
