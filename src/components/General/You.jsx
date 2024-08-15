import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function You() {
    return (
        <div className='flex flex-1 scrollbar-thin'>
            {/* sidebar */}
            <Sidebar />

            {/* mainbar */}
            <div className='w-full scrollbar-thin sm:w-5/6 p-2 sm:p-4 flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <div className='flex flex-col justify-start gap-5 items-center p-3'>
                        <div className='justify-start items-center flex w-full'>
                            <p className='text-lg'>
                                Your Channel
                            </p>
                        </div>
                        <Link to={'/channel'} className='border border-gray-700 rounded-lg h-48 w-full'></Link>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center p-3'>
                        <p className='text-lg'>
                            Watch History
                        </p>
                        <Link to={'/watch-history'} className='border border-gray-500 rounded-lg px-2 py-1'> See All </Link>
                    </div>
                    <div className='flex gap-2 scrollbar-thin'>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center p-3'>
                        <p className='text-lg'>
                            Watch Later
                        </p>
                        <Link to={'/watch-later'} className='border border-gray-500 rounded-lg px-2 py-1'> See All </Link>
                    </div>
                    <div className='flex gap-2 scrollbar-thin'>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center p-3'>
                        <p className='text-lg'>
                            Saved Playlists
                        </p>
                        <Link to={'/saved-playlists'} className='border border-gray-500 rounded-lg px-2 py-1'> See All </Link>
                    </div>
                    <div className='flex gap-2 scrollbar-thin'>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center p-3'>
                        <p className='text-lg'>
                            Liked Videos
                        </p>
                        <Link to={'/liked-videos'} className='border border-gray-500 rounded-lg px-2 py-1'> See All </Link>
                    </div>
                    <div className='flex gap-2 scrollbar-thin'>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                        <div className='bg-pink-500 text-center min-h-40 min-w-60'>01</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default You