import React from 'react'
import Sidebar from './Sidebar.jsx'
import Lowerbar from './Lowerbar.jsx'
import { useEffect, useState } from 'react'

function Channel() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const mainBar = document.getElementById('channel-main-bar');
        const handleScroll = () => {
            const triggerHeight = 350;

            if (mainBar.scrollTop >= triggerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        mainBar.addEventListener("scroll", handleScroll);

        return () => {
            mainBar.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='flex flex-1 scrollbar-thin'>

            {/* sidebar */}
            <Sidebar />

            {/* mainbar */}
            <div id='channel-main-bar' className='w-full sm:w-5/6 p-2 sm:p-4 flex flex-col scrollbar-thin'>

                {/* upperpart */}
                <div className='flex flex-col min-h-96 gap-4 justify-between'>

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
                    <div className={`flex w-full justify-around items-center flex-1 ${isSticky ? "fixed top-16 bg-white dark:bg-black z-50 right-0 left-0 sm:left-[16.66667%] sm:w-5/6" : ""}`}>
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

                {/* channel videos */}

                <div className='flex-1'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
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
            </div>
        </div>
    )
}

export default Channel