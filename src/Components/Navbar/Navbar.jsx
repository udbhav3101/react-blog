import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Blog</Link>{' '}
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
