import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlinePolicy } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Lowerbar() {
    return (
        <div className='sticky bottom-0 sm:hidden w-full h-12 flex justify-around items-center p-1'>
            <NavLink to={'/'} className={({isActive})=>`w-1/5 flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <AiFillHome size={27}/>
            </NavLink>

            <NavLink to={'/subscriptions'} className={({isActive})=>`flex-1 flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlineSubscriptions size={27}/>
            </NavLink>

            <NavLink to={'/you'} className={({isActive})=>`flex-1 flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <FaRegUser size={27}/>
            </NavLink>

            <NavLink to={'/watch-later'} className={({isActive})=>`flex-1 flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <IoSettingsOutline size={27}/>
            </NavLink>

            <NavLink to={'/watch-history'} className={({isActive})=>`flex-1 flex justify-center items-center px-1 py-2 gap-8 rounded-lg ${isActive ? "dark:bg-slate-800 bg-slate-300" :" hover:bg-slate-300 dark:hover:bg-slate-800"}`}>
                <MdOutlinePolicy size={27}/>
            </NavLink>
        </div>
    )
}

export default Lowerbar