import React, { PureComponent } from 'react'
import {
  QueryRenderer,
  graphql,
  ReadyState
} from 'react-relay'
import environment from '../utils/Environment'
import { UserProvider } from '../utils/userContext'
import ListPage from './ListPage'
import Loading from '../assets/images/loading.gif'
import { GC_USER_ID, ITEMS_PER_PAGE } from '../utils/constants'
import styled from 'styled-components'

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery(
    $count: Int!,
    $id: ID,
    $pCursor: String,
    $cCursor: String
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

class Home extends PureComponent {
  queryRender = ({ error, props }: ReadyState) => {
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

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <QueryRenderer
        environment={environment}
        query={HomeAllPostQuery}
        variables={{
          id: userId,
          count: ITEMS_PER_PAGE
        }}
        render={this.queryRender}
      />
    );
  }
}

export default Home;

const Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;
`
