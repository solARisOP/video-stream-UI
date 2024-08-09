import React from 'react'

function Sidebar() {
  return (
        <div className='p-3 overflow-y-auto h-full w-full flex flex-col text-center gap-3'>
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Home
            </div> 
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                History
            </div> 
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Liked Videos
            </div> 
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Settings
            </div> 
            <div className='flex flex-1 w-full justify-end'>
                <div className='flex flex-col gap-3 w-full justify-end'>
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        End 
                    </div> 
                    <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        Last
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar