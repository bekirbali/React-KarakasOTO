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

import mazda3 from "../assets/yandanMazda.jpg";
import mainSlider1 from "../assets/mainSlider1.jpg";
import mainSlider2 from "../assets/mainSlider2.jpg";
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
        className={`home-navbar fixed top-0 w-full z-[100] ${
          scrolled ? "bg-[#757d75]" : "bg-transparent"
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
            <img className="w-full" src={mainSlider1} alt="arkadan araba" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={mainSlider2} alt="yan araba" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={mazda3} alt="mazda" />
          </SwiperSlide>
        </Swiper>
        <Hero />
        {/* <ProductCards /> */}
        <Brands />
      </div>
    </>
  );
}
