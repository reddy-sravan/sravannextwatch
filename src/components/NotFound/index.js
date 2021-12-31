import {
  NotFoundCon,
  NotFound,
  NotFoundHead,
  NotFoundImg,
  NotFoundPara,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'
import WatchContext from '../WatchContext/WatchContext'

const notFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      const dark = isDark ? 'dark' : 'light'
      const url = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundCon className={dark}>
            <SideBar />
            <NotFound>
              <NotFoundImg src={url} alt="not found" />
              <NotFoundHead>Page Not Found</NotFoundHead>
              <NotFoundPara>
                we are sorry, the page you requested could not be found
              </NotFoundPara>
            </NotFound>
          </NotFoundCon>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default notFound
