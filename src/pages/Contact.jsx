import React from "react";
import NavbarMenu from "../components/NavbarMenu";

const Contact = () => {
  return (
    <div>
      <NavbarMenu />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12043.384487507119!2d28.9450106!3d41.0067411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2297e328b333c3d!2sKaraka%C5%9Flar%20Otomotiv!5e0!3m2!1str!2suk!4v1671223632271!5m2!1str!2suk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
        width={"100%"}
        height={"450"}
        style={{ border: 0 }}
      ></iframe>
      <div className="flex justify-around gap-10 mt-10">
        <div className="contact flex flex-col">
          <h1 className="font-bold text-3xl">
            KARAKAS OTOMOTİV SAN. ve TİC. A.Ş.
          </h1>
          <h2 className="font-semibold text-xl">İletişim</h2>
          <p>
            <span>Mail:</span>{" "}
            <a href="mail:karakasoto@karakasoto.com">
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
        <div className="hours">
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