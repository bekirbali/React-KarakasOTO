import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import hakkimizda from "../assets/hakkimizda.webp";
import carVector from "../assets/carVector.jpg";
import kalite from "../assets/kalite.webp";
import mazda from "../assets/yandanMazda.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="bg-[#757d75] about-navbar">
        <NavbarMenu />
      </div>
      <div className="header-content relative h-[400px] ">
        <img src={mazda} className="w-full h-full absolute -z-10 " alt="" />
        <h1 className="text-[60px] font-semibold text-center text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:cursor-default">
          HAKKIMIZDA
        </h1>
        <div className="absolute bg-[#00000088] w-full h-full backdrop-blur-md"></div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row w-[80%] items-center mx-auto gap-2 my-10 overflow-x-hidden">
          <div className="w-[500px] max-w-[600px] flex-1 max-h-[500px] text-center">
            <img
              src={carVector}
              alt=""
              className="max-h-[500px] w-full mx-auto"
            />
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col gap-4 w-[90%] lg:w-[80%] mx-auto">
              <h2 className="text-2xl font-semibold text-center">
                “Oto yedek parça tedariğinde yılların deneyimi…”
              </h2>
              <p>
                2015 yılında yenilikçi ilkeleriyle kurulan Karakas Oto Yedek
                Parça şirketi, başarılı ve yedek parça konusunda tecrübeli
                çalışanlarıyla ticari ve binek otomobil yedek parça alanındaki
                sayılı kuruluşlar arasında yer almakta ve hizmet sektöründe
                bölgesel lider olma vizyonuyla ilerlemektedir.
                <br />
                <br />
                Hizmet verdiği oto yedek parça alanında, sorumluluklarının
                bilincinde olan Karakas Oto Yedek Parça, kendi sektöründe
                bulunan kuruluşlara örnek olmaya çalışan bir vizyonla hareket
                etmektedir. Hizmetlerini her zaman için müşteri memnuniyeti ve
                güven ilkelerini temel alarak sunmaktadır.
                <br />
                <br />
                Karakas Oto Yedek Parça’nın ulaştığı başarının arkasında,
                müşteri odaklı ve verimliliği merkez alan bir yönetim yaklaşımı
                vardır. Bu yaklaşım, sadece maddi kazanımlarla değil, bütün
                toplumun yararlandığı ve yararlanacağı kurumsal şirket
                bilinciyle iç içe gelişmektedir.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row w-[80%] items-center mx-auto gap-2 my-10">
          <div className="flex-1 ">
            <div className="flex flex-col gap-4 w-[90%] lg:w-[80%] mx-auto">
              <h2 className="text-2xl font-semibold">
                KALİTE YÖNETİM POLİTİKAMIZ
              </h2>
              <p>
                Karakas Otomotiv’de tedarikçisi olduğumuz müşterilerimize
                çalışma alanımızın her aşamasında yüksek kalite ve standartlarda
                hizmet verme prensibiyle ilkelerimizi oluşturmaktayız. Alanında
                uzman çalışanlarımız, uluslararası standartlara uygunluk,
                müşteri deneyimimiz, büyüme kapasitemiz ve çalışma
                performansımızla birlikte kalite standartlarımız düzenli
                kontroller ve titiz çalışma ilkeleriyle garanti altındadır.
                <br />
                <br />
                Yasal mevzuatlar içerisinde oluşturduğumuz kalite yönetimindeki
                hedeflerimize, sistemimizin her aşamasını iyileştirerek
                ulaşacağımızı taahhüt ederiz.
              </p>
            </div>
          </div>
          <div className="w-full flex-1 max-h-[500px] text-center">
            <img src={kalite} alt="" className="max-h-[500px] mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
