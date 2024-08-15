import React from 'react'
import Sidebar from './Sidebar.jsx'

function SavedPlaylists() {
    return (
        <div className='flex flex-1 scrollbar-thin'>
          {/* sidebar */}
          <Sidebar />
    
          {/* mainbar */}
            <div className='w-full scrollbar-thin sm:w-5/6 p-2 sm:p-4 flex flex-col'>
                <div className='my-5'>
                    <p className='text-2xl'>Saved Playlists</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 text-center'>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                    <div className='bg-pink-500 text-center h-40'>01</div>
                </div>
            </div>
        </div>
      )
}

export default SavedPlaylists