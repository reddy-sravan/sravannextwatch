import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'
import {
  CardContainer,
  ThumbnailImage,
  CardDetailsCon,
  Profile,
  CardTitle,
  Description,
  Views,
  CardName,
  Published,
} from './styledComponents'
import './index.css'
import WatchContext from '../WatchContext/WatchContext'

const HomeCard = props => {
  const {details} = props
  const {channel, thumbnailUrl, id, publishedAt, title, viewCount} = details
  const {name} = channel
  const ProfileImageUrl = channel.profile_image_url
  const date = formatDistanceToNow(new Date(publishedAt))
  console.log(id)
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? '#ffffff' : ''
        return (
          <Link to={`/videos/${id}`} className="link">
            <CardContainer color={color}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <CardDetailsCon>
                <Profile src={ProfileImageUrl} alt="channel logo" />
                <Description>
                  <CardTitle>{title}</CardTitle>
                  <CardName>{`${name}`}</CardName>
                  <div className="published">
                    <Views>{`${viewCount} Views`}</Views>
                    <BsDot className="dot" />
                    <Published>{`${date}`}</Published>
                  </div>
                </Description>
              </CardDetailsCon>
            </CardContainer>
          </Link>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default HomeCard
