import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProperty } from '../api/propertyApi';
import './AddProperty.css';

const AddProperty = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    squareFeet: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProperty(property);
      navigate('/');
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  return (
    <div className="add-property-container">
      <h2>Add New Property</h2>
      
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Bedrooms</label>
          <select
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            required
          >
            <option value="">Select BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
        </div>

        <div className="form-group">
          <label>Square Feet</label>
          <input
            type="number"
            name="squareFeet"
            value={property.squareFeet}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={property.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Add Property</button>
          <button type="button" onClick={() => navigate('/')} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
