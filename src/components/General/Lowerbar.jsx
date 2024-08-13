import React from 'react'

function Lowerbar() {
    return (
        <>
        <div className='flex sm:hidden w-full h-12'>
        </div>
        <div className='sm:hidden fixed w-full bottom-0 h-14 flex justify-around items-center dark:bg-black bg-white'>
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Home
            </div>
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                History
            </div>
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Liked
            </div>
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Settings
            </div>
            <div className='w-full p-2 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Settings
            </div>
        </div>
        </>
    )
}

export default Lowerbar