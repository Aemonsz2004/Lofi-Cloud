import React from 'react'
import Navbar from './app/Navbar'
import Sidebar from './app/Sidebar'




const Layout = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row mr-2'>
        <Sidebar />
        <div className='flex flex-col w-full'>
        <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout