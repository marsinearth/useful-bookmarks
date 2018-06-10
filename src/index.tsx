import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0;
    padding: 0;
  }
`

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
