import React, { PureComponent } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import ListPage from './ListPage'
import Loading from '../assets/images/loading.gif'
import { GC_USER_ID } from '../constants'

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery($id: ID) {
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
        variables={{ id: userId }}
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
