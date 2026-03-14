import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="nav-bar">
    <div className='head1'>
      <h2> Horizon Courts </h2>
    </div>

    <nav className='head2'>
    <a href="./">About Us</a>
    <a href="./">Services</a>
    <a href="./">Coaches</a>
    <a href="./">Events</a>
    <a href="./">Contacts</a>
    </nav>

    <div className="button">
        <button>Book Now <i className="ri-arrow-right-down-line"></i> </button>
    </div>
    </div>
  
  )
}

export default Navbar
