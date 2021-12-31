import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import WatchContext from '../WatchContext/WatchContext'
import {
  TrendingCardCon,
  CardImage,
  Description,
  Icon,
  Details,
  CardName,
  BottomCon,
  Name,
  Views,
  CardImageCon,
  PublishedAt,
} from './styledComponents'
import './index.css'

const TrendingCard = props => {
  const {details} = props
  const {ThumbnailUrl, channel, id, publishedAt, title, viewsCount} = details
  const {name} = channel
  const ProfileUrl = channel.profile_image_url
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const Style = isDark ? '#ffffff' : ''

        return (
          <Link to={`/videos/${id}`} className="link">
            <TrendingCardCon>
              <CardImageCon>
                <CardImage src={ThumbnailUrl} alt="video thumbnail" />
              </CardImageCon>
              <Description>
                <Icon src={ProfileUrl} />
                <Details color={Style}>
                  <CardName>{title}</CardName>
                  <BottomCon>
                    <Name>{name}</Name>
                    <BsDot className="dot" />
                    <Views>{viewsCount}</Views>
                    <BsDot className="dot" />
                    <PublishedAt>{date}</PublishedAt>
                  </BottomCon>
                </Details>
              </Description>
            </TrendingCardCon>
          </Link>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingCard
