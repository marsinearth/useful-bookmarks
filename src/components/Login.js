import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'
import SignupUserMutation from '../mutations/SignupUserMutation'
import Loading from '../assets/images/loading.gif'
import styled, { css } from 'styled-components'

class Login extends PureComponent {
  state = {
    login: true,
    email: '',
    password: '',
    name: '',
    loading: false
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
                onChange={e => this.setState({ name: e.target.value })}
                type='text'
                placeholder='your name'
              />
            }
            <Input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type='text'
              placeholder='email'
            />
            <Input
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type='password'
              placeholder='safe password'
            />
            <ButtonConatiner>
              <Button onClick={() => this._confirm()}>
                {login ? 'Sign In' : 'Sign Up'}
              </Button>
              <Button right onClick={() => this.setState({ login: !login })}>
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

  _confirm = () => {
    const { login, name, email, password } = this.state,
    { history } = this.props
    this.setState({ loading: true }, () => {
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
    })
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
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
  width: 100%;
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
