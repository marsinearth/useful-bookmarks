import React, { ChangeEvent, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../utils/constants'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'
import SignUpUserMutation from '../mutations/SignUpUserMutation'
import Loading from '../assets/images/loading.gif'
import styled, { css } from 'styled-components'
import history from '../utils/history'

type State = {
  [name: string]: string | boolean
  login: boolean,
  email: string,
  password: string,
  name: string,
  loading: boolean
}

export default class Login extends PureComponent<any, State> {
  state = {
    login: true,
    email: '',
    password: '',
    name: '',
    loading: false
  }

  _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const label: string = target.dataset.label || ''
    const value: string = target && target.value
    if (label) this.setState({ [label]: value })
  }

  _onToggleLogin = () => {
    const { login } = this.state
    this.setState({ login: !login })
  }

  _confirm = () => {
    const { login, name, email, password } = this.state
    if (email.trim() !== '' && password.trim() !== '') {
      this.setState({ loading: true }, () => {
        if (login) {
          AuthenticateUserMutation(
            email,
            password,
            this._saveUserData,
            this._failedAuth
          )
        } else {
          if (name.trim() !== '') {
            SignUpUserMutation(
              email,
              password,
              this._saveUserData,
              this._failedAuth,
              name
            )
          } else {
            alert('name is required')
            this._failedAuth()
          }
        }
      })
    } else {
      if (email.trim() === '') alert('email is required')
      else if (password.trim() === '') alert('password is required')
    }
  }

  _saveUserData = (id: string, token: string) => {
    if (id && token) {
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
            <form>
              {!login &&
                <Input
                  value={name}
                  data-label='name'
                  onChange={this._onChange}
                  type='text'
                  placeholder='your name'
                  autoComplete='name'
                />
              }
              <Input
                value={email}
                data-label='email'
                onChange={this._onChange}
                type='email'
                placeholder='email'
                autoComplete='username'
              />
              <Input
                value={password}
                data-label='password'
                onChange={this._onChange}
                type='password'
                placeholder='safe password'
                autoComplete='current-password'
              />
            </form>
            <ButtonContainer>
              <Button pos='left' onClick={this._confirm}>
                {login ? 'Sign In' : 'Sign Up'}
              </Button>
              <Button pos='right' onClick={this._onToggleLogin}>
                {login ? 'Sign Up' : 'Sign In'}
              </Button>
            </ButtonContainer>
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

const Dim = css`
  opacity: 1;
  transition: opacity .15s ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`
const Wrapper = styled.div`
  padding: 2rem;
  justify-content: center;
  display: flex;
`
const InnerWrapper = styled.div`
  max-width: 400px;
`
const Title = styled.h2`
  width: 100%;
  padding: .25rem;
`
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
`
const LinkContainer = styled.div`
  text-align: center;
  color: red;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  ${Dim}
`
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const Button = styled.button`
  width: 50%;
  outline: 0;
  padding: 1rem;
  text-transform: uppercase;
  background-color: ${(props: { pos: string }) => props.pos === 'right'
    ? 'rgba( 0, 0, 0, .2 )'
    : 'rgba( 0, 0, 0, .1 )'
  };
  border: none;
  ${Dim}
`
