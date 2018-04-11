import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
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
                <h4 className='w-100 pa1'>
                    {login ? 'Sign In' : 'Sign Up'}
                </h4>
                <div style={{ maxWidth: 400 }}>
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
                </div>
                <div>
                    <button
                        className='pa3 bg-black-10 bn dim ttu pointer'
                        onClick={() => this._confirm()}
                    >
                        {login ? 'Sign In' : 'Sign Up'}
                    </button>
                    <button
                        className='pa3 bg-black-10 bn dim ttu pointer'
                        onClick={() => this.setState({ login: !login })}
                    >
                        {login ? 'Sign Up' : 'Already registered your email?'}
                    </button>
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
