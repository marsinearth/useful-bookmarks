import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../utils/constants'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'
import SignupUserMutation from '../mutations/SignupUserMutation'
import Loading from '../assets/images/loading.gif'
import styled, { css } from 'styled-components'
import history from '../utils/history'

class Login extends PureComponent {
  state = {
    login: true,
    email: '',
    password: '',
    name: '',
    loading: false
  }

  _handleChange = e => {
    const target = e.target,
    value = target && target.value,
    label = target && target.dataset && target.dataset.label
    this.setState({ [label]: value })
  }

  _login = e => {
    const target = e.target,
    label = target && target.dataset && target.dataset.label
    this.setState({ login: label })
  }

  _confirm = () => {
    const { login, name, email, password } = this.state
    if(email.trim() !== '' && password.trim() !== '') {
      this.setState({ loading: true }, () => {
        if(login) AuthenticateUserMutation(
          email,
          password,
          (id, token) => this._saveUserData(id, token),
          () => this._failedAuth()
        )
        else {
          if(name.trim() !== '')
            SignupUserMutation(
              name,
              email,
              password,
              (id, token) => this._saveUserData(id, token),
              () => this._failedAuth()
            )
          else {
            alert('name is required')
            this._failedAuth()
          }
        }
      })
    } else {
      if(email.trim() === '') alert('email is required')
      else if(password.trim() === '') alert('password is required')
    }
  }

  _saveUserData = (id, token) => {
    if(id && token) {
      localStorage.setItem(GC_USER_ID, id)
      localStorage.setItem(GC_AUTH_TOKEN, token)
      history.push('/')
    }
  }
  _failedAuth = () => {
    this.setState({ loading: false })
  }

  render() {
    const { login, name, email, password, loading } = this.state
    return (
      <Wrapper>
        {loading
          ? <img
            src={Loading}
            alt="Loading..."
            />
          :
          <InnerWrapper>
            <Title>
              {login ? 'Sign In' : 'Sign Up'}
            </Title>
            {!login &&
              <Input
                value={name}
                data-label='name'
                onChange={this._handleChange}
                type='text'
                placeholder='your name'
              />
            }
            <Input
              value={email}
              data-label='email'
              onChange={this._handleChange}
              type='email'
              placeholder='email'
            />
            <Input
              value={password}
              data-label='password'
              onChange={this._handleChange}
              type='password'
              placeholder='safe password'
            />
            <ButtonConatiner>
              <Button onClick={this._confirm}>
                {login ? 'Sign In' : 'Sign Up'}
              </Button>
              <Button
                right
                data-label={!login}
                onClick={this._login}
              >
                {login ? 'Sign Up' : 'Sign In'}
              </Button>
            </ButtonConatiner>
            <LinkContainer>
              <Link to="/" >
                Cancel
              </Link>
            </LinkContainer>
          </InnerWrapper>
        }
      </Wrapper>
      );
  }
}

export default withRouter(Login)

const Dim = css`
  opacity: 1;
  transition: opacity .15s ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`,
Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;
`,
InnerWrapper = styled.div`
  max-width: 400px;
`,
Title = styled.h2`
  width: 100%;
  padding: .25rem;
`,
Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
`,
LinkContainer = styled.div`
  text-align: center;
  color: red;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  ${Dim}
`,
ButtonConatiner = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`,
Button = styled.button`
  width: 50%;
  outline: 0;
  padding: 1rem;
  text-transform: uppercase;
  background-color: ${props => props.right
    ? 'rgba( 0, 0, 0, .2 )'
    : 'rgba( 0, 0, 0, .1 )'
  };
  border: none;
  ${Dim}
`
