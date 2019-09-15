import React, { ChangeEvent, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'
import SignUpUserMutation from '../mutations/SignUpUserMutation'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../utils/constants'
import Loading from '../assets/images/loading.gif'
import history from '../utils/history'
import RSwal from '../utils/reactSwal';
import { validateEmail } from '../utils/validations'
import { Dim } from './Post'

type State = {
  [name: string]: string | boolean
  isLogInPage: boolean,
  email: string,
  password: string,
  name: string,
  loading: boolean
}

type TButton = {
  bgColor: string
}

export default class Login extends PureComponent<any, State> {
  state = {
    isLogInPage: true,
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
    this.setState(({ isLogInPage: prevIsLogInPage }) => ({ isLogInPage: !prevIsLogInPage }))
  }

  _confirm = () => {
    const { isLogInPage, name, email, password } = this.state
    if (email.trim() !== '' && password.trim() !== '') {
      if (validateEmail(email)) {
        this.setState({ loading: true }, () => {
          if (isLogInPage) {
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
              RSwal('error', 'name is required')
              this._failedAuth()
            }
          }
        })
      } else {
        RSwal('error', 'email form is not valid!')
      }
    } else {
      if (email.trim() === '') RSwal('error', 'email is required')
      else if (password.trim() === '') RSwal('error', 'password is required')
    }
  }

  _saveUserData = (id: string, token: string) => {
    if (id && token) {
      sessionStorage.setItem(GC_USER_ID, id)
      sessionStorage.setItem(GC_AUTH_TOKEN, token)
      history.push('/')
    }
  }

  _failedAuth = () => {
    this.setState({ loading: false })
  }

  render() {
    const { isLogInPage, name, email, password, loading } = this.state
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
              {`Sign ${isLogInPage ? 'In' : 'Up'}`}
            </Title>
            <form>
              {!isLogInPage &&
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
              <Button
                bgColor={isLogInPage ? 'rgba(0,0,255,.1)' : 'rgba(0,0,0,.2)'}
                onClick={this._confirm}
              >
                {`Sign ${isLogInPage ? 'In' : 'Up'}`}
              </Button>
              <Button
                bgColor={isLogInPage ? 'rgba(0,0,0,.2)' : 'rgba(0,0,255,.1)'}
                onClick={this._onToggleLogin}
              >
                {`Sign ${isLogInPage ? 'Up' : 'In'}`}
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
const Button = styled.button<TButton>`
  width: 50%;
  outline: 0;
  padding: 1rem;
  text-transform: uppercase;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  ${Dim}
`
