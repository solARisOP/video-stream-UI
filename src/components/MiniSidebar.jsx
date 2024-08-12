import React from 'react'

function MiniSidebar() {
    return (
        <div className='flex-1 hidden sm:flex flex-col p-3 text-center gap-3 scrollbar-thin'>
            <div className='w-full p-1 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Ho
            </div>
            <div className='w-full p-1 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Hi
            </div>
            <div className='w-full p-1 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                LV
            </div>
            <div className='w-full p-1 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                Se
            </div>
            <div className='flex flex-1 w-full justify-end'>
                <div className='flex flex-col gap-3 w-full justify-end'>
                    <div className='w-full p-1 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        E
                    </div>
                    <div className='w-full p-1 rounded-lg border border-slate-500 hover:bg-slate-300 hover:border-white dark:hover:border-black dark:hover:bg-slate-900'>
                        L
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MiniSidebar