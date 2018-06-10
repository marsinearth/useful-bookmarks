import React, { PureComponent, Fragment } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import Routes from 'react-static-routes'
import history from './utils/history'
import { GC_USER_ID, GC_AUTH_TOKEN } from './utils/constants'

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
