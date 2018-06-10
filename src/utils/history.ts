import { History, createBrowserHistory } from 'history'
let history: History | undefined
if (typeof document !== 'undefined') {
  history = createBrowserHistory()
}
export default history
