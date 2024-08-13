import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { MdDelete } from "react-icons/md";

function PlaylistEdit() {

    const [x, changex] = useState(1);

    const changebtn = ()=>{
        changex(val=>val ? 0 : 1);
    }

    const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const mainBar = document.getElementById('playlist-main-bar');
		const handleScroll = () => {
			const triggerHeight = 180;

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
            <div className='w-full scrollbar-thin sm:w-5/6 p-2 sm:p-4 flex flex-col' id='playlist-main-bar'>
                <div className='flex flex-col flex-1 gap-2'>

                    {/* Name */}
                    <div className='flex border border-gray-600 rounded-lg justify-between items-center p-3'>
                        <div className='flex justify-center items-center w-2/6'>
                            <label htmlFor="name" className='dark:text-white text-3xl'>Title</label>
                        </div>
                        <input id="name" type="text" className='dark:bg-black border border-gray-600 rounded-lg p-2 w-4/6' />
                    </div>

                    {/* Description */}
                    <div className='flex border border-gray-600 rounded-lg justify-between items-center p-3'>
                        <div className='flex justify-center items-center w-2/6'>
                            <label htmlFor="name" className='dark:text-white text-3xl'>Description</label>
                        </div>
                        <textarea name="description" id="description" className='dark:bg-black w-4/6 border border-gray-600 rounded-lg'></textarea>
                    </div>

                    <div className={`flex p-3 border-gray-600 rounded-lg justify-between items-center ${isSticky ? "fixed top-0 p-10 bg-white dark:bg-black z-50 right-0 left-0 sm:left-[16.66667%] sm:w-5/6" : ""}`}>
                        <div className='flex gap-3 px-1 items-center'>
                            <label htmlFor="name" className='dark:text-white text-lg'>Delete</label>
                            <MdDelete color='gray' size={30} />
                        </div>
                        <div className='flex justify-between px-1 items center'>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={x==1} onChange={changebtn}/>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">public</span>
                            </label>
                        </div>
                        <div className='flex gap-3 px-1 items-center'>
                            <button type="button" className='border border-gray-500 rounded-xl p-2 w-40'>Save</button>
                        </div>
                    </div>

                    {/* Videos */}
                    <div className='flex flex-col flex-1 gap-3 p-3'>
                        {/* <div className='flex flex-col '></div> */}
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                        <div className='bg-pink-500 text-center p-10'>01</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlaylistEdit