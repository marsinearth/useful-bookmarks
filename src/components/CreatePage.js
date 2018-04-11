import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CreatePostMutation from '../mutations/CreatePostMutation'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import Loading from '../assets/images/loading.gif'

const CreatePageViewerQuery = graphql`
  query CreatePageViewerQuery {
    viewer {
      id
    }
  }
`

class CreatePage extends PureComponent {
  state = {
    description: '',
    imageUrl: '',
    siteUrl: ''
  }
  render() {
    const { description, imageUrl, siteUrl } = this.state
    return (
      <QueryRenderer
        environment={environment}
        query={CreatePageViewerQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div className='w-100 pa4 flex justify-center'>
                <div
                  style={{ maxWidth: 400 }}
                  className=''
                >
                  <input
                    className='w-100 pa3 mv2'
                    value={description}
                    placeholder='Description'
                    onChange={(e) => this.setState({ description: e.target.value })}
                  />
                  <input
                    className='w-100 pa3 mv2'
                    value={imageUrl}
                    placeholder='Image Url'
                    onChange={(e) => this.setState({ imageUrl: e.target.value })}
                  />
                  <input
                    className='w-100 pa3 mv2'
                    value={siteUrl}
                    placeholder='Site Url'
                    onChange={(e) => this.setState({ siteUrl: e.target.value })}
                  />
                  {imageUrl &&
                    <img
                      src={imageUrl}
                      alt={description}
                      className='w-100 mv3'
                    />
                  }
                  {description && imageUrl && siteUrl &&
                    <button
                      className='pa3 bg-black-10 bn dim ttu pointer'
                      onClick={() => this._handlePost(props.viewer.id)}
                    >
                      Post
                    </button>
                  }
                  <div style={{ textAlign: "center", color: "red" }}>
                    <Link to="/" >
                      Cancel
                    </Link>
                 </div>
                </div>
              </div>
            )
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
    )
  }
  _handlePost = viewerId => {
    const { description, imageUrl, siteUrl } = this.state
    CreatePostMutation(description, imageUrl, siteUrl, viewerId, () => this.props.history.replace('/'))
  }
}
export default withRouter(CreatePage)
