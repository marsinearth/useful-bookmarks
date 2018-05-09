import React, { Fragment } from 'react'
import { render } from 'react-dom'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import './index.css'
import { unregister } from './registerServiceWorker'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'
import { GC_USER_ID, GC_AUTH_TOKEN } from './utils/constants'

import Home from './components/Home'
import CreatePost from './components/CreatePost'
import Login from './components/Login'

window.onunload = function() {
  localStorage.removeItem(GC_USER_ID)
  localStorage.removeItem(GC_AUTH_TOKEN)
  return
}

const ForkRibbon = () => (
  <GitHubForkRibbon
    position="right-bottom"
    color="black"
    href="//github.com/marsinearth/usefulbookmarks"
    target="_blank"
    rel="noopener noreferrer"
  >
    <b>Go To Source Code</b>
  </GitHubForkRibbon>
)

const App = () => (
  <Fragment>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={CreatePost} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
    <ForkRibbon />
  </Fragment>
)

render(
  <App />,
  document.getElementById('root')
)

unregister()
