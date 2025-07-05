import React, { useState, useEffect } from "react";
import DropdownMenu from "./Dropdown";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiArrowUpRight,
  FiX,
  FiUserPlus,
} from "react-icons/fi";
import {
  HiOutlineLightBulb,
  HiOutlineBookOpen,
  HiOutlineNewspaper,
  HiOutlineMenuAlt3,
} from "react-icons/hi";

const navItems = [
  {
    label: "Courses",
    key: "courses",
    icon: <HiOutlineBookOpen className="mr-1" />,
  },
  {
    label: "Why ADRS Spark",
    key: "why",
    icon: <HiOutlineLightBulb className="mr-1" />,
  },
  {
    label: "Blog",
    key: "blog",
    icon: <HiOutlineNewspaper className="mr-1" />,
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dropdowns = document.querySelectorAll(".dropdown-toggle");
      const isClickInsideDropdown = Array.from(dropdowns).some((el) =>
        el.contains(e.target)
      );
      if (!isClickInsideDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 z-100 bg-white shadow-sm px-4 sm:px-8 py-1 flex items-center justify-between border-b border-gray-100">

      {/* Logo */}
      <Link to="/spark" className="inline-block">
        <img
          src="/images/spark-images/logo5.png"
          alt="ADRS Spark Logo"
          className="h-auto w-24 object-contain transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10 nav-interactive-area">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.key} className="relative">
              {["why", "blog"].includes(item.key) ? (
                <Link
                  to={`/spark/${item.key === "why" ? "why-adrs-spark" : "blog"}`}
                  className="flex items-center text-md font-medium cursor-pointer px-2 py-1 rounded-md transition-all duration-200 text-gray-700 hover:text-green-600 hover:bg-green-50"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown((prev) =>
                        prev === item.key ? null : item.key
                      );
                    }}
                    className={`flex items-center text-md font-medium cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                      activeDropdown === item.key
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                    <FiChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.key && (
                    <div className="absolute left-0 top-full z-50">
                      <DropdownMenu type={item.key} />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Register Button */}
      <div className="hidden lg:flex gap-4 items-center">
        <Link to="/spark/registration">
          <button className="flex items-center bg-indigo-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <FiUserPlus className="mr-2" />
            Register
            <FiArrowUpRight className="ml-2" />
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button
          className="relative group focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
            {!mobileMenuOpen ? (
              <HiOutlineMenuAlt3
                className="text-gray-700 group-hover:text-green-600 transition-colors duration-200"
                size={28}
              />
            ) : (
              <FiX
                className="text-gray-700 group-hover:text-green-600 transition-colors duration-200"
                size={28}
              />
            )}
            <div className="absolute w-full h-full rounded-full bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white mt-16 overflow-y-auto animate-slideIn">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                {["why", "blog"].includes(item.key) ? (
                  <Link
                    to={`/spark/${item.key === "why" ? "why-adrs-spark" : "blog"}`}
                    className="flex items-center w-full text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {React.cloneElement(item.icon, { className: "mr-3 text-lg" })}
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`dropdown-toggle flex items-center justify-between w-full text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeDropdown === item.key
                          ? "text-green-600 bg-green-50"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown((prev) =>
                          prev === item.key ? null : item.key
                        );
                      }}
                    >
                      <div className="flex items-center">
                        {React.cloneElement(item.icon, { className: "mr-3 text-lg" })}
                        {item.label}
                      </div>
                      <FiChevronDown
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.key && (
                      <div className="pl-14 pr-4 py-2 bg-gray-50 rounded-lg">
                        <DropdownMenu type={item.key} mobile />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-gray-100 space-y-3 mt-2">
            <Link to="/spark/registration" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full flex items-center justify-center bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <FiUserPlus className="mr-2" />
                Register
                <FiArrowUpRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
