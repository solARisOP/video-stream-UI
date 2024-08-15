import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSubscriptions, MdOutlineHistory, MdOutlinePlaylistPlay, MdOutlineWatchLater, MdOutlinePolicy } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";

function MiniSidebar() {
    return (
        <div className='flex-1 hidden sm:flex flex-col p-3 text-center gap-1 scrollbar-thin'>
            <NavLink to={'/'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <AiFillHome size={25} />
            </NavLink>

            <NavLink to={'/subscriptions'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineSubscriptions size={25} />
            </NavLink>
            
            <hr className='my-3'/>

            <NavLink to={'/you'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-2 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <IoIosArrowForward size={20} />
            </NavLink>

            <NavLink to={'/channel'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <LuUserSquare2 size={25} />
            </NavLink>

            <NavLink to={'/watch-history'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineHistory size={25}/>
            </NavLink>

            <NavLink to={'/liked-videos'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <AiOutlineLike size={25}/>
            </NavLink>
            
            <NavLink to={'/saved-playlists'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlinePlaylistPlay size={25}/>
            </NavLink>

            <NavLink to={'/watch-later'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineWatchLater size={25}/>
            </NavLink>

            <hr className='my-3'/>

            <div className='flex flex-1 w-full justify-end'>
                <div className='flex flex-col w-full justify-end gap-1'>
                    <hr className='my-3'/>
                    <NavLink to={'/settings'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                        <IoSettingsOutline size={25}/>
                    </NavLink>

                    <NavLink to={'/privacy-policy'} className={({isActive})=>`flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                        <MdOutlinePolicy size={25}/>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default MiniSidebar