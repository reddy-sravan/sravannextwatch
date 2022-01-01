import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import SideBar from '../SideBar'
import Header from '../Header'
import GamingCard from '../GamingCard'
import WatchContext from '../WatchContext/WatchContext'

import {
  TrendingMainContainer,
  TrendingIcon,
  TrendingHomeContainer,
  TrendHome,
  TrendName,
  FailureCon,
  FailureImage,
  FailureHead,
  FailurePara,
  FailureButton,
  Loadercon,
  TrendingVideos,
} from '../Trending/styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    List: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount = () => {
    this.getQuery()
  }

  getQuery = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const List = data.videos.map(eachItem => ({
        id: eachItem.id,

        ThumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewsCount: eachItem.view_count,
      }))
      this.setState({List, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  FailureView = dark => (
    <FailureCon color={dark}>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request.
        <br />
        Please try Again.
      </FailurePara>
      <FailureButton onClick={this.getQuery}>Retry</FailureButton>
    </FailureCon>
  )

  LoaderView = () => (
    <Loadercon data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} color="#475569" />
    </Loadercon>
  )

  SuccessView = (trendingicon, Trenddark) => {
    const {List} = this.state
    return (
      <TrendHome>
        <TrendingIcon bgcolor={trendingicon}>
          <SiYoutubegaming className={Trenddark} />
          <TrendName>Gaming</TrendName>
        </TrendingIcon>
        <TrendingVideos className="un-order">
          {List.map(eachItem => (
            <GamingCard details={eachItem}  />
          ))}
        </TrendingVideos>
      </TrendHome>
    )
  }

  renderview = (trendingicon, Trenddark) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.failure:
        return this.FailureView()
      case apiConstants.success:
        return this.SuccessView(trendingicon, Trenddark)
      case apiConstants.loading:
        return this.LoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const dark = isDark ? 'dark' : 'light'
          const trendingicon = isDark ? '#313131' : ''

          const Trenddark = isDark ? 'trend-dark trendicon' : 'trendicon'

          return (
            <TrendingMainContainer data-testid="gaming" className={dark}>
              <Header />
              <TrendingHomeContainer>
                <SideBar />
                {this.renderview(trendingicon, Trenddark)}
              </TrendingHomeContainer>
            </TrendingMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming
