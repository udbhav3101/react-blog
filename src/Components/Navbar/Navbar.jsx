import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className="navbar">
          <h1>Blog</h1>
          <div className="links">
              <a href="/">Home</a>&nbsp;
              <a href="/create">Create Blog</a>
          </div>
      </nav>
  );
}

export default Navbar;