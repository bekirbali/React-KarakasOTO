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
          <span
            className={`self-center whitespace-nowrap text-xl font-semibold text-[#F7CA18]`}
          >
            Karakas OTO
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] flex items-center h-full"
            href="/"
          >
            Ana Sayfa
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] flex items-center h-full"
            href="about"
          >
            Hakkımızda
          </Navbar.Link>
          {/* <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] flex items-center h-full"
            href="products"
          >
            Ürün Grubumuz
          </Navbar.Link> */}
          {/* <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] flex items-center h-full"
            href="brands"
          >
            Markalarımız
          </Navbar.Link> */}
          <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] flex items-center h-full"
            href="contact"
          >
            İletişim
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] flex items-center h-full"
            href="contact"
          >
            Plasiyer Girişi
          </Navbar.Link>
          <Navbar.Link
            style={{ color: scrolled ? "#F7CA18" : "" }}
            className="text-[#F7CA18] text-[17px] !border-2 border-[#F7CA18] !rounded-md !px-3 !py-1 hover:!bg-[#F7CA18] hover:!text-black transition-colors"
            href="https://www3.eryaz.net/publish/b2b/karakas/b2b.html"
            target="_blank"
          >
            B2B İndir
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div ref={scrollRef}></div>
    </>
  );
}
