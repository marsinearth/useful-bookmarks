import React, { PureComponent } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import ListPage from './ListPage'
import Loading from '../assets/images/loading.gif'
import { GC_USER_ID, ITEMS_PER_PAGE } from '../constants'
import styled from 'styled-components'

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery($count: Int!, $id: ID, $cursor: String) {
    viewer {
      ...ListPage_viewer
    }
  }
`

class Home extends PureComponent {
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
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <ListPage viewer={props.viewer} />
          }
          return (
            <Wrapper>
              <img
                src={Loading}
                alt="Loading..."
              />
            </Wrapper>
          )
        }}
      />
    );
  }
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  justify-content: center;
  display: flex;
`
