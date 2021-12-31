import {Component} from 'react'

import {RiMenuAddLine} from 'react-icons/ri'
import SideBar from '../SideBar'
import Header from '../Header'
import SaveCard from '../saveCard'
import {
  NoVideosCon,
  NoVideosHead,
  NoVideosImage,
  NoVideosPara,
} from './styledComponents'

import {
  TrendingMainContainer,
  TrendingIcon,
  TrendingHomeContainer,
  TrendHome,
  TrendName,
  TrendingVideos,
} from '../Trending/styledComponents'
import './index.css'
import WatchContext from '../WatchContext/WatchContext'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class SavedVideos extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark, SavedVideosList} = value
          const dark = isDark ? 'dark' : 'light'
          const trendingicon = isDark ? '#313131' : ''

          const Trenddark = isDark ? 'trend-dark trendicon' : 'trendicon'

          return (
            <TrendingMainContainer className={dark} data-testid="savedVideos">
              <Header />
              <TrendingHomeContainer>
                <SideBar />
                {SavedVideosList.length > 0 ? (
                  <TrendHome>
                    <TrendingIcon bgcolor={trendingicon}>
                      <RiMenuAddLine className={Trenddark} />
                      <TrendName>Saved videos</TrendName>
                    </TrendingIcon>
                    <TrendingVideos>
                      {SavedVideosList.map(eachItem => (
                        <SaveCard details={eachItem} />
                      ))}
                    </TrendingVideos>
                  </TrendHome>
                ) : (
                  <NoVideosCon>
                    <NoVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoVideosHead>No saved videos found</NoVideosHead>
                    <NoVideosPara>
                      You can save your videos while watching them
                    </NoVideosPara>
                  </NoVideosCon>
                )}
              </TrendingHomeContainer>
            </TrendingMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default SavedVideos
