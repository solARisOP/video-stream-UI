import React from 'react'

function Sidebar() {
  return (
        <>
        <div className='hidden w-1/6 p-3 sm:flex flex-col text-center gap-3 fixed left-0 min-h-[42rem] max-h-full'>
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
        <div className='w-1/6 hidden sm:flex flex-1 max-h-[42rem]'>

        </div>
        </>
    )
}

export default Sidebar