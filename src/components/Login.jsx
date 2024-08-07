import React from 'react'

function Login() {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <div className='rounded-md flex flex-col w-1/4 m-10'>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
        </div>
    </div>
  )
}

export default Login