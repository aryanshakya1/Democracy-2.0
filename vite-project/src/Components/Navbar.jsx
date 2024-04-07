import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <a href="index.html">Democracy 2.0</a>
        </div>
        <div className="nav-items">
          <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> Know Your Leader </a></li>
            <li><a href="#"> Voice Your Protest</a></li>
            <li><a href="#"> Profile </a></li>
            <li><a href="#"> ### </a></li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer"></div>
          <a href="Login.html">Log In</a>
        </div>
        <div id="hamburger-menu">&#9776;</div>
      </div>
  
      <div id="mobile-menu">
        <div className="mobile-nav-items">
          <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="#">  Know Your Leader </a></li>
            <li><a href="#"> Voice Your Protest</a></li>
            <li><a href="#"> Profile </a></li>
            <li><a href="#"> ### </a></li>
          </ul>
        </div>
        <div className="mobile-nav-button">
          <div className="anim-layer"></div>
          <a href="Login.html">Log In</a>
        </div>
        <div id="hamburger-cross">&#10006;</div>
      </div>
    </>
  )
}

export default Navbar
