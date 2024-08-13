import React from 'react'
import Sidebar from './Sidebar.jsx'

function ProfileEdit() {
  return (
    <div className='flex flex-1 scrollbar-thin'>

      <Sidebar />

      <div className='w-full sm:w-5/6 scrollbar-thin p-3'>

        <div class="flex-1 flex flex-col gap-4">
          <div class="bg-blue-500 p-4"></div>
          <div class="bg-blue-500 p-4"></div>
          <div class="bg-blue-500 p-4"></div>
          <div class="bg-blue-500 p-4"></div>
          <div class="bg-blue-500 p-4"></div>
          <div class="bg-blue-500 p-4"></div>
        </div>

      </div>
    </div>
  )
}

export default ProfileEdit