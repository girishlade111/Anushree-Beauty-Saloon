import React from 'react'
import './Booking.css'

const Booking = () => {
  return (
    <div className="booking">
      <div className="container">
        <div className="section-title">
          <h1>Book Your Appointment</h1>
          <p>Schedule your beauty treatment with us</p>
        </div>
        
        <div className="booking-content">
          <div className="booking-info">
            <h2>Easy Online Booking</h2>
            <p>Book your appointment quickly and easily through our partner platform. Select your preferred service, date, and time that works best for you.</p>
            
            <div className="booking-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">📅</div>
                <h3>Flexible Scheduling</h3>
                <p>Choose from a wide range of available time slots</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💳</div>
                <h3>Secure Payment</h3>
                <p>Safe and secure online payment options</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔔</div>
                <h3>Appointment Reminders</h3>
                <p>Get timely reminders for your appointments</p>
              </div>
            </div>
            
            <div className="booking-cta">
              <a href="https://ladestack.in" className="btn booking-btn">Book Now on Ladestack</a>
              <p className="redirect-info">You will be redirected to ladestack.in to complete your booking</p>
            </div>
          </div>
          
          <div className="booking-image">
            <div className="image-placeholder">
              <p>Booking Platform Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking