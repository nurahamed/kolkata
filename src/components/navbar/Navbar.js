import React from 'react'
import './Navbar.css';
import logo from '../../image/logo.webp';
export default function Navbar() {
  return (
    <>
    <nav className="navbar background h-nav-resp">
        <div className="logo"><img src={logo} alt="cat"/></div>
        <ul className="nav-list v-class-resp">
            <li><a href="#home">Home</a></li>
            {/* <li><a href="">Hostory</a></li> */}
            <li><a href="#place">Places</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="rightNav v-class-resp">
            <input type="text" name="Search" id="search"/>
            <button className="btn btn-sm"> search</button>
        </div>
        <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </nav>
    </>
  )
}
