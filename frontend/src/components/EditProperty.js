import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddProperty.css';

const EditProperty = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState({
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    squareFeet: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/properties/${id}`, property);
      navigate('/');
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };

  return (
    <div className="add-property-container">
      <h2>Edit Property</h2>
      
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
          <button type="submit" className="submit-btn">Update Property</button>
          <button type="button" onClick={() => navigate('/')} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProperty;
