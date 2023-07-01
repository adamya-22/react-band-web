import React from 'react'
import '../styles/style.css'
import '../styles/navbar.css'
import logo from '../assets/logo.webp'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    {/* navbar */}
    <div className="nav">
          <input type="checkbox" id="nav-check"/>
          <div className="nav-header">
            <div className="nav-title">
              {/* LOGO */}
              <NavLink to="/"><img className="logo" src={logo} alt=""/>
              </NavLink>
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div className="nav-links">
            <NavLink to="/" className="active">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* <NavLink to="#">Subscribe</NavLink> */}
          </div>
        </div>
    </>
  )
}

export default Navbar