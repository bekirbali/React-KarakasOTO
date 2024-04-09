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

const BrandCards = () => {
  return (
    <div className="flex items-center my-20">
      <div className="p-2 w-[80%] mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">Karakas Otomotiv Markalar</h3>
          <Link to="/products">Tüm Markaları İncele</Link>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
