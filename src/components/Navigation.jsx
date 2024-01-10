import React from 'react'
// import Link to hyperlink the distinct pages in the navigation
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className='navList'>
        {/* link for main path '/' */}
        <li>
          <Link to='/'>
            <p>About Me</p>
          </Link> 
        </li>
        {/* link for portfolio path  */}
        <li>
          <Link to='/portfolio'>
            <p>Portfolio</p>
          </Link> 
        </li>
        {/* link for contact path */}
        <li>
          <Link to='/contact'>
            <p>Contact</p>
          </Link> 
        </li>
        {/* link for resume path */}
        <li>
          <Link to='/resume'>
            <p>Resume</p>
          </Link> 
        </li>
      </ul>
    </nav>
  )
}

export default Navigation