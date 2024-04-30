import React from "react";
import NavbarMenu from "../components/NavbarMenu";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#757d75]">
        <NavbarMenu />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.804141421173!2d28.994525776622158!3d41.11696837133545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab43504856475%3A0xbbce63aceb64359!2zQXlhemHEn2EsIEt1cnR5b2x1IFNrLiBObzoxMiwgMzQzOTYgU2FyxLF5ZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1713195305732!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-page flex flex-col md:flex-row justify-around gap-10 mt-10 px-5">
        <div className="contact flex flex-col flex-1 gap-4">
          <h1 className="font-semibold text-[24px]">
            KARAKAS OTOMOTİV SAN. ve TİC. A.Ş.
          </h1>
          <div className="w-[80%]">
            <p className="">
              KARAKAŞ TOPTAN OTO YEDEK PARÇA TURZ.İNŞ.SAN.TİC.LTD.ŞTİ. Ayazağa
              Mah. Kurt Yolu Sokak No:12A Sarıyer / İstanbul
            </p>
          </div>
          <p>
            <span>Mail:</span>{" "}
            <a href="mail:karakasoto@karakasoto.com" className="break-all">
              karakasoto@karakasoto.com
            </a>
          </p>
          <p>
            <span>Sabit Hat:</span>{" "}
            <a href="tel:+902127152809"> +90 212 715 28 09</a>
          </p>
          <p>
            <span>Cep Telefonu:</span>
            <a href="tel:+905465391679"> +90 546 539 1679</a>
          </p>
        </div>
        <div className="hours flex-1 flex flex-col gap-4">
          <h1 className="font-bold text-3xl">Çalışma Saatleri</h1>
          <p>
            <span>Pazartesi - Cuma:</span> 09:00 - 18:00
          </p>
          <p>
            <span>Cumartesi:</span> 09:00 - 14:00
          </p>
          <p>
            <span>Pazar:</span> Kapalı
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
