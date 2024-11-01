import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
          {/* Column 1: Logo and Slogan */}
          <div>
            <Link to="/" className="text-lg font-semibold">
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
            <p className="mt-2">Your awesome slogan goes here.</p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <div className="flex items-center mt-4">
              <span className="mr-2">📞</span>
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center mt-2">
              <span className="mr-2">📧</span>
              <p>contact@yourdomain.com</p>
            </div>
          </div>

          {/* Column 3: Address */}
          <div>
            <h2 className="text-xl font-semibold text-white">Address</h2>
            <p className="mt-4">
              1234 Your Street <br />
              Your City, Country
            </p>
          </div>

          {/* Column 4: Recent Posts */}
          <div>
            <h2 className="text-xl font-semibold text-white">Recent Posts</h2>
            <ul className="mt-4 space-y-2">
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-6 py-4 text-center text-sm text-gray-400 border-gray-700">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
