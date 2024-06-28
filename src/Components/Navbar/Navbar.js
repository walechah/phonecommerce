import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
      <Link to="/products" className="nav-link">
        <button className="nav-button">Products</button>
      </Link>
      <Link to="/mycart" className="nav-link">
        <button className="nav-button">My Cart</button>
      </Link>
    </div>
  );
}

export default Navbar;
