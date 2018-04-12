import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'
import SignupUserMutation from '../mutations/SignupUserMutation'

class Login extends PureComponent {
  state = {
    login: true,
    email: '',
    password: '',
    name: ''
  }
  render() {
    const { login, name, email, password } = this.state
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }}>
          <h2 className='w-100 pa1'>
            {login ? 'Sign In' : 'Sign Up'}
          </h2>
          {!login &&
            <input
              className='w-100 pa3 mv2'
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type='text'
              placeholder='your name'
            />
          }
          <input
            className='w-100 pa3 mv2'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type='text'
            placeholder='email'
          />
          <input
            className='w-100 pa3 mv2'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type='password'
            placeholder='safe password'
          />
          <div className='w-100 mv3'>
            <button
              className='w-50 pa3 bg-black-10 bn dim ttu pointer outline-0'
              onClick={() => this._confirm()}
            >
              {login ? 'Sign In' : 'Sign Up'}
            </button>
            <button
              className='w-50 pa3 bg-black-20 bn dim ttu pointer outline-0'
              onClick={() => this.setState({ login: !login })}
            >
              {login ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
          <div
            className='link underline-hover dim'
            style={{ textAlign: "center", color: "red" }}
          >
            <Link to="/" >
              Cancel
            </Link>
         </div>
        </div>
      </div>
    );
  }

  _confirm = () => {
    const { login, name, email, password } = this.state,
    { history } = this.props
    if(login) {
      AuthenticateUserMutation(email, password, (id, token) => {
        this._saveUserData(id, token)
        history.push('/')
      })
    } else {
      SignupUserMutation(name, email, password, (id, token) => {
        this._saveUserData(id, token)
        history.push('/')
      })
    }
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }
}

export default withRouter(Login)
