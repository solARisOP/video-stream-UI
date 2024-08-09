import React from 'react'
import cinevistaLogo from '../assets/cinevistaHorizontal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {

    return (
        <div className='w-full flex h-16 justify-center items-center pl-4 pr-4'>
            <div className='flex justify-between items-center w-full'>
                <div className=''>
                    <img src={cinevistaLogo} className='size-44 flex items-center justify-center' />
                </div>
                <div className='flex bg-white w-1/3 rounded-lg'>
                    <input type="text" className='w-5/6 p-1 border border-gray-500 rounded-s-lg dark:bg-black' />
                    <button className='w-1/6'>

                    </button>
                </div>
                <div className='pr-4 text-blue-600 text-lg border border-blue-600 rounded-md text-center'>
                    <p className='text-center'>Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default Header