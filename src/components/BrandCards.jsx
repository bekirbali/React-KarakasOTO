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
    <div className="h-[90vh] flex items-center">
      <div className=" p-2 w-[80%] mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">Karakas Otomotiv Markalar</h3>
          <Link to="/products">Tüm Markaları İncele</Link>
        </div>
        <div>
          <div className="product-cards flex justify-between gap-2 flex-wrap">
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img
                src={alfaromeo}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img src={audi} loading="lazy" className="w-full h-full" alt="" />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img src={bmw} loading="lazy" className="w-full h-full" alt="" />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img
                src={chevrolet}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img src={ford} loading="lazy" className="w-full h-full" alt="" />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img
                src={honda}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img
                src={merco}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card w-[24%] h-[300px] relative border-2 text-center">
              <img
                src={nissan}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
