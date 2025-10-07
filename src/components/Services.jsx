import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Wine/Diamond/Gold Facial Combo",
      price: "₹899",
      features: ["Eyebrow", "Upper Lips", "Forehead", "Full Hand Wax with underarms"]
    },
    {
      id: 2,
      name: "Aroma Whitening Facial",
      price: "₹1300",
      features: ["Full Hand + Half Leg Wax", "Eyebrows", "Free D-Tan Pack"]
    },
    {
      id: 3,
      name: "Pomegranate Facial",
      price: "₹1150",
      features: ["Full Hand Wax", "Underarms + Half Leg", "Eyebrows"]
    },
    {
      id: 4,
      name: "Hydra Facial",
      price: "₹2300",
      features: ["Full Hand Wax", "Half Leg", "Eyebrows"]
    },
    {
      id: 5,
      name: "Jeannot Facial",
      price: "₹2100",
      features: ["Instant Glow Cream Wax", "Full Hand + Half Leg", "Eyebrows"]
    },
    {
      id: 6,
      name: "Lippo Wax",
      price: "₹899",
      features: ["Full Hand Wax"]
    }
  ]

  return (
    <div className="services">
      <div className="container">
        <div className="section-title">
          <h1>Our Beauty Services</h1>
          <p>Discover our premium beauty treatments and packages</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-header">
                <h2>{service.name}</h2>
                <p className="service-price">{service.price}</p>
              </div>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="https://ladestack.in" className="btn service-btn">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services