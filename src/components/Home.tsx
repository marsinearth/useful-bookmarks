import React, { PureComponent, ErrorInfo } from 'react'
import {
  QueryRenderer,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../utils/Environment'
import { UserProvider } from '../utils/userContext'
import ListPage from './ListPage'
import Loading from '../assets/images/loading.gif'
import { GC_USER_ID, ITEMS_PER_PAGE, MAX_LIKES } from '../utils/constants'
import styled from 'styled-components'

type State = {
  userId: string,
  hasError: boolean
}

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery(
    $count: Int!,
    $id: ID,
    $pCursor: String,
    $cCursor: String,
    $maxLikes: Int!
  ) {
    viewer {
      User(id: $id) {
        id
        name
      }
      ...ListPage_viewer
    }
  }
`

const queryRenderee = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>
  }
  if (props) {
    const { User } = props.viewer
    const userVal = User ? User : { id: null, name: null }
    return (
      <UserProvider value={userVal}>
        <ListPage viewer={props.viewer} />
      </UserProvider>
    )
  }
  return (
    <Wrapper>
      <img
        src={Loading}
        alt="Loading..."
      />
    </Wrapper>
  )
}

export default class Home extends PureComponent<unknown, State> {
  state = {
    userId: '',
    hasError: false
  }

  static getDerivedStateFromProps(_: unknown, prevState: State) {
    if (prevState.userId === '') {
      return { userId: sessionStorage.getItem(GC_USER_ID) }
    }
    return null
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (error) {
      this.setState({
        hasError: true
      }, () => {
        console.log('error ocurred!! info: ', info)
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>OMG!! ERRRORRRRR</h1>
    }
    return (
      <QueryRenderer
        environment={environment}
        query={HomeAllPostQuery}
        variables={{
          id: this.state.userId,
          count: ITEMS_PER_PAGE,
          maxLikes: MAX_LIKES
        }}
        render={queryRenderee}
      />
    )
  }
}

const Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;
`
