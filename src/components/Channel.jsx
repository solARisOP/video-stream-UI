import React from 'react'
import Sidebar from './Sidebar.jsx'
import Lowerbar from './Lowerbar.jsx'
import { useEffect, useState } from 'react'

function Channel() {
        const [isSticky, setIsSticky] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            const triggerHeight = 350;
      
            if (window.scrollY >= triggerHeight) {
              setIsSticky(true);
            } else {
              setIsSticky(false);
            }
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);

    return (
        <div className='flex w-full'>
            {/* sidebar */}
            <Sidebar />

            {/* mainbar */}
            <div className='w-full sm:w-5/6 p-2 sm:p-4 flex flex-col'>
                <div className='h-96 overflow-x-auto gap-4 justify-between'>
                    {/* cover pic */}
                    <div className='h-[30%] sm:h-[40%]'>
                        <div className='h-full border border-gray-500 rounded-lg'>

                        </div>
                    </div>
                    {/* main pic and details */}
                    <div className='h-[55%] sm:h-[45%]'>
                        <div className='h-full border border-gray-500 rounded-lg'>

                        </div>
                    </div>
                    {/* main pic and details */}
                    <div className={`flex w-full justify-around items-center flex-1 ${isSticky ? "fixed top-16 sm:w-5/6 dark:bg-black z-50" : ""}`}>
                        <div className='p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-900'>
                            Following
                        </div>
                        <div className='p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-900'>
                            Videos
                        </div>
                        <div className='p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-900'>
                            Playlist
                        </div>
                        <div className='p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-900'>
                            Tweets
                        </div>
                    </div>
                </div>
                <div className='w-full flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                    <div className='bg-pink-500 text-center h-32 sm:h-52'>01</div>
                </div>
            </div>

            {/* Lowerbar */}
            <Lowerbar />
        </div>
    )
}

export default Channel