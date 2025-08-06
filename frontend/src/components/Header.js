// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="main-header">
      <div className="container">
        <h1 className="logo">
          <a href="https://www.onlineapplyhelp.in">OnlineApplyHelp</a>
        </h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/privacy-policy">PrivacyPolicy</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* 🔍 Search box added */}
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
