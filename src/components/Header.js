import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image here

const Header = () => {
  const location = useLocation();

  // Function to generate breadcrumb based on URL path
  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    return `Home / ${path.slice(1).charAt(0).toUpperCase() + path.slice(2)}`;
  };

  return (
    <header>
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-gray-700">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link to="/program" className="hover:text-blue-500">
              Program
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {/* You could add a menu icon here for mobile toggle (optional) */}
          </div>
        </div>
      </nav>

      {/* Jumbotron Image */}
      <div
        className="mt-16 w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400')`,
        }}
      >
        <div className="flex justify-center items-center h-full bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Welcome to Our Website
          </h1>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 font-medium">{getBreadcrumb()}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
