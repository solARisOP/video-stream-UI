import React from 'react'
import googleLogo from "../assets/google.png"
import cinevistaLogo from "../assets/cinevista.png"

function Register() {
    return (
        <div className='flex h-full w-full justify-center dark:bg-black'>
          <div className='rounded-md p-4 w-3/4 sm:w-1/3'>
            <div className='flex flex-col'>
              <div className='flex flex-col items-center justify-center'>
                <img src={cinevistaLogo} alt="" className='size-44'/>
              </div>
              <div className='flex flex-col mb-3'>
                <label
                  for="fullname"
                  className='dark:text-white text-lg sm:text-xl'
                >
                  Fullname
                </label>
    
                <input
                  type="text"
                  placeholder='Enter your fullname here'
                  id='fullname'
                  className='rounded p-1 dark:bg-black bg-white border border-slate-500 text-md sm:text-lg dark:text-white'
                />
    
              </div>
              <div className='flex flex-col mb-3'>
                <label
                  for="username"
                  className='dark:text-white text-lg sm:text-xl'
                >
                  Username
                </label>
    
                <input
                  type="text"
                  placeholder='Enter your username here'
                  id='username'
                  className='rounded p-1 dark:bg-black bg-white border border-slate-500 text-md sm:text-lg dark:text-white'
                />
    
              </div>
              <div className='flex flex-col mb-3'>
                <label
                  for="email"
                  className='dark:text-white text-lg sm:text-xl'
                >
                  Email
                </label>
    
                <input
                  type="email"
                  placeholder='Enter your email here'
                  id='email'
                  className='rounded p-1 dark:bg-black bg-white border border-slate-500 text-md sm:text-lg dark:text-white'
                />
    
              </div>
              <div className='flex flex-col mt-2'>
    
                <label
                  for="password"
                  className='text-black dark:text-white text-lg sm:text-xl'
                >
                  Password
                </label>
    
                <input
                  type="Password"
                  placeholder='Enter your password here'
                  id='password'
                  className='rounded p-1 dark:bg-black bg-white border border-slate-500 text-md sm:text-lg text-black dark:text-white'
                />
              </div>
              <div className='w-full pl-3 pr-3 flex justify-center items-center mt-7'>
                <button 
                  type="button"
                  className='w-1/2 mt-3 p-2 rounded-lg bg-blue-600 text-white dark:text-black'
                >
                  Sign Up
                </button>
              </div>
              <div className='w-full mt-4 flex flex-col items-center justify-center gap-3'>
                <p 
                className='w-full text-black dark:text-white text-center'
                >
                  or continue with
                </p>
                <img src={googleLogo} alt="" className='size-8 cursor-pointer'/>
              </div>
              
            </div>
    
          </div>
        </div>
      )
}

export default Register