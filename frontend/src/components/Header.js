// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      // For now: redirect to Google search limited to your website
      const searchURL = `https://www.google.com/search?q=site:onlineapplyhelp.in+${encodeURIComponent(query)}`;
      window.open(searchURL, '_blank');
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

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
