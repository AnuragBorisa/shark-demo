// header.jsx
import React from 'react';
import './headerStyles.css'; // Import the styles

const Header = () => {
  return (
    <header className="header">
      <h1 className="headerTitle">My Website</h1>
      <nav>
        <ul className="headerList">
          <li><a href="/" className="headerLink">Explore</a></li>
          <li><a href="/about" className="headerLink">Solutions</a></li>
          <li><a href="/contact" className="headerLink">Resources</a></li>
          <li><a href="/contact" className="headerLink">Company</a></li>
          <li><a href="/contact" className="headerLink">Price</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
