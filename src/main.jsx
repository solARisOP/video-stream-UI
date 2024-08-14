import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/General/Home.jsx'
import Channel from './components/General/Channel.jsx'
import Playlist from './components/General/Playlist.jsx'
import Login from './components/General/Login.jsx'
import Register from './components/General/Register.jsx'
import OtpVerification from './components/General/OtpVerification.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>} />
            <Route path='channel/:id' element={<Channel/>}>
                <Route path='' element={<Navigate to='/home' replace />} />
                <Route path='home' element={<ChannelHome />} />
                <Route path='playlist' element={<ChannelPlaylists />} />
                <Route path='videos' element={<ChannelVideos />} />
                <Route path='tweets' element={<ChannelTweets />} />
            </Route>
            <Route path='saved-playlists' element={<Playlist/>} />
            <Route path='liked-videos' element={<Playlist/>} />
            <Route path='watch-later' element={<Playlist/>} />
            <Route path='search' element={<Playlist/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='otp' element={<OtpVerification/>}/>
            <Route path='video' element={<Playlist/>} />
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
