import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Navigation links */}
        <div className={`lg:flex ${isMobileMenuOpen ? 'flex-col transition duration-500 ease-in-out' : 'hidden'}`}>
          <a href="#" className="text-white hover:bg-gray-600 py-2 px-4 rounded">Home</a>
          <a href="#" className="text-white hover:bg-gray-600 py-2 px-4 rounded">About</a>
          <a href="#" className="text-white hover:bg-gray-600 py-2 px-4 rounded">Services</a>
          <a href="#" className="text-white hover:bg-gray-600 py-2 px-4 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
