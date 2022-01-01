import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import WatchContext from '../WatchContext/WatchContext'
import {
  MainContainer,
  SideBarUnorder,
  List,
  MenuItem,
  SideBottomCon,
  BottomHead,
  BottomIconCon,
  BottomPara,
  Facebook,
  Twitter,
  Linked,
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
    id: 'saved-videos',
    Name: 'Saved Videos',

    route: '/saved-videos',
  },
]

class SideBar extends Component {
  state = {
    menuItem: 'home',
  }

  componentDidMount = () => {
    const {match} = this.props
    const {path} = match
    const id = path.slice(1)
    if (!(id === '')) {
      this.setState({menuItem: id})
    }
  }

  changingMenu = id => {
    this.setState({menuItem: id})
  }

  render() {
    const {menuItem} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const Background = isDark ? '#212121' : '#f9f9f9'

          const switchcase = id => {
            switch (id) {
              case 'home':
                return <AiFillHome className="icon " />
              case 'trending':
                return <HiFire className="icon " />
              case 'gaming':
                return <SiYoutubegaming className="icon " />
              case 'saved-videos':
                return <RiMenuAddLine className="icon" />
              default:
                return ''
            }
          }

          return (
            <MainContainer bgcolor={Background}>
              <SideBarUnorder>
                {MenuList.map(eachItem => {
                  let menuStyle = ''
                  const Icon = 'AiFillHome'
                  let cardBackground

                  if (menuItem === eachItem.id) {
                    menuStyle = isDark ? 'menu-style' : 'menu-stylee'
                    cardBackground = isDark ? ' #383838' : ''
                  }
                  const changeMenu = () => {
                    this.changingMenu(eachItem.id)
                  }

                  return (
                    <Link
                      to={`${eachItem.route}`}
                      className="Link"
                      key={eachItem.id}
                      onClick={changeMenu}
                    >
                      <List className={menuStyle} color="red">
                        {switchcase(eachItem.id)}
                        <MenuItem>{eachItem.Name}</MenuItem>
                      </List>
                    </Link>
                  )
                })}
              </SideBarUnorder>

              <SideBottomCon>
                <BottomHead>CONTACT US</BottomHead>
                <BottomIconCon>
                  <Facebook
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Twitter
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Linked
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </BottomIconCon>
                <BottomPara>
                  Enjoy! now to see your
                  <br /> channels and
                  <br /> recommendations!
                </BottomPara>
              </SideBottomCon>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
