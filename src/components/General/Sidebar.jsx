import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Sidebar() {
  return (
        <div className='flex-1 hidden sm:flex flex-col p-3 text-center gap-3 scrollbar-thin'>
            <NavLink to={'/'} className={({isActive})=>`w-full p-2 rounded-lg border ${isActive ? "dark:bg-slate-900 bg-slate-300 dark:border-black border-white" :"border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900"}`}>
                Home
            </NavLink>

            <NavLink to={'/channel'} className={({isActive})=>`w-full p-2 rounded-lg border ${isActive ? "dark:bg-slate-900 bg-slate-300 dark:border-black border-white" :"border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900"}`}>
                Channel
            </NavLink>

            <NavLink to={'/saved-playlists'} className={({isActive})=>`w-full p-2 rounded-lg border ${isActive ? "dark:bg-slate-900 bg-slate-300 dark:border-black border-white" :"border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900"}`}>
                Saved Playlists
            </NavLink>
            
            <NavLink to={'/liked-videos'} className={({isActive})=>`w-full p-2 rounded-lg border ${isActive ? "dark:bg-slate-900 bg-slate-300 dark:border-black border-white" :"border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900"}`}>
                Channel
            </NavLink>

            <div className='flex flex-1 w-full justify-end'>
                <div className='flex flex-col gap-3 w-full justify-end'>
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        End 
                    </div> 
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        Last
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar