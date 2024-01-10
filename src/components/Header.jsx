import React from 'react'
import Navigation from './Navigation'
import './Header.css';

const Header = () => {
  return (
    <header>
        <h1 className='headTitle'>Justin Surette</h1>
        <Navigation />
    </header>
  )
}

export default Header