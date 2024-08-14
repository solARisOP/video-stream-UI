import React from 'react'
import { Channel, Header, Home, Login, Lowerbar, OtpVerification, Playlist, Register, Search, Video } from './components/General'
import { Videos, Playlists, ProfileEdit, PlaylistEdit, VideoEdit, TweetEdit, TweetUpload } from './components/User'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <Header/>
      <Outlet />
      <Lowerbar/>
    </>
  )
}

export default App