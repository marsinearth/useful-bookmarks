import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { unregister } from './registerServiceWorker'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import { GC_USER_ID, GC_AUTH_TOKEN } from './constants'

import Home from './components/Home'
import CreatePost from './components/CreatePost'
import Login from './components/Login'

window.onbeforeunload = function() {
  localStorage.removeItem(GC_USER_ID)
  localStorage.removeItem(GC_AUTH_TOKEN)
  return
}

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/create' component={CreatePost} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

unregister()
