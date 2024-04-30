import React from "react";
import hakkimizda from "../assets/hakkimizda.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-[80%] lg:h-[100vh] flex items-center mx-auto p-2 border-b-2 border-black lg:border-none pb-4 mb-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="left">
          <img
            className="rounded-md md:rounded-full flex-1"
            src={hakkimizda}
            alt=""
          />
        </div>
        <div className="right flex flex-col justify-around w-full md:w-1/2">
          <div className="upper flex flex-col gap-4">
            <h2 className="font-bold text-3xl text-justify lg:text-[50px] leading-[52px]">
              KARAKAS OTO YEDEK PARÇA VE SERVİS
            </h2>
            <h3 className="font-bold text-[20px] text-[#800020]">
              “Oto yedek parça tedariğinde yılların deneyimi…”
            </h3>
            <p>
              Karakas Automotive started production in its factory in Silivri
              district of Istanbul in 2005 with a closed area of 3,000 m2.
              <br />
            </p>
            <p className="hidden md:block">
              Karakas Automotive, which was established with the accumulation of
              45 years of experience in the automotive lighting sector, has
              become one of the leading automotive lighting manufacturers in our
              country and in our region thanks to the innovative strategies and
              customer-oriented sales policy it has followed since its
              establishment.
            </p>
          </div>
          <div className="lower flex md:mt-10">
            <Link to="/about">
              <button className="bg-[#800020] text-white font-semibold p-2">
                Hakkımızda
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
