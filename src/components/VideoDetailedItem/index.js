import {Component, React} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Header from '../Header'
import WatchContext from '../WatchContext/WatchContext'
import './index.css'
import {
  MainDiv,
  VideoDetails,
  YoutubeVideoCon,
  Title,
  ViewsCon,
  Published,
  EmotionCon,
  BottomCon,
  LikeCon,
  LikePara,
  DisLikeCon,
  DisLikePara,
  SaveCon,
  SavedPara,
  Views,
  Profile,
  NameCon,
  Name,
  MainBottom,
  Description,
  Subscribers,
  FailureCon,
  FailureImage,
  FailureHead,
  Loadercon,
  FailurePara,
  FailureButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoDetailedItem extends Component {
  state = {
    item: [],
    channel: [],
    status: apiConstants.initial,
  }

  componentDidMount = () => {
    this.getQuery()
  }

  getQuery = async () => {
    this.setState({status: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}/`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const details = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }
      const channel = {
        name: data.video_details.channel.name,
        ProfileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({item: details, channel, status: apiConstants.success})
    } else {
      this.setState({status: apiConstants.failure})
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
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const dark = isDark ? 'dark' : 'light'
        return (
          <Loadercon data-testid="loader">
            <Loader type="ThreeDots" height={50} width={50} color="#475569" />
          </Loadercon>
        )
      }}
    </WatchContext.Consumer>
  )

  SuccessView = () => {
    const {item, channel} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {
            id,
            thumbnailUrl,

            viewCount,
            publishedAt,
            description,
            videoUrl,
            title,
          } = item
          const {name, ProfileImageUrl, subscriberCount} = channel
          const {
            isDark,
            SaveVideo,
            SavedVideosList,
            likedVideos,
            Disliked,
            ClickedLike,
            Clickeddislike,
          } = value
          const isLiked = likedVideos.includes(id) ? 'liked' : 'normal'
          const isDislike = Disliked.includes(id) ? 'liked' : 'normal'
          const isSaved = SavedVideosList.some(eachItem => eachItem.id === id)
            ? 'liked'
            : 'normal'

          const formatdate = formatDistanceToNow(new Date(publishedAt))
          const plusMenuCliked = () => {
            const obj = {
              title,
              thumbnailUrl,
              ProfileImageUrl,
              name,
              viewCount,
              formatDate: formatdate,
              id,
            }
            SaveVideo(obj)
          }
          const Liked = () => {
            ClickedLike(id)
          }
          const dislike = () => {
            Clickeddislike(id)
          }

          return (
            <YoutubeVideoCon>
              <ReactPlayer url={videoUrl} controls width="100%" />
              <Title>{title}</Title>
              <ViewsCon>
                <Views>{`${viewCount} views`}</Views>
                <BsDot className="dot" />
                <Published>{formatdate}</Published>
              </ViewsCon>
              <EmotionCon>
                <LikeCon onClick={Liked} className={isLiked}>
                  <AiOutlineLike />
                  <LikePara>Like</LikePara>
                </LikeCon>
                <DisLikeCon onClick={dislike} className={isDislike}>
                  <AiOutlineDislike />
                  <DisLikePara>Dislike</DisLikePara>
                </DisLikeCon>
                <SaveCon
                  type="button"
                  onClick={plusMenuCliked}
                  className={isSaved}
                >
                  <RiMenuAddLine />
                  <SavedPara>Saved</SavedPara>
                </SaveCon>
              </EmotionCon>
              <hr />
              <MainBottom>
                <Profile src={ProfileImageUrl} alt="channel logo" />
                <BottomCon>
                  <NameCon>
                    <Name>{name}</Name>
                    <Subscribers>{`${subscriberCount} subscribers`}</Subscribers>
                  </NameCon>
                  <Description>{description}</Description>
                </BottomCon>
              </MainBottom>
            </YoutubeVideoCon>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  rerender = () => {
    const {status} = this.state

    switch (status) {
      case apiConstants.failure:
        return this.FailureView()

      case apiConstants.loading:
        return this.LoaderView()
      default:
        return null
    }
  }

  render() {
    const {item} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const dark = isDark ? 'dark' : 'light'
          if (item.length !== 0) {
            return (
              <MainDiv data-testid="videoItemDetails" className={dark}>
                <Header />
                <VideoDetails>
                  <SideBar />
                  {this.SuccessView()}
                </VideoDetails>
              </MainDiv>
            )
          }
          return (
            <MainDiv data-testid="videoItemDetails" className={dark}>
              <Header />
              <VideoDetails>
                <SideBar />
                {this.rerender()}
              </VideoDetails>
            </MainDiv>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoDetailedItem
