import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
      <nav class="navbar">
  <div class="logo">
    <img src="https://sher-assignment-28.vercel.app/assets/logo.svg" alt="" />
  </div>

  <ul class="menu">
    <li>About Me</li>
    <li>Portfolio</li>
    <li>Services</li>
    <li>Blog</li>
  </ul>

  <button class="call-btn">Book a Call</button>
</nav>

  )
}

export default Navbar
