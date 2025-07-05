import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#000] shadow-lg sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ml-4 h-20">
          {/* Logo with text */}
          <Link to="/" id="logo" className="flex flex-col items-center ml-2 ">
            <img
              src="./images/logo.png"
              alt="ADRS Logo"
              className="h-10 w-30 drop-shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <span
              id="full_form"
              className="text-white text-sm md:text-lg font-semibold mt-1 tracking-wide text-center md:text-left break-words max-w-[180px] md:max-w-none"
            >
              Advanced Digital & Reliable Solutions
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/services" className="text-white hover:text-yellow-300 transition duration-200">
              Services
            </Link>
            <Link to="/product" className="text-white hover:text-yellow-300 transition duration-200">
              Products
            </Link>
            <Link to="/workshop" className="text-white hover:text-yellow-300 transition duration-200">
              Workshop
            </Link>
            <Link to="/gallery" className="text-white hover:text-yellow-300 transition duration-200">
              Gallery
            </Link>
             <Link to="/career" className="text-white hover:text-yellow-300 transition duration-200">
              Career
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-yellow-300 transition duration-200 flex items-center"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                About Us
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ${isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link
                  to="/our-mission"
                  className="block px-4 py-2 text-gray-800 hover:bg-[#2c3e50] hover:text-yellow-300 transition duration-200"
                >
                  Our Mission
                </Link>
                <Link
                  to="/our-team"
                  className="block px-4 py-2 text-gray-800 hover:bg-[#2c3e50] hover:text-yellow-300 transition duration-200"
                >
                  Our Team
                </Link>
              </div>
            </div>

            <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-200">
              Contact Us
            </Link>
            <Link
              to="/spark"
              id="btn"
              className="text-white hover:text-yellow-300 transition duration-200"
            >
              ADRS SPARK
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-300 transition"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 flex flex-col space-y-3 bg-[#2c3e50] px-4 rounded-b-lg shadow-md">
            <Link
              to="/services"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/product"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/workshop"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Workshop
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/career"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>

            {/* Mobile About Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-yellow-300 px-4 py-2 w-full text-left flex justify-between items-center"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                About Us
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`pl-6 overflow-hidden transition-all duration-300 ${isAboutDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                <Link
                  to="/our-mission"
                  className="block text-white hover:text-yellow-300 px-4 py-2 bg-[#34495e] rounded mt-1"
                  onClick={() => setIsOpen(false)}
                >
                  Our Mission
                </Link>
                <Link
                  to="/our-team"
                  className="block text-white hover:text-yellow-300 px-4 py-2 bg-[#34495e] rounded mt-1"
                  onClick={() => setIsOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/spark"
              className="text-white hover:text-yellow-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              ADRS SPARK
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
