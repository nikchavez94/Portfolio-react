import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./nav.css"


const Root = () => {
  return (
    <div>
        <ul className='Nav'>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/curriculum">Curriculum Design</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
        < Outlet/>
    
    </div>
  )
}

export default Root
