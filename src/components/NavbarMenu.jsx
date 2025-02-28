import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/carservice.jpg";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? "py-2 bg-primary-500 shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Karakas Oto Logo" className="h-10 w-auto" />
            <span
              className={`text-2xl font-semibold ${
                scrolled ? "text-white" : "text-[#F7CA18]"
              }`}
            >
              Karakas OTO
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col space-y-1.5 p-2"
            >
              <span
                className={`block w-6 h-0.5 ${
                  scrolled ? "bg-white" : "bg-gray-800"
                } transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 ${
                  scrolled ? "bg-white" : "bg-gray-800"
                } transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 ${
                  scrolled ? "bg-white" : "bg-gray-800"
                } transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300`}
            >
              Hakkımızda
            </Link>
            <Link
              to="/contact"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300`}
            >
              İletişim
            </Link>
            <a
              href="https://b2b.karakasoto.com/Default.aspx"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300`}
            >
              Plasiyer Girişi
            </a>
            <a
              href="https://www3.eryaz.net/publish/b2b/karakas/b2b.html"
              className={`px-4 py-2 ${
                scrolled
                  ? "border-2 border-secondary-500 text-white hover:bg-white hover:text-[#F7CA18]"
                  : "border-2 border-[#F7CA18] text-gray-800 hover:bg-[#F7CA18] hover:text-white"
              } rounded-md transition-colors duration-300`}
              target="_blank"
              rel="noopener noreferrer"
            >
              B2B İndir
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen
              ? "max-h-96 opacity-100 visible mt-4"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div
            className={`flex flex-col space-y-4 pb-4 ${
              scrolled ? "bg-[#F7CA18]" : "bg-white/90"
            }`}
          >
            <Link
              to="/"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300 text-center`}
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300 text-center`}
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              to="/contact"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300 text-center`}
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <a
              href="https://b2b.karakasoto.com/Default.aspx"
              className={`${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-800 hover:text-[#F7CA18]"
              } transition-colors duration-300 text-center`}
              onClick={() => setIsOpen(false)}
            >
              Plasiyer Girişi
            </a>
            <a
              href="https://www3.eryaz.net/publish/b2b/karakas/b2b.html"
              className={`mx-auto px-4 py-2 ${
                scrolled
                  ? "border-2 border-white text-white hover:bg-white hover:text-[#F7CA18]"
                  : "border-2 border-[#F7CA18] text-gray-800 hover:bg-[#F7CA18] hover:text-white"
              } rounded-md transition-colors duration-300`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              B2B İndir
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
