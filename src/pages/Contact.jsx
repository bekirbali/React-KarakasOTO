import React from "react";
import NavbarMenu from "../components/NavbarMenu";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#757d75] contact-navbar">
        <NavbarMenu />
      </div>

      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            İletişim
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Sizlere daha iyi hizmet verebilmek için her zaman buradayız. Bize
            ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.804141421173!2d28.994525776622158!3d41.11696837133545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab43504856475%3A0xbbce63aceb64359!2zQXlhemHEn2EsIEt1cnR5b2x1IFNrLiBObzoxMiwgMzQzOTYgU2FyxLF5ZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1713195305732!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              KARAKAŞ TOPTAN OTO YEDEK PARÇA
            </h2>
            <div className="space-y-4 contact-info">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gray-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-600">
                  Ayazağa Mah. Kurt Yolu Sokak No:12A Sarıyer / İstanbul
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:karakasoto@karakasoto.com"
                  className="text-blue-600"
                >
                  karakasoto@karakasoto.com
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="flex flex-col">
                  <a
                    href="tel:+902127152809"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    +90 212 715 28 09
                  </a>
                  <a
                    href="tel:+905465391679"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    +90 546 539 1679
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Çalışma Saatleri
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Pazartesi - Cuma</span>
                <span className="text-gray-600">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Cumartesi</span>
                <span className="text-gray-600">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Pazar</span>
                <span className="text-red-500">Kapalı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
