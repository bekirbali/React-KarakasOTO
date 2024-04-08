import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import mazda from "../assets/mazda.jpg";

const About = () => {
  return (
    <div>
      <NavbarMenu />
      <div>
        <img src={mazda} alt="" className="h-[400px] w-full" />
      </div>
      <div className="p-4">
        <h1 className="font-bold text-3xl mb-2">About Us</h1>
        <p>
          In 2005, Karakas Otomotiv started production in its factory in
          Silivri, Istanbul with 3.000 m2 closed area. Established with the
          accumulation of 45 years of experience in automotive lighting sector,
          Karakas Otomotiv has become one of the leading automotive lighting
          manufacturers in our country and region thanks to its innovative
          strategies and customer-oriented sales policy. Over the years, the
          increase in the variety of products and, consequently, the increase in
          the production capacity and the number of employees has revealed the
          need for the growth of the current production facility. Our additional
          area of ​​10.000 m2 has been used. In the years of establishment,
          Karakas Otomotiv has focused mainly on the production of Passenger &
          Light Commercial Vehicle lighting products and in the last years, it
          added products belonging to Heavy Commercial Vehicles, Trailer Group,
          Tractor and Heavy Machinery and Bus Group to its product group. With
          over 700 product types including Stop Lamps, Signal Lamps, Fog and
          Spot Lamps, Work Lamps, Signal Lamps and Accessory lamps, our annual
          production capacity is 3 million pieces. Our company, which acts with
          the strategy of tedir Continuous Innovation, Always Innovation ç,
          continuously increases its product group and variety, and while doing
          so, we are careful to meet the expectations of our customers in
          quality and price policies. Since its establishment, Karakas Otomotiv
          has gained the appreciation and loyalty of its customers in the
          domestic market as a result of its High Quality, Stable Price and
          Customer Oriented policies and has a sales network covering all of our
          country. With this experience obtained in the domestic market, foreign
          marketing activities have started and as a result, Karakastech brand
          products have been sold to more than 50 countries in 5 continents. Its
          competitive insight, innovative and differentiating approaches in
          production and marketing, high quality applications and the trust of
          its customers will be the most important supporters of Karakas
          Automotive in delivering its mission to become one of the world’s
          leading automotive lighting manufacturers.
        </p>
      </div>
    </div>
  );
};

export default About;
