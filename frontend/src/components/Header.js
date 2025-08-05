import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          onlineapplyhelp.in
        </Link>

        {/* Center: Search bar */}
        <div className="flex-1 mx-4 hidden sm:block">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Right: Navigation links */}
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
