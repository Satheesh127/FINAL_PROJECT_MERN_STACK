import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About MyHome</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At MyHome, we're dedicated to making property search and management simple and efficient.
            Our platform connects property seekers with their dream homes, offering a comprehensive
            database of properties across various locations.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Property Search</h3>
              <p>Advanced search options to find properties that match your exact requirements.</p>
            </div>
            <div className="feature">
              <h3>Property Listings</h3>
              <p>Easy property listing management for property owners and agents.</p>
            </div>
            <div className="feature">
              <h3>Detailed Information</h3>
              <p>Comprehensive property details including images, specifications, and pricing.</p>
            </div>
            <div className="feature">
              <h3>User-Friendly Interface</h3>
              <p>Simple and intuitive interface for seamless property browsing and management.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="benefits-list">
            <li>Wide range of properties across different locations</li>
            <li>Regular updates with new property listings</li>
            <li>Verified property information</li>
            <li>Easy to use platform</li>
            <li>Dedicated customer support</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>Email: info@myhome.com</p>
            <p>Phone: +91 123-456-7890</p>
            <p>Address: 123 Real Estate Street, Property City - 600001</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
