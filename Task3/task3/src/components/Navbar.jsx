
import React from 'react'
import "./Navbar.scss";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
  <nav className="navbar">

  <div className="nav-container">

    <div className="nav-left">
      <img src={logo} alt="" />
      <h3>BloomFi</h3>
    </div>

    <div className="nav-links">
      <a href="#">Purple Garden</a>
      <a href="#">Gallery</a>
      <a href="#">Aesthetic</a>
      <a href="#">Inspiration</a>
      <a href="#">Join Us</a>
    </div>

    <button className="nav-btn">
      Explore Purple
    </button>

  </div>

</nav>
  )
}

export default Navbar




