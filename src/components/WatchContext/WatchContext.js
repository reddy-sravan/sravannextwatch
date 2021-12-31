import React from 'react'

const WatchContext = React.createContext({
  isDark: true,
  changeTheme: () => {},
  SavedVideosList: [],
  SaveVideo: () => {},
  likedVideos: [],
  ClickedLike: () => {},
  Disliked: [],
  Clickeddislike: () => {},
})

export default WatchContext
