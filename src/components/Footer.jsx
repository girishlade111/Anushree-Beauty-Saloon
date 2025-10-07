import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Anushree Beauty Saloon</h3>
            <p>Premium beauty services for the modern woman</p>
            <p className="contact-number">📞 +91 9695088080</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📱</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">💬</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anushree Beauty Saloon. All rights reserved.</p>
          <p className="offer-validity">Offer valid till 30 Oct</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer