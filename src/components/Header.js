import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image here
import banner from "../assets/banner.jpg";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to generate breadcrumb based on URL path
  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    return `Home / ${path.slice(1).charAt(0).toUpperCase() + path.slice(2)}`;
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      {/* Top Navigation */}
      <nav className="fixed top-0 z-10 w-full bg-white shadow-lg">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden space-x-8 text-gray-700 md:flex">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md ${
                isActive("/") ? "bg-blue-950 text-white" : "hover:text-blue-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-blue-950 text-white"
                  : "hover:text-blue-500"
              }`}
            >
              About
            </Link>
            <Link
              to="/program"
              className={`px-3 py-2 rounded-md ${
                isActive("/program")
                  ? "bg-blue-950 text-white"
                  : "hover:text-blue-500"
              }`}
            >
              Program
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md ${
                isActive("/contact")
                  ? "bg-blue-950 text-white"
                  : "hover:text-blue-500"
              }`}
            >
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
          <div className="bg-white shadow-lg md:hidden">
            <div className="px-4 py-4 space-y-4 text-gray-700">
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
        className="w-full h-[calc(100vw*0.5137)] md:h-[500px] lg:h-[600px] mt-16 bg-center bg-cover"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/*<div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Welcome to Our Website
          </h1>
        </div>*/}
      </div>

      {/* Breadcrumb Bar */}
      <div className="py-2 bg-gray-100">
        <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <p className="font-medium text-gray-700">{getBreadcrumb()}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
