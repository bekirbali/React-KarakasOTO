import React from "react";
import { Link } from "react-router-dom";
import alfaromeo from "../assets/brands/alfaromeo.webp";
import audi from "../assets/brands/audi.webp";
import bmw from "../assets/brands/bmw.webp";
import chevrolet from "../assets/brands/chevrolet.webp";
import ford from "../assets/brands/ford.webp";
import honda from "../assets/brands/honda.webp";
import merco from "../assets/brands/merco.webp";
import nissan from "../assets/brands/nissan.webp";
import mainSlider1 from "../assets/mainSlider1.jpg";
import mainSlider2 from "../assets/mainSlider2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const BrandCards = () => {
  return (
    <div className="flex items-center my-20 h-[333px] bg-white border-b-2 border-t-2 border-slate-800">
      <div className="p-2 w-[80%] mx-auto flex flex-col">
        <Swiper
          // navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
          }}
          className="brandsSwiper h-[100vh]"
        >
          <SwiperSlide>
            <img className="" src={alfaromeo} alt="arkadan araba" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={audi} alt="yan araba" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={bmw} alt="mazda" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={chevrolet} alt="mazda" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={ford} alt="mazda" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={honda} alt="mazda" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={merco} alt="mazda" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={nissan} alt="mazda" />
          </SwiperSlide>
        </Swiper>
        {/* <div>
          <div className="product-cards flex lg:gap-4 flex-wrap justify-between">
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={alfaromeo} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={audi} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={bmw} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={chevrolet} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={ford} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={honda} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={merco} alt="" className="w-full h-full" />
            </div>
            <div className="card w-[50%] md:w-[50%] lg:w-[24%] h-[170px] lg:h-[300px] relative border-2 text-center">
              <img src={nissan} alt="" className="w-full h-full" />
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default BrandCards;
