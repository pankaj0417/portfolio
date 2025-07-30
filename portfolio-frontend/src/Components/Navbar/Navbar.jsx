import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { HashLink as Link } from "react-router-hash-link";
import { ThemeContext } from "../../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  return (
    <div className="fixed w-full md:shadow bg-blue-50 z-50  dark:bg-gray-950 dark:text-white transition-all duration-500  ">
      <nav className="flex justify-between px-8 py-5 relative rounded-2xl font-semibold">
        <span className="text-2xl tracking-wider sm:text-3xl">Pankaj</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-xl text-gray-500 dark:text-white cursor-pointer">
          <li>
            <Link
              smooth
              to="#home"
              className="hover:text-blue-300 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="#about"
              className="hover:text-blue-300 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="#projects"
              className="hover:text-blue-300 transition-all duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="#skills"
              className="hover:text-blue-300 transition-all duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="#contact"
              className="hover:text-blue-300 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
          <button
            onClick={toggleTheme}
            className="text-2xl transition-transform hover:scale-110"
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>
        </ul>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-xl p-3 cursor-pointer"
        >
          {openMenu ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        {openMenu && (
          <ul className="absolute top-20 left-0 w-full flex flex-col py-4 text-center bg-blue-50 text-xl shadow text-gray-500 space-y-2 md:hidden cursor-pointer  dark:bg-gray-800 dark:text-white transition-all duration-500 ">
            <li>
              <Link
                smooth
                to="#home"
                onClick={closeMenu}
                className="hover:text-blue-300 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#about"
                onClick={closeMenu}
                className="hover:text-blue-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#projects"
                onClick={closeMenu}
                className="hover:text-blue-300 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#skills"
                onClick={closeMenu}
                className="hover:text-blue-300 transition-all duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#contact"
                onClick={closeMenu}
                className="hover:text-blue-300 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <button
              onClick={toggleTheme}
              className="text-2xl transition-transform hover:scale-110 flex justify-center "
            >
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
