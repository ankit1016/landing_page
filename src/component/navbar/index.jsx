import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='nav_bar'>
        {/* <div className='icon'><img alt='icon' src=""/></div> */}
        <div className='icon_name'>bigrox</div>
   <ul>
    <li ><Link to='/'>Home</Link></li>
    <li><Link to='/'>Pricing</Link></li>
    <li><Link to='/'>Knowledge Hub</Link></li>
    <li className='active'><Link to='/'>Let's Connect</Link></li>
   </ul>
    </nav>
  )
}

export default Navbar