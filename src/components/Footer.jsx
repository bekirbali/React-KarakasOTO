import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-slate-900 text-white flex justify-center py-4 mt-20">
      <div className="flex flex-col  lg:flex-row  lg:justify-center py-2 px-10 gap-6 w-[80%] ">
        <div className="about-footer flex-1">
          <div>
            <h2 className="font-semibold text-xl border-b-2 py-2 mb-2 text-white">
              KARAKAŞ TOPTAN OTO YEDEK PARÇA
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              autem modi, voluptatibus non consequatur deleniti provident porro
              vitae doloremque enim dolorem eos illo adipisci explicabo
              laboriosam
            </p>
          </div>
        </div>
        <div className="links flex flex-1 lg:justify-center">
          <div>
            <h2 className="font-semibold text-xl border-b-2 py-2 mb-2 text-white">
              Linkler
            </h2>
            <ul>
              <li>
                <Link to="/">Karakas Otomotiv</Link>
              </li>
              <li>
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/brands">Markalarımız</Link>
              </li>
              <li>
                <Link to="products">Ürün Gruplarımız</Link>
              </li>
              <li>
                <Link to="contact">İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-footer flex flex-1 lg:justify-center">
          <div className="">
            <h2 className="font-semibold text-xl border-b-2 py-2 mb-2 text-white">
              İletişim Bilgilerimiz
            </h2>
            <p>Adres: İstanbul / Türkiye</p>
            <p>Telefon: +90 555 555 55 55</p>
            <p>E-posta: karakas@karakasoto.com.tr </p>
          </div>
        </div>
        <div className="hours-footer flex flex-1 lg:justify-center">
          <div>
            <h2 className="font-semibold text-xl border-b-2 py-2 mb-2 text-white">
              Çalışma Saatlerimiz
            </h2>
            <p>Hafta içi: 09:00-18:30</p>
            <p>Cumartesi: 09:00-15:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
