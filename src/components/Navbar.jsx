import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import ProfilePic from "../images/img.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);
  const closeMenuOnClick = () => setIsMobile(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-semibold text-gray-300 tracking-wide hover:text-cyan-400 transition-colors"
        >
          Tarun Pratap Singh
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg transition-all duration-300 md:hidden">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 mb-4"
          />

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenuOnClick}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <div className="flex space-x-6 pt-4 text-2xl">
            <a
              href="https://github.com/Tarun0009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tarun-pratap-singh-941b91220"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
