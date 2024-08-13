import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar.jsx'

function Videos() {
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

			<Sidebar />

			<div id='channel-main-bar' className='w-full sm:w-5/6 p-2 sm:p-4 flex flex-col scrollbar-thin'>

				{/* upperpart */}
				<div className='flex flex-col gap-4 justify-between'>

					{/* cover pic */}
					<div className='h-40 flex'>
						<div className='flex-1 border border-gray-500 rounded-lg text-start items-center flex'>
							<p className='text-xl text'>All Videos</p>
						</div>
					</div>

					<div className={`flex w-full justify-around items-center ${isSticky ? "fixed top-0 bg-white dark:bg-black z-50 right-0 left-0 sm:left-[16.66667%] sm:w-5/6" : ""}`}>
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

				<div className='grid grid-cols-1 gap-4'>
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
	)
}

export default Videos