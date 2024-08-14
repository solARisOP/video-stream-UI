import React from 'react'

function Lowerbar() {
	return (
		<div className='sticky bottom-0 sm:hidden w-full h-14 flex justify-around items-center'>
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
	)
}

export default Lowerbar