import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearching(true);
    try {
      const queryParams = new URLSearchParams();
      if (searchCriteria.location) queryParams.append('location', searchCriteria.location);
      if (searchCriteria.minPrice) queryParams.append('minPrice', searchCriteria.minPrice);
      if (searchCriteria.maxPrice) queryParams.append('maxPrice', searchCriteria.maxPrice);
      if (searchCriteria.bedrooms) queryParams.append('bedrooms', searchCriteria.bedrooms);

      const response = await axios.get(`/api/properties/search/filter?${queryParams}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching properties:', error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="search-container">
      <h2>Search Properties</h2>
      <form onSubmit={handleSearch} className="search-form">
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={searchCriteria.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={searchCriteria.minPrice}
              onChange={handleChange}
              placeholder="Minimum price"
            />
          </div>

          <div className="form-group">
            <label>Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={searchCriteria.maxPrice}
              onChange={handleChange}
              placeholder="Maximum price"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Bedrooms</label>
          <select
            name="bedrooms"
            value={searchCriteria.bedrooms}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
        </div>

        <button type="submit" className="search-button" disabled={searching}>
          {searching ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="search-results">
        {searchResults.map(property => (
          <div key={property._id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="location">{property.location}</p>
              <p className="price">₹{property.price.toLocaleString()}</p>
              <p>{property.bedrooms} BHK | {property.squareFeet} sq.ft</p>
            </div>
          </div>
        ))}
        {searchResults.length === 0 && !searching && (
          <p className="no-results">No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
