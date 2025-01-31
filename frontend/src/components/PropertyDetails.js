import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProperty } from '../api/propertyApi';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    loadProperty();
  }, [id]);

  const loadProperty = async () => {
    try {
      const response = await getProperty(id);
      setProperty(response.data);
    } catch (error) {
      console.error('Error loading property:', error);
    }
  };

  if (!property) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="property-details-container">
      <div className="property-details">
        <div className="property-image">
          <img src={property.image} alt={property.title} />
        </div>
        
        <div className="property-info">
          <h1>{property.title}</h1>
          <p className="location">{property.location}</p>
          <div className="price-tag">${property.price.toLocaleString()}</div>
          
          <div className="property-specs">
            <div className="spec">
              <span className="label">Bedrooms:</span>
              <span className="value">{property.bedrooms} BHK</span>
            </div>
            <div className="spec">
              <span className="label">Square Feet:</span>
              <span className="value">{property.squareFeet}</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>{property.description}</p>
          </div>

          <div className="actions">
            <button onClick={() => navigate(`/edit-property/${id}`)} className="edit-btn">
              Edit Property
            </button>
            <button onClick={() => navigate('/')} className="back-btn">
              Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
