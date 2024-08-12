import React from 'react'
import Sidebar from './Sidebar'
import Lowerbar from './Lowerbar'

function Playlist() {
  return (
    <div className='flex flex-1 scrollbar-thin'>
        {/* sidebar */}
        <Sidebar/>

        {/* mainbar */}
        <div className='w-full scrollbar-thin sm:w-5/6 flex h-full gap-2 px-1 flex-col sm:flex-row'>
            <div className='w-full sm:flex-1 border border-gray-600 rounded-lg sm:overflow-auto p-2'>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                {/* <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div> */}
                {/* <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div>
                <div className='bg-pink-500 text-center h-64 my-3 w-full'>01</div> */}
            </div>

            <div className='w-full sm:w-[65%] grid grid-cols-1 gap-2 sm:gap-4 text-center border border-gray-600 rounded-lg p-3 sm:overflow-auto'>
                <div className='bg-pink-500 text-center h-32 w-full'>1</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
                <div className='bg-pink-500 text-center h-32 w-full'>01</div>
            </div>
            {/* Lowerbar */}
            <Lowerbar/>
        </div>
        
    </div>
  )
}

export default Playlist