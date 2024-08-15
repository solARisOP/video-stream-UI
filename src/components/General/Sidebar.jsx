import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSubscriptions, MdOutlineHistory, MdOutlinePlaylistPlay, MdOutlineWatchLater, MdOutlinePolicy } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";

function Sidebar() {
    const [searchParams] = useSearchParams()
    const list = searchParams.get('list');
    
  return (
        <div className='flex-1 hidden sm:flex flex-col p-3 text-center scrollbar-thin'>
            <NavLink to={'/'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <AiFillHome size={25} />
                <p className='text-md'>Home</p>
            </NavLink>

            <NavLink to={'/subscriptions'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineSubscriptions size={25} />
                <p className='text-md'>Subscriptions</p>
            </NavLink>
            
            <hr className='my-3'/>

            <NavLink to={'/you'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-2 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <p className='text-md'>You</p>
                <IoIosArrowForward />
            </NavLink>

            <NavLink to={'/@nitishraosnr'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <LuUserSquare2 size={25} />
                <p className='text-md'>Channel</p>
            </NavLink>

            <NavLink to={'/watch-history'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineHistory size={25}/>
                <p className='text-md'>History</p>
            </NavLink>

            <NavLink to={'/playlist?list=LV'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive && list=='LV' ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <AiOutlineLike size={25}/>
                <p className='text-md'>Liked Videos</p>
            </NavLink>
            
            <NavLink to={'/saved-playlists'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlinePlaylistPlay size={25}/>
                <p className='text-md'>Playlists</p>
            </NavLink>

            <NavLink to={'/playlist?list=WL'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive && list=='WL' ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineWatchLater size={25}/>
                <p className='text-md'>Watch Later</p>
            </NavLink>

            <hr className='my-3'/>

            <div className='flex flex-1 w-full justify-end'>
                <div className='flex flex-col w-full justify-end'>
                    <hr className='my-3'/>
                    <NavLink to={'/settings'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                        <IoSettingsOutline size={25}/>
                        <p className='text-md'>Settings</p>
                    </NavLink>

                    <NavLink to={'/privacy-policy'} className={({isActive})=>`flex justify-start items-center px-1 py-2 gap-8 rounded-xl ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                        <MdOutlinePolicy size={25}/>
                        <p className='text-md'>Privacy Policy</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar