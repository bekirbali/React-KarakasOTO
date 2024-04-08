import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        fluid
        rounded
        className="!bg-transparent test w-full backdrop-blur-md"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#daff35]">
            Karakas OTO
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            style={{ color: scrolled ? "white" : "" }}
            className="text-black text-[17px]"
            href="/"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "white" : "" }}
            className="text-black text-[17px]"
            href="about"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "white" : "" }}
            className="text-black text-[17px]"
            href="products"
          >
            Products
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "white" : "" }}
            className="text-black text-[17px]"
            href="brands"
          >
            Brands
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "white" : "" }}
            className="text-black text-[17px]"
            href="contact"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div ref={scrollRef}></div>
    </>
  );
}