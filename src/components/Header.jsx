import React from 'react'
import cinevistaLogo from '../assets/cinevistaHorizontal.png'
import { FaMagnifyingGlass } from "react-icons/fa6";

function Header() {

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='fixed top-0 flex justify-between items-center w-full dark:bg-black h-16 px-4 pl-1 pr-2'>
                <div>
                    <img src={cinevistaLogo} className='size-32 sm:size-44 flex items-center justify-center' />
                </div>
                <div className='sm:flex w-1/3 rounded-xl h-10 hidden'>
                    <input type="text" className='hidden sm:block w-5/6 p-1 border border-gray-500 rounded-s-xl dark:bg-black' />
                    <button className='w-1/6 items-center flex justify-center border border-gray-500 rounded-e-xl'>
                    <FaMagnifyingGlass size={20} color='' />
                    </button>
                </div>
                <div className='hidden sm:flex pr-4 text-blue-600 text-lg border border-blue-600 rounded-md text-center'>
                    <p className='text-center'>Sign In</p>
                </div>
                <div className='flex sm:hidden items-center justify-between gap-3'>
                    <button className='items-center flex justify-center'>
                        <FaMagnifyingGlass size={20} color='' />
                    </button>
                    <div className='text-blue-600 text-lg border border-blue-600 rounded-md text-center'>
                        <p className='text-center'>Sign In</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex h-16'>
                
            </div>
        </div>
    )
}

export default Header