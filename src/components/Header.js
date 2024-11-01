import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image here

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* Desktop Navigation Links */}
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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="space-y-4 px-4 py-4 text-gray-700">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                About
              </Link>
              <Link
                to="/program"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Program
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
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
