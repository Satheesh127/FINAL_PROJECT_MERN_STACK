import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyHome</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <Link to="/add-property" className="nav-link">Add Property</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
