import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-title">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Our Location</h3>
              <p>123 Beauty Street, Salon District<br />City, State 123456</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 9695088080</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🕒</div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 10:00 AM - 8:00 PM<br />Sunday: 12:00 PM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="contact-map">
            <div className="map-placeholder">
              <p>Map Location</p>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <h2>Ready to Book Your Appointment?</h2>
          <a href="https://ladestack.in" className="btn">Book Now</a>
        </div>
      </div>
    </div>
  )
}

export default Contact