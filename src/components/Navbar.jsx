import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Anushree Beauty Saloon</Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/offers" onClick={() => setIsMenuOpen(false)}>Offers</Link></li>
            <li><Link to="/booking" onClick={() => setIsMenuOpen(false)}>Booking</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
        
        <div className="nav-cta">
          <a href="https://ladestack.in" className="btn">Book Now</a>
        </div>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar