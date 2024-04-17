import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='w-full bg-gray-50 p-8'>
            <NavLink to='/' className='text-3xl w-full hover:underline'>Register You</NavLink>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Navbar