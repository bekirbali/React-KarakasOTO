import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import aydinlatma from "../assets/products/sis.jpg";
import filtre from "../assets/products/filtre.jpg";
import fren from "../assets/products/fren.jpg";
import kaporta from "../assets/products/kaporta.jpg";
import mekanik from "../assets/products/mekanik.jpg";
import motor from "../assets/products/motor.jpg";
import sogutma from "../assets/products/sogutma.jpg";
import suspansiyon from "../assets/products/suspansiyon.jpg";

const Products = () => {
  return (
    <div>
      <div className="bg-[#757d75]">
        <NavbarMenu />
      </div>
      <div className="flex lg:items-center mt-10">
        <div className=" p-2 w-[80%] mx-auto flex flex-col">
          <div>
            <h3 className="font-bold text-md lg:text-2xl">Ürün Gruplarımız</h3>
            <div className="product-cards flex justify-between flex-wrap">
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={aydinlatma} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md text-white">
                  AYDINLATMA
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={filtre} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md text-white">
                  FİLTRE
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={fren} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md text-white">
                  FREN
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={kaporta} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md">
                  KAPORTA
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={mekanik} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md text-white">
                  MEKANİK
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={motor} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md">
                  MOTOR
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={sogutma} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md text-white">
                  SOĞUTMA
                </p>
              </div>
              <div className="card w-full sm:w-[50%] lg:w-[25%] h-[200px] lg:h-[300px] relative border-2 text-center">
                <img src={suspansiyon} className="w-full h-full" alt="" />
                <p className="absolute bottom-5 text-md lg:text-2xl font-bold text-center w-full backdrop-blur-md text-white">
                  SÜSPANSİYON
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
