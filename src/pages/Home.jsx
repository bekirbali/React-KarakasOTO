import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import mazda1 from "../assets/mazda.jpg";
import mazda2 from "../assets/maviMazda.jpg";
import mazda3 from "../assets/yandanMazda.jpg";
import ProductCards from "../components/ProductCards";
import NavbarMenu from "../components/NavbarMenu";
import Hero from "../components/Hero";
import Brands from "../components/BrandCards";

export default function Home() {
  const scrollRef = useRef(null);
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-[100] ${
          scrolled ? "bg-black" : "bg-transparent"
        } transition-all duration-300 ease-in-out`}
      >
        <NavbarMenu />
      </div>
      <div ref={scrollRef}></div>
      <div className="">
        <Swiper
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper h-[100vh]"
        >
          <SwiperSlide>
            <img src={mazda3} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mazda1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mazda2} alt="" />
          </SwiperSlide>
        </Swiper>
        <Hero />
        <ProductCards />
        {/* <Brands /> */}
      </div>
    </>
  );
}
