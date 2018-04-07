import React from 'react'
import { render } from 'react-dom'
import './index.css'
import 'tachyons'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import Home from './components/Home'
import CreatePage from './components/CreatePage'

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/create' component={CreatePage} />
    </Switch>
  </Router>,
  document.getElementById('root'))
registerServiceWorker()
