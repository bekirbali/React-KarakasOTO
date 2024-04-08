import React from "react";
import hakkimizda from "../assets/hakkimizda.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-[80%] h-[100vh] flex items-center mx-auto p-2">
      <div className="flex justify-between items-center gap-4">
        <div className="left rounded-lg">
          <img className="rounded-full flex-1" src={hakkimizda} alt="" />
        </div>
        <div className="right flex flex-col justify-around w-1/2">
          <div className="upper">
            <h2 className="font-bold text-[50px]">
              KARAKAS OTO YEDEK PARÇA VE SERVİS
            </h2>
            <h3 className="font-bold text-[20px] text-red-500">
              “Oto yedek parça tedariğinde yılların deneyimi…”
            </h3>
            <p>
              Karakas Automotive started production in its factory in Silivri
              district of Istanbul in 2005 with a closed area of 3,000 m2.
              <br />
              <br />
              Karakas Automotive, which was established with the accumulation of
              45 years of experience in the automotive lighting sector, has
              become one of the leading automotive lighting manufacturers in our
              country and in our region thanks to the innovative strategies and
              customer-oriented sales policy it has followed since its
              establishment.
            </p>
          </div>
          <div className="lower flex justify-between mt-10">
            <Link to="/about">
              <button className="bg-slate-900 text-white font-semibold p-2">
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
