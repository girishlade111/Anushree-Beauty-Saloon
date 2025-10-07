import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Experience Luxury Beauty Services</h1>
            <p className="hero-subtitle">At Anushree Beauty Saloon, we transform your natural beauty with our premium treatments</p>
            <div className="hero-cta">
              <Link to="/services" className="btn">View Services</Link>
              <a href="https://ladestack.in" className="btn btn-outline">Book Appointment</a>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="container">
          <div className="offer-banner">
            <h2>Special Offer - Limited Time Only!</h2>
            <p className="offer-validity">Offer valid till 30 Oct</p>
            <div className="offer-services">
              <div className="offer-item">
                <h3>Wine/Diamond/Gold Facial Combo</h3>
                <p className="price">₹899</p>
                <ul>
                  <li>Eyebrow</li>
                  <li>Upper Lips</li>
                  <li>Forehead</li>
                  <li>Full Hand Wax with underarms</li>
                </ul>
              </div>
              <div className="offer-item">
                <h3>Lippo Wax</h3>
                <p className="price">₹899</p>
                <ul>
                  <li>Full Hand Wax</li>
                </ul>
              </div>
            </div>
            <a href="https://ladestack.in" className="btn">Book Now & Save</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>We use only the finest products and techniques for exceptional results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👩‍⚕️</div>
              <h3>Expert Professionals</h3>
              <p>Our skilled beauticians ensure the best experience and results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Natural Ingredients</h3>
              <p>Treatments with natural ingredients for healthy, glowing skin</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home