import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import Cookies from 'js-cookie'
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
} from '../TrendingCard/styledComponents'

class Savecard extends Component {
  render() {
    const {details} = this.props

    if (details.length === undefined) {
      const {
        title,
        name,
        viewCount,
        thumbnailUrl,
        ProfileImageUrl,
        formatDate,
        id,
      } = details
      console.log(name)
      return (
        <WatchContext.Consumer>
          {value => {
            const {isDark, SavedVideosList} = value
            const dark = isDark ? 'dark' : 'light'

            return (
              <Link to={`/videos/${id}`} className={`link ${dark}`}>
                <TrendingCardCon>
                  <CardImageCon>
                    <CardImage src={thumbnailUrl} alt="video thumbnail" />
                  </CardImageCon>
                  <Description>
                    <Details>
                      <CardName>{title}</CardName>
                      <Name>{name}</Name>

                      <BottomCon>
                        <Views>{`${viewCount}views`}</Views>
                        <BsDot className="dot" />
                        <PublishedAt>{formatDate}</PublishedAt>
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

    return <>hi</>
  }
}

export default Savecard
