import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/SignUp'></Link>
      <Link to='/Recipeitems'></Link>
  
      

      <Outlet />
      
    </div>
  )
}
