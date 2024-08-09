import React from 'react'
import { Header, Home, Login, Register, Search } from './components'
function App() {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header/>
      <Home/>
    </div>
  )
}

export default App