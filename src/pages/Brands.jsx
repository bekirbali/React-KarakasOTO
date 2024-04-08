import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import alfaromeo from "../assets/brands/alfaromeo.webp";
import audi from "../assets/brands/audi.webp";
import bmw from "../assets/brands/bmw.webp";
import chevrolet from "../assets/brands/chevrolet.webp";
import ford from "../assets/brands/ford.webp";
import honda from "../assets/brands/honda.webp";
import merco from "../assets/brands/merco.webp";
import nissan from "../assets/brands/nissan.webp";

const Brands = () => {
  return (
    <div>
      <NavbarMenu />
      <div className=" flex items-center">
        <div className=" p-2 w-[80%] mx-auto flex flex-col items-center">
          <div className="product-cards flex justify-center gap-2 flex-wrap">
            <div className="card relative border-2 text-center">
              <img
                src={alfaromeo}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card relative border-2 text-center">
              <img src={audi} loading="lazy" className="w-full h-full" alt="" />
            </div>
            <div className="card relative border-2 text-center">
              <img src={bmw} loading="lazy" className="w-full h-full" alt="" />
            </div>
            <div className="card relative border-2 text-center">
              <img
                src={chevrolet}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card relative border-2 text-center">
              <img src={ford} loading="lazy" className="w-full h-full" alt="" />
            </div>
            <div className="card relative border-2 text-center">
              <img
                src={honda}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card relative border-2 text-center">
              <img
                src={merco}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="card relative border-2 text-center">
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

export default Brands;
