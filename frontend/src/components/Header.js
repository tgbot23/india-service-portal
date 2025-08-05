// src/components/Header.js
import React from 'react';
import './Header.css'; // CSS file (we'll create it)

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="logo">
          <a href="https://www.onlineapplyhelp.in">OnlineApplyHelp</a>
        </h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
