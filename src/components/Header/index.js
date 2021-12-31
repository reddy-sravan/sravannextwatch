import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import WatchContext from '../WatchContext/WatchContext'
import MenuBar from '../MenuBar'

import {
  Popupmenu,
  HeaderMainContainer,
  HeaderLogo,
  HeaderHamburgerContainer,
  HeaderCon,
  MenuContainer,
  Button,
  MenuUnorder,
  Profile,
  List,
  HeaderProfileContainer,
  Logout,
  ConfirmCon,
  Menuitem,
  LogoutButton,
  ConfirmPara,
  PopupContainer,
} from './styledComponents'
import './index.css'

const MenuList = [
  {
    Name: 'Home',
    id: 'home',

    route: '/',
  },
  {
    id: 'trending',
    Name: 'Trending',

    route: '/trending',
  },
  {
    id: 'gaming',
    Name: 'Gaming',

    route: '/gaming',
  },
  {
    id: 'saved videos',
    Name: 'Saved Videos',

    route: '/saved-videos',
  },
]

class Header extends Component {
  HamVisible = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}))
  }

  LoggingOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  logoClicked = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {menuItem, isDark, changeTheme} = value
          const theme = isDark ? '#212121' : '#f9f9f9'
          const textcolor = isDark ? '#f9f9f9' : '#212121'
          const buttonColor = isDark ? 'moon' : 'moon-dark'

          const url = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const ChangeMenuitem = () => {
            changeTheme()
          }

          return (
            <HeaderMainContainer bgcolor={theme} color={textcolor}>
              <HeaderCon>
                <Link to="/" className="link">
                  <HeaderLogo
                    src={url}
                    onClick={this.logoClicked}
                    alt="website logo"
                  />
                </Link>
                <HeaderHamburgerContainer>
                  <button data-testid="theme">
                    {isDark ? (
                      <HiOutlineLightBulb
                        className={buttonColor}
                        onClick={ChangeMenuitem}
                      />
                    ) : (
                      <FaMoon
                        className={buttonColor}
                        onClick={ChangeMenuitem}
                      />
                    )}
                  </button>
                  <Popup modal trigger={<GiHamburgerMenu className="menu" />}>
                    {close => (
                      <Popupmenu>
                        <IoMdClose class="align" onClick={() => close()} />
                        <MenuBar />
                      </Popupmenu>
                    )}
                  </Popup>
                  <Popup modal trigger={<FiLogOut className="logout" />}>
                    {close => (
                      <PopupContainer className="popup-content ">
                        <ConfirmCon className="black">
                          <ConfirmPara>
                            Are you sure you want to logout?
                          </ConfirmPara>
                          <Button>
                            <LogoutButton
                              type="button"
                              border="1px solid #7e858e"
                              color="#7e858e"
                              background="transparent"
                              onClick={() => close()}
                            >
                              cancel
                            </LogoutButton>
                            <LogoutButton
                              type="button"
                              border="0px"
                              color="white"
                              background="blue"
                              onClick={this.LoggingOut}
                            >
                              confirm
                            </LogoutButton>
                          </Button>
                        </ConfirmCon>
                      </PopupContainer>
                    )}
                  </Popup>
                </HeaderHamburgerContainer>
                <HeaderProfileContainer>
                  <button>
                    {isDark ? (
                      <HiOutlineLightBulb
                        className={buttonColor}
                        onClick={ChangeMenuitem}
                      />
                    ) : (
                      <FaMoon
                        className={buttonColor}
                        onClick={ChangeMenuitem}
                      />
                    )}
                  </button>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <Popup modal trigger={<Logout>Logout</Logout>}>
                    {close => (
                      <PopupContainer className="popup-content">
                        <ConfirmCon>
                          <ConfirmPara>
                            Are you sure, you want to logout?
                          </ConfirmPara>
                          <Button>
                            <LogoutButton
                              type="button"
                              border="1px solid #7e858e"
                              color="#7e858e"
                              background="transparent"
                              onClick={() => close()}
                            >
                              cancel
                            </LogoutButton>
                            <LogoutButton
                              type="button"
                              border="0px"
                              color="white"
                              background="blue"
                              onClick={this.LoggingOut}
                            >
                              confirm
                            </LogoutButton>
                          </Button>
                        </ConfirmCon>
                      </PopupContainer>
                    )}
                  </Popup>
                </HeaderProfileContainer>
              </HeaderCon>
            </HeaderMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
