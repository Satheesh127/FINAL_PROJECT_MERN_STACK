import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PropertyList.css';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    minSquareFeet: '',
    maxSquareFeet: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await axios.delete(`/api/properties/${id}`);
        fetchProperties(); // Refresh the list
      } catch (error) {
        console.error('Error deleting property:', error);
      }
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/properties/search', filters);
      setProperties(response.data);
    } catch (error) {
      console.error('Error searching properties:', error);
    }
  };

  return (
    <div className="property-list-container">
      <div className="search-filters">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
          >
            <option value="">Select Bedrooms</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="property-grid">
        {properties.map(property => (
          <div key={property._id} className="property-card">
            <img 
              src={property.image} 
              alt={property.title} 
              className="property-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
              }}
            />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="location">{property.location}</p>
              <p className="price">₹{property.price.toLocaleString()}</p>
              <p>{property.bedrooms} BHK | {property.squareFeet} sq.ft</p>
              <div className="property-actions">
                <button 
                  onClick={() => navigate(`/property/${property._id}`)} 
                  className="view-btn"
                >
                  View Details
                </button>
                <button 
                  onClick={() => navigate(`/edit-property/${property._id}`)} 
                  className="edit-btn"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(property._id)} 
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/add-property" className="add-property-btn">
        Add New Property
      </Link>
    </div>
  );
};

export default PropertyList;
