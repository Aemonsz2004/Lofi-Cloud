import React from 'react'
import Navbar from './app/Navbar'
import Sidebar from './app/Sidebar'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <div className='flex flex-col w-full'>
        <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout