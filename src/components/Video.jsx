import React from 'react'
import MiniSidebar from './MiniSidebar'
import Lowerbar from './Lowerbar'

function Video() {
    return (
        <div className='flex flex-1 scrollbar-thin'>

            <MiniSidebar />
            <div className='sm:w-[95%] scrollbar-thin flex flex-col sm:flex-row w-full'>

                {/* video section */}
                <div className='sm:w-[70%] w-full sm:px-3 flex flex-col gap-3'>

                    {/* video */}
                    <div className='fixed top-16 left-0 right-0 sm:static min-h-[13rem] sm:min-h-[30rem] rounded-md sm:rounded-lg border border-gray-600 bg-red-500 w-full'>
                    </div>

                    {/* offset of small screens */}
                    <div className='h-[13rem] sm:h-[30rem] w-full sm:hidden flex'>
                    </div>

                    {/* details */}
                    <div className='min-h-[10rem] rounded-lg border border-gray-600'></div>

                    {/* description */}
                    <div className='min-h-[13rem] rounded-lg border border-gray-600'></div>

                    {/* comments */}
                    <div className='rounded-lg border border-gray-600 w-full flex flex-col gap-3 p-2'>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-40 w-full'>01</div>
                    </div>
                </div>

                {/* related videos */}
                <div className='flex flex-col flex-1'>
                    <div className='rounded-lg border border-gray-600 gap-2 flex flex-col w-full p-2'>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                        <div className='bg-pink-500 text-center h-52 w-full'>01</div>
                    </div>
                </div>

                <Lowerbar />
            </div>
        </div>
    )
}

export default Video