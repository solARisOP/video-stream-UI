import React from 'react'
import Sidebar from './Sidebar'

function Search() {
  return (
    <div className='flex w-full flex-1 overflow-y-auto'>
        {/* sidebar */}
        <div className='hidden sm:block w-1/6'>
            <Sidebar/>
        </div>

        {/* mainbar */}
        <div className='w-full sm:w-5/6 overflow-y-auto p-4'>
            <div className='w-full grid grid-cols-1 gap-2 sm:gap-4 text-center'>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
                <div className='bg-pink-500 text-center h-80 sm:h-64'>01</div>
            </div>
        </div>
        
    </div>
  )
}

export default Search