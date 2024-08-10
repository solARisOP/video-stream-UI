import React from 'react'
import Sidebar from './Sidebar'
import Lowerbar from './Lowerbar'

function Home() {
  return (
    <div className='flex w-full flex-1 overflow-y-auto'>
        {/* sidebar */}
        <Sidebar/>

        {/* mainbar */}
        <div className='w-full overflow-y-auto sm:w-5/6 p-2 sm:p-4'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-center'>
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
        </div>
        
        {/* Lowerbar */}
        <Lowerbar/>
    </div>
  )
}

export default Home