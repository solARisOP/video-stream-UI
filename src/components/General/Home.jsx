import React from 'react'
import Sidebar from './Sidebar'
import { Link, useLoaderData } from 'react-router-dom'

function Home() {

	const data = useLoaderData();

	return (
		<div className='flex flex-1 scrollbar-thin'>
			{/* sidebar */}
			<Sidebar />

			{/* mainbar */}
			<div className='w-full scrollbar-thin sm:w-5/6 p-2 sm:p-4 flex flex-col'>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-center'>
					{data.map((x) => {
						const params = {
							key: x._id,
						};
						const searchParams = new URLSearchParams(params)
						const source = `video?${searchParams.toString()}`

						return (
							<div key={x._id} className='flex flex-col h-80'>
								<Link to={source} className='w-full h-3/4'>
									<img src={x.thumbnail} alt="" className='w-full h-full' />
								</Link>
								<div className='w-full h-1/4'>
									{x.title}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Home