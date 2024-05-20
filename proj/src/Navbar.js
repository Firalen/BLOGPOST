import React from 'react'
import { NavLink } from 'react-router-dom'
import pizza from './img/pizzaLogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
    
    <nav>
      <img src={pizza} alt='' className='imag'/>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/menu'>MENU</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
    </nav>
    </div>
  )
}

export default Navbar 
