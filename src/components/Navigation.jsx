import React from 'react'
// import Link to hyperlink the distinct pages in the navigation
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  // variables for active location
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split('/');

  return (
    <nav>
      <ul className='navList'>
        {/* link for main path '/' */}
        <li className={splitLocation[1] === '' ? 'active' : ''}>
          <Link to='/'>
            <p>About Me</p>
          </Link> 
        </li>
        {/* link for portfolio path  */}
        <li className={splitLocation[1] === 'portfolio' ? 'active' : ''}>
          <Link to='/portfolio'>
            <p>Portfolio</p>
          </Link> 
        </li>
        {/* link for contact path */}
        <li className={splitLocation[1] === 'contact' ? 'active' : ''}>
          <Link to='/contact'>
            <p>Contact</p>
          </Link> 
        </li>
        {/* link for resume path */}
        <li className={splitLocation[1] === 'resume' ? 'active' : ''}>
          <Link to='/resume'>
            <p>Resume</p>
          </Link> 
        </li>
      </ul>
    </nav>
  )
}

export default Navigation