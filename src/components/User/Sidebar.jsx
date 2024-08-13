import React from 'react'
import cinevistaLogo from '../../assets/cinevista.png'

function Sidebar() {
  return (
        <div className='flex-1 hidden sm:flex flex-col p-3 text-center scrollbar-thin'>
            <div className='flex flex-col gap-3 items-center'>
                <img src={cinevistaLogo} alt="" className='size-auto'/>
                <div className='border border-gray-600 rounded-full p-10'></div>
            </div>
            
            <div className='flex flex-1 flex-col'>

                <div className='flex-1'></div>

                <div className='flex flex-col h-fit gap-4'>
                
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        All Videos
                    </div> 
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        Profile
                    </div> 
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        Tweets
                    </div> 
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        Playlists
                    </div> 
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        Subscribers
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar