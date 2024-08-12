import React from 'react'
import Sidebar from './Sidebar'
import Lowerbar from './Lowerbar'

function Home() {
  return (
    <div className='flex flex-1 scrollbar-thin'>
      {/* sidebar */}
      <Sidebar />

      {/* mainbar */}
      <div className='w-full scrollbar-thin sm:w-5/6 p-2 sm:p-4 flex flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-center'>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
          <div className='bg-pink-500 text-center h-80'>01</div>
        </div>


        {/* Lowerbar */}
        <Lowerbar />
      </div>

    </div>
  )
}

export default Home