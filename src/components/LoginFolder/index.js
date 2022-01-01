import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import WatchContext from '../WatchContext/WatchContext'
import {
  LoginContainer,
  LoginMainContainer,
  NxtWatchLogo,
  LoginInputsCon,
  UserNameCon,
  UserNameLabel,
  UserNameInput,
  PasswordCon,
  PasswordLabel,
  PasswordInput,
  ErrorPara,
  LoginButton,
  ShowPasswordCon,
  Checkbox,
  CheckboxLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isLogged: true,
    showPassword: false,
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  successfullyLoggedIn = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  LoginClicked = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successfullyLoggedIn(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, isLogged: false})
    }
  }

  showPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {
            username,
            password,
            errorMsg,
            isLogged,
            showPassword,
          } = this.state
          const type = showPassword ? 'text' : 'password'
          const {isDark} = value
          const mainbackground = isDark ? '#424242' : ''
          const logInBackground = isDark ? '#000000' : ''
          const fontColor = isDark ? '#ffffff' : ''
          const url = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginMainContainer
              background={mainbackground}
              onSubmit={this.LoginClicked}
            >
              <LoginContainer background={logInBackground}>
                <NxtWatchLogo src={url} alt="website logo" />
                <LoginInputsCon>
                  <UserNameCon>
                    <UserNameLabel htmlFor="username" color={fontColor}>
                      USERNAME
                    </UserNameLabel>
                    <UserNameInput
                      color={fontColor}
                      id="username"
                      type="text"
                      value={username}
                      onChange={this.changeUserName}
                      placeholder="Username"
                    />
                  </UserNameCon>
                  <PasswordCon>
                    <PasswordLabel htmlFor="password" color={fontColor}>
                      PASSWORD
                    </PasswordLabel>

                    <PasswordInput
                      color={fontColor}
                      type={type}
                      id="password"
                      value={password}
                      onChange={this.changePassword}
                      placeholder="Password"
                    />
                  </PasswordCon>
                </LoginInputsCon>

                <LoginButton type="submit">Login</LoginButton>
                <ShowPasswordCon>
                  <Checkbox
                    id="checkbox"
                    type="checkbox"
                    onClick={this.showPassword}
                  />
                  <CheckboxLabel htmlFor="checkbox" color={fontColor}>
                    Show Password
                  </CheckboxLabel>
                </ShowPasswordCon>
                {isLogged ? '' : <ErrorPara>{`*${errorMsg}`}</ErrorPara>}
              </LoginContainer>
            </LoginMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login
