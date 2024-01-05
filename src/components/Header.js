// header.jsx
import React from 'react';
import './headerStyles.css'; // Import the styles

const Header = () => {
  return (
    <header className="header">
      <h1 className="headerTitle">My Website</h1>
      <nav>
        <ul className="headerList">
          <li><a href="/" className="headerLink">Home</a></li>
          <li><a href="/about" className="headerLink">About</a></li>
          <li><a href="/contact" className="headerLink">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
