import { PageInfo } from 'react-relay'
import {
  RecordSourceSelectorProxy,
  RecordProxy
 } from 'relay-runtime'

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
  edit?: boolean
}

export type Menu = {
  menu: boolean
}

export interface handleEdit<C> {
  handleEdit: (comment: C) => void
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
  comments: {
    edges: ICommentNodes[],
    pageInfo: PageInfo
  }
}

export type compRes = {
  id: string,
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
    newObj: RecordProxy
  ): void
}