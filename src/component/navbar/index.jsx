import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const [pathname,setPathName]=useState("home")
  return (
    <nav className='nav_bar'>
        {/* <div className='icon'><img alt='icon' src=""/></div> */}
        <div className='icon_name'>bigrox</div>
   <ul onClick={(e)=>setPathName(e.target.id)}>
    <li className={`${pathname==="home"&&"active"}`}><Link to='/' id='home'>Home</Link></li>
    <li className={`${pathname==="pricing"&&"active"}`}><Link to='/' id='pricing'>Pricing</Link></li>
    <li className={`${pathname==="hub"&&"active"}`}><Link to='/' id='hub'>Knowledge Hub</Link></li>
    <li className={`${pathname==="connect"&&"active"}`}><Link to='/' id='connect'>Let's Connect</Link></li>
   </ul>
    </nav>
  )
}

export default Navbar