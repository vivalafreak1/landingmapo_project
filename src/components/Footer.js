import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-gray-300">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-gray-700 pb-8">
          {/* Column 1: Logo and Slogan */}
          <div>
            <Link to="/" className="text-lg font-semibold">
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
            <p className="mt-2">
              Dukung kami dalam membangun komunitas alumni yang kuat dan berdaya
              guna
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-2 mt-4">
              <a
                href="https://www.instagram.com/ilunismavo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full"
              >
                <FaInstagram className="text-blue-950" />
              </a>
              <a
                href="https://www.facebook.com/groups/163470947054510"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full"
              >
                <FaFacebookF className="text-blue-950" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCrc88d_4HKl1WDJE1t1O6lw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full"
              >
                <FaYoutube className="text-blue-950" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full"
              >
                <FaTiktok className="text-blue-950" />
              </a>
            </div>
          </div>
          {/* Column 2: Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <a
              href="https://api.whatsapp.com/send?phone=6282118314756"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mt-4">
                <span className="p-2 bg-white rounded-full mr-2">
                  <FaWhatsapp className="text-blue-950" />
                </span>
                <p>WhatsApp : 082118314756</p>
              </div>
            </a>
            <div className="flex items-center mt-2">
              <span className="p-2 bg-white rounded-full mr-2">
                <FaEnvelope className="text-blue-950" />
              </span>
              <p>Email : info@iluni-sman2cibinong.com</p>
            </div>
          </div>
          {/* Column 3: Address */}
          <div>
            <a
              href="https://maps.app.goo.gl/qMzY4ZTJZbrM5akA6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold text-white">Address</h2>
              <div className="flex items-center mt-4">
                <span className="p-2 bg-white rounded-full mr-2">
                  <FaMapMarkerAlt className="text-blue-950" />
                </span>
                <p>
                  Jl. Karadenan No. 05 Cibinong, Kab. Bogor 16913 - Jawa Barat
                </p>
              </div>
            </a>
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
        <div className="mt-4 py-3 text-center text-sm border-t text-gray-400 border-white">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
