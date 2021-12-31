import {Link} from 'react-router-dom'
import {
  GamingMainContainer,
  GameImage,
  GameName,
  GamePara,
} from './styledComponents'
import './index.css'
import WatchContext from '../WatchContext/WatchContext'

const Gaming = props => {
  const {details} = props
  const {ThumbnailUrl, id, title, viewsCount} = details

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const dark = isDark ? 'dark' : 'light'
        return (
          <Link to={`/videos/${id}`} className={`link ${dark} `}>
            <GamingMainContainer>
              <GameImage src={ThumbnailUrl} alt="video thumbnail" />
              <GameName>{title}</GameName>
              <GamePara>{`${viewsCount} Watching Worldwide`}</GamePara>
            </GamingMainContainer>
          </Link>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default Gaming
