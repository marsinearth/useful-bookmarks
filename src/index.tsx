import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// Your top level component
// import App from './App'
import './index.css'
// import { Router, Route, Switch } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from './utils/constants'

/* import Home from './components/Home'
import CreatePost from './components/CreatePost'
import Login from './components/Login' */
// Export your top level component as JSX (for static rendering)

/* const App = () => (
  <Fragment>
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/create" component={CreatePost} />
        <Route exact={true} path="/login" component={Login} />
      </Switch>
    </Router>
    <ForkRibbon />
  </Fragment>
) */


// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = (Comp: any) => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
