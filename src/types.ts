import {
  FocusEvent,
  FormEvent,
  TouchEvent,
  MouseEvent
} from 'react'
import {
  PageInfo,
  RecordSourceSelectorProxy,
  RecordProxy
} from 'relay-runtime'

export interface ILike {
  id: string,
  __id?: string,
  user: {
    id: string,
  },
  post: {
    id: string
  }
}

export interface IComment {
  id: string,
  __id?: string,
  content: string,
  commentedBy: {
    id: string,
    name: string
  },
  commentedPost: {
    id: string
  }
}

export type TooltipMenuProps = {
  comment?: boolean,
  edit?: boolean,
  isPost?: boolean
}

export type Menu = {
  menu?: boolean,
  isPost?: boolean,
  writerAuth: boolean
}

export type handleEdit = (comment: IComment) => void

type ILikeNodes = {
  node: ILike
}

type ICommentNodes = {
  node: IComment
}

export interface IPost {
  id: string,
  __id?: string,
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedBy: {
    id: string,
    name: string
  },
  likes: {
    count: number,
    edges: ILikeNodes[],
    pageInfo: PageInfo
  },
  comments: {
    count: number,
    edges: ICommentNodes[],
    pageInfo: PageInfo
  }
}

export type compRes = {
  key: string,
  token: string
}

export type AuthMutArgs = {
  (
    email: string,
    password: string,
    successCb: (id: string, token: string) => void,
    failCb: () => void,
    name?: string
  ): void
}

export type AuthVars = {
  email: string,
  password: string,
  clientMutationId: string,
  name?: string,
}

export type DVars = {
  input: {
    id: string,
    clientMutationId: string
  }
}

export type SHU = {
  (
    store: RecordSourceSelectorProxy,
    postId: string,
    newObj: RecordProxy,
  ): void
}

export type BlurEvent =
  FocusEvent<HTMLDivElement> |
  FocusEvent<HTMLInputElement> |
  FormEvent<HTMLFormElement>

export type toggleOverlay = (e:
  TouchEvent<HTMLDivElement> |
  MouseEvent<HTMLDivElement> |
  TouchEvent<HTMLInputElement> |
  TouchEvent<HTMLFormElement>
) => void
