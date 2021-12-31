import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import WatchContext from '../WatchContext/WatchContext'
import {MainContainer, SideBarUnorder, List, MenuItem} from './styledComponents'
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

class MenuBar extends Component {
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
          const style = isDark ? '#606060' : ''

          const switchcase = id => {
            switch (id) {
              case 'home':
                return <AiFillHome className="icon style" />
              case 'trending':
                return <HiFire className="icon style" />
              case 'gaming':
                return <SiYoutubegaming className="icon style" />
              case 'saved-videos':
                return <RiMenuAddLine className="icon" />
              default:
                return ''
            }
          }

          return (
            <MainContainer bgColor={style}>
              {MenuList.map(eachItem => {
                let menuStyle = ''
                const Icon = 'AiFillHome'
                if (menuItem === eachItem.id) {
                  menuStyle = 'menu-style'
                }
                const changeMenu = () => {
                  this.changingMenu(eachItem.id)
                }

                return (
                  <SideBarUnorder>
                    <Link
                      to={`${eachItem.route}`}
                      className="Link"
                      key={eachItem.id}
                      onClick={changeMenu}
                    >
                      <List className={`${menuStyle} Ham`} color="red">
                        {switchcase(eachItem.id)}
                        <MenuItem>{eachItem.Name}</MenuItem>
                      </List>
                    </Link>
                  </SideBarUnorder>
                )
              })}
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(MenuBar)
