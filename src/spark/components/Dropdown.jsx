/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { coursesDropdown } from "../data/CoursesDropdown";
import { partnersDropdown } from "../data/OtherDropdowns";
import { Link } from "react-router-dom";

const getWidthClass = (type) => {
  switch (type) {
    case "courses":
      return "w-[90vw] max-w-5xl";
    case "why":
    case "partners":
      return "w-[85vw] max-w-md";
    default:
      return "w-[90vw]";
  }
};

const DropdownMenu = ({ type }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const event = new CustomEvent("closeDropdown");
        window.dispatchEvent(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let data;
  switch (type) {
    case "courses":
      data = coursesDropdown;
      break;
    case "partners":
      data = partnersDropdown;
      break;
    default:
      data = {};
  }

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-12 left-0 bg-white shadow-xl p-6 rounded-lg 
        ${getWidthClass(type)} z-50 border border-gray-100 animate-fadeIn`}
    >
      {/* Scrollable Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto pr-2">
        {Object.entries(data).map(([section, items]) => (
          <div key={section} className="group">
            <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-200">
              {section}
            </h3>
            <div className="space-y-3">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/spark/courses/${item.id}`}
                  className="block p-2 -m-2 rounded-lg hover:bg-green-50 transition-colors duration-200 group/item"
                >
                  <div className="flex justify-between items-start flex-wrap">
                    <div>
                      <p className="font-medium text-gray-800 group-hover/item:text-green-600 transition-colors duration-200">
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.name}
                      </p>
                      {item.description && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer link for courses */}
      {type === "courses" && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <Link
            to={"/spark/allcourses"}
            className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
          >
            View all courses
            <FiExternalLink className="ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
