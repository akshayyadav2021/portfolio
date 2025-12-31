import { HashLink } from "react-router-hash-link";
import { useNavigate, type To } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // For hamburger and close icons

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path: To) => {
    navigate(path);
    setIsOpen(false); // Close menu on navigation
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Pokecut_1765815036858.jpg"
            alt="Logo"
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <span className="ml-4 text-2xl font-bold text-gray-900">
            Akshay Yadav
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <HashLink
            smooth
            to="/"
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#work"
            className="hover:text-blue-500 transition-colors"
          >
            Work
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="hover:text-blue-500 transition-colors"
          >
            About
          </HashLink>
          <button
            onClick={() => handleNavigate("/resume")}
            className="hover:text-blue-500 transition-colors"
          >
            Resume
          </button>
          <HashLink
            smooth
            to="/#contact"
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </HashLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <HashLink
              smooth
              to="/#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-colors"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#work"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-colors"
            >
              Work
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-colors"
            >
              About
            </HashLink>
            <button
              onClick={() => handleNavigate("/resume")}
              className="hover:text-blue-500 transition-colors text-left"
            >
              Resume
            </button>
            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </HashLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
