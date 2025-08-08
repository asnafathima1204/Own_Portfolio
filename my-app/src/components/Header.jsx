import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // close menu when a link is clicked
  };

  return (
    <div className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
        <header className="flex justify-between items-center px-6 md:px-20 py-4">
            <h1 className="text-3xl font-bold text-blue-400">
                <Link to="/">Asna</Link>
            </h1>

            {/* Hamburger Icon */}
            <span
                className="text-blue-400 md:hidden text-2xl cursor-pointer"
                onClick={toggleMenu}
            >
                <i className="fa-solid fa-bars"></i>
            </span>

            {/* Menu Links */}
            <ul
                className={`text-1xl md:flex md:space-x-7 space-y-4 md:space-y-0 ${
                isOpen ? "block" : "hidden"
                }  absolute top-16 left-0 w-full md:static md:w-auto md:ml-auto bg-gray-300 dark:bg-gray-900 p-4 md:p-0 `}
            >
                <li className="hover:text-blue-400">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="hover:text-blue-400">
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                </li>
                <li className="hover:text-blue-400">
                <Link to="/project" onClick={handleLinkClick}>Project</Link>
                </li>
                <li className="hover:text-blue-400">
                <Link to="/resume" onClick={handleLinkClick}>Resume</Link>
                </li>
                <li className="hover:text-blue-400">
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </li>
            </ul>
            </header>
    </div>
  );
};

export default Header;
