import React from 'react'
import './Offers.css'

const Offers = () => {
  const offers = [
    {
      id: 1,
      name: "Wine/Diamond/Gold Facial Combo",
      price: "₹899",
      originalPrice: "₹1500",
      features: ["Eyebrow", "Upper Lips", "Forehead", "Full Hand Wax with underarms"],
      discount: "40% OFF"
    },
    {
      id: 2,
      name: "Lippo Wax",
      price: "₹899",
      originalPrice: "₹1200",
      features: ["Full Hand Wax"],
      discount: "25% OFF"
    },
    {
      id: 3,
      name: "Aroma Whitening Facial",
      price: "₹1300",
      originalPrice: "₹1800",
      features: ["Full Hand + Half Leg Wax", "Eyebrows", "Free D-Tan Pack"],
      discount: "28% OFF"
    },
    {
      id: 4,
      name: "Pomegranate Facial",
      price: "₹1150",
      originalPrice: "₹1500",
      features: ["Full Hand Wax", "Underarms + Half Leg", "Eyebrows"],
      discount: "23% OFF"
    }
  ]

  return (
    <div className="offers">
      <div className="container">
        <div className="section-title">
          <h1>Special Offers</h1>
          <p className="offer-validity">Offer valid till 30 Oct</p>
        </div>
        
        <div className="offers-grid">
          {offers.map(offer => (
            <div className="offer-card" key={offer.id}>
              <div className="offer-badge">{offer.discount}</div>
              <div className="offer-header">
                <h2>{offer.name}</h2>
                <div className="offer-prices">
                  <span className="current-price">{offer.price}</span>
                  <span className="original-price">{offer.originalPrice}</span>
                </div>
              </div>
              <ul className="offer-features">
                {offer.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="https://ladestack.in" className="btn offer-btn">Book Now</a>
            </div>
          ))}
        </div>
        
        <div className="offer-terms">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>Offer valid only till 30th October 2025</li>
            <li>Cannot be combined with any other offers</li>
            <li>Prices mentioned are for single person</li>
            <li>Service availability subject to appointment scheduling</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Offers