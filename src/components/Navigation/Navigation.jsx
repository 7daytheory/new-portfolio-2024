import React, { useState } from "react";
import logo from "../../assets/logo-white.png";
import { Fade } from "react-awesome-reveal";
import navigation from "../../content.js"; // Adjust path as needed

const Navigation = () => {
  const [mobileMenu, toggleMobileMenu] = useState(false);

  const handleToggle = () => {
    toggleMobileMenu(!mobileMenu);
  };

  const navMenu = (
    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-gray-800 md:bg-transparent border-gray-700">
      {navigation.navLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 text-white md:hover:text-red-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="border-gray-200 bg-gray-800 border-gray-700">
      <div className="container mx-auto p-4" style={{ maxWidth: "75%" }}>
        <div className="flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Fade direction="left" duration={1500} triggerOnce>
              <img src={logo} className="h-10" alt="MatthewJLowe Logo" />
            </Fade>
          </a>
          <button
            onClick={handleToggle}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">{navigation.navMenu}</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {mobileMenu && navMenu}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
