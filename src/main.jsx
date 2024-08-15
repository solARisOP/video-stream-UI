import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {WatchHistory, Subscriptions, OtpVerification, Register, Login, Playlist, Channel, Home, You, Video, SavedPlaylists, Search} from './components/General'
import homeLoader from './components/General/Home.loader.js'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>} loader={homeLoader}/>
            <Route path=':channelUserId' pathOptions={{ channelUserId: /@[a-z0-9]+/ }} element={<Channel/>}>
                {/* <Route element={<ChannelHome />} /> */}
                {/* <Route path='playlist' element={<ChannelPlaylists />} />
                <Route path='videos' element={<ChannelVideos />} />
                <Route path='tweets' element={<ChannelTweets />} /> */}
            </Route>
            <Route path='you' element={<You/>} />
            <Route path='saved-playlists' element={<SavedPlaylists/>} />
            <Route path='subscriptions' element={<Subscriptions/>} />
            <Route path='watch-history' element={<WatchHistory/>} />
            <Route path='playlist' element={<Playlist/>} />
            {/* <Route path='settings' element={<Playlist/>} /> */}
            {/* <Route path='privacy-policy' element={<Playlist/>} /> */}
            <Route path='search' element={<Search/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='otp' element={<OtpVerification/>}/>
            <Route path='video' element={<Video/>} />
            <Route path='user' element={<Channel/>}>
                <Route path='' element={<Navigate to='/home' replace />} />
                <Route path='profile' element={<Playlist/>} />
                <Route path='videos' element={<Playlist/>} />
                <Route path='tweets' element={<Playlist/>} />
                <Route path='playlists' element={<Playlist/>} />
                <Route path='subscribers' element={<Playlist/>} />
                <Route path='edit-video' element={<Playlist/>} />
                <Route path='edit-tweet' element={<Playlist/>} />
                <Route path='edit-playlist' element={<Playlist/>} />
            </Route>
        </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
