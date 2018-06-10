import React, { PureComponent, Fragment } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import Routes from 'react-static-routes'
import history from './utils/history'

/*const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)*/

const ForkRibbon = () => (
  <GitHubForkRibbon
    position="right-bottom"
    color="black"
    href="//github.com/marsinearth/useful-bookmarks"
    target="_blank"
    rel="noopener noreferrer"
  >
    <b>Go To Source Code</b>
  </GitHubForkRibbon>
)

class App extends PureComponent {
  componentDidMount() {
    window.onunload = function () {
      localStorage.removeItem(GC_USER_ID)
      localStorage.removeItem(GC_AUTH_TOKEN)
      return
    }
  }
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Routes />
        </Router>
        <ForkRibbon />
      </Fragment>
    )
  }
}

export default hot(module)(App)
