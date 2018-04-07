import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import ListPage from './ListPage'
import Loading from '../assets/images/loading.gif'

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`

class Home extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={HomeAllPostQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <ListPage viewer={props.viewer} />
          }
          return (
            <div className='w-100 pa4 flex justify-center'>
              <img
                src={Loading}
                alt="Loading..."
              />
            </div>
          )
        }}
      />
    );
  }
}

export default Home;
