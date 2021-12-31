import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/LoginFolder'
import Home from './components/HomeFolder'
import ProtectedRoute from './components/ProtectedRoute'
import WatchContext from './components/WatchContext/WatchContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetailedItem from './components/VideoDetailedItem'
import SavedVideos from './components/savedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDark: false,
    SavedVideosList: [],
    likedVideos: [],
    Disliked: [],
  }

  SavedVideo = obj => {
    const {SavedVideosList} = this.state

    const confirm = SavedVideosList.some(eachItem => eachItem.id === obj.id)

    if (!confirm) {
      this.setState({SavedVideosList: [...SavedVideosList, obj]})
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  ClickedLike = id => {
    const {Disliked, likedVideos} = this.state
    if (Disliked.includes(id)) {
      const index = Disliked.indexOf(id)
      Disliked.splice(index, 1)
      this.setState({Disliked})
    }
    if (likedVideos.includes(id)) {
      const index = likedVideos.indexOf(id)
      likedVideos.splice(index, 1)
      this.setState({likedVideos})
    } else {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
      }))
    }
  }

  Clickeddislike = id => {
    const {Disliked, likedVideos} = this.state
    if (likedVideos.includes(id)) {
      const index = likedVideos.indexOf(id)
      likedVideos.splice(index, 1)
      this.setState({likedVideos})
    }
    if (Disliked.includes(id)) {
      const index = Disliked.indexOf(id)
      Disliked.splice(index, 1)
      this.setState({Disliked})
    } else {
      this.setState(prevState => ({
        Disliked: [...prevState.Disliked, id],
      }))
    }
  }

  componentDidMount = () => {}

  render() {
    const {SavedVideosList, isDark, likedVideos, Disliked} = this.state

    return (
      <WatchContext.Provider
        value={{
          isDark,
          SavedVideosList,
          likedVideos,
          Disliked,
          changeTheme: this.changeTheme,
          SaveVideo: this.SavedVideo,
          ClickedLike: this.ClickedLike,
          Clickeddislike: this.Clickeddislike,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoDetailedItem}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </WatchContext.Provider>
    )
  }
}

export default App
