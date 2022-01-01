import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import {
  HomeMainContainer,
  HomeContainer,
  Banner,
  BannerLogo,
  FailureCon,
  FailurePara,
  FailureHead,
  FailureImage,
  GetNow,
  BannerPara,
  Loadercon,
  VideosUnorder,
  HomeCon,
  CrossCon,
  Input,
  FailureButton,
  InputCon,
} from './styledComponents'
import SideBar from '../SideBar'
import HomeCard from '../HomeCard'
import WatchContext from '../WatchContext/WatchContext'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    search: '',
    List: [],
    apiState: apiConstants.initial,
    bannerStatus: true,
  }

  componentDidMount = () => {
    this.getQuery()
  }

  enteringInput = event => {
    this.setState({search: event.target.value})
  }

  getQuery = async () => {
    this.setState({apiState: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const VideosList = data.videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({List: VideosList, apiState: apiConstants.success})
    } else {
      this.setState({apiState: apiConstants.failure})
    }
  }

  getVideos = () => {
    this.getQuery()
  }

  LoaderView = () => (
    <Loadercon data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} color="#475569" />
    </Loadercon>
  )

  closeBanner = () => {
    this.setState(prevState => ({bannerStatus: !prevState.bannerStatus}))
  }

  FailureView = () => (
    <FailureCon color="#000000">
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

  NoSearchResult = () => (
    <FailureCon>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHead>No Search results found</FailureHead>
      <FailurePara>
        Try different key words or remove search filter.
      </FailurePara>
      <FailureButton onClick={this.getQuery}>Retry</FailureButton>
    </FailureCon>
  )

  SuccessView = () => {
    const {List, search} = this.state
    if (List.length === 0) {
      return <>{this.NoSearchResult()}</>
    }
    return (
      <HomeContainer>
        <VideosUnorder>
          {List.map(eachItem => (
            <HomeCard details={eachItem} />
          ))}
        </VideosUnorder>
      </HomeContainer>
    )
  }

  RenderView = () => {
    const {apiState} = this.state
    console.log(apiState)
    switch (apiState) {
      case apiConstants.loading:
        return this.LoaderView()
      case apiConstants.success:
        return this.SuccessView()
      case apiConstants.failure:
        return this.FailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {List, search, bannerStatus} = this.state
          const {isDark} = value
          const dark = isDark ? 'dark' : 'light'

          return (
            <HomeCon data-testid="home" className={dark}>
              <Header />
              <HomeMainContainer>
                <SideBar />
                <div>
                  {bannerStatus && (
                    <Banner data-testid="banner">
                      <CrossCon data-testid="close" onClick={this.closeBanner}>
                        <AiOutlineClose className="cross" />
                      </CrossCon>

                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />

                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerPara>
                      <GetNow>GET IT NOW</GetNow>
                    </Banner>
                  )}
                  <InputCon>
                    <Input
                      type="search"
                      value={search}
                      onChange={this.enteringInput}
                    />
                    <button data-testid="searchButton" className="button">
                      <AiOutlineSearch
                        className="search"
                        onClick={this.getVideos}
                      />
                    </button>
                  </InputCon>
                  {this.RenderView()}
                </div>
              </HomeMainContainer>
            </HomeCon>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
