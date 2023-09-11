"use client";

import Card from "./ui/Card";
import DoulaSupportImg from "/public/doula.jpeg";
import BirthEducationImg from "/public/baby-in-hands.jpg";
import { Balancer } from "react-wrap-balancer";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const InformationSection = () => {
  return (
    <div className="flex flex-col px-2 py-8 text-center text_pearl bg_sky">
      <div className="pb-4">
        <h2 className="pb-4 text-5xl moon_font [word-spacing:-1rem]">
          Your birth. Your way.
        </h2>
        <p className="mb-4 text-3xl">
          Supporting all families and birth preferences in all locations.
        </p>
      </div>
      <div className="relative flex flex-wrap items-stretch justify-center w-full gap-20">
        <Card
          imgSrc={DoulaSupportImg}
          imgAlt="Doula Img"
          content={
            <p>
              <Balancer>
                A birth doula is a professional trained in labor support. Doulas
                provide informational, emotional, and physical support for
                pregnant, birthing, and postpartum families.
              </Balancer>
            </p>
          }
          button={true}
          buttonHref="/doula-support"
          buttonText="Doula Support"
        />
        <Card
          imgSrc={BirthEducationImg}
          imgAlt="Baby in hands"
          content={
            <p className=" w-[18rem]">
              <Balancer>
                Learn about our five-part evidence-based birth education series
                which will prepare you and your partner to cope with labor and
                early postpartum.
              </Balancer>
            </p>
          }
          button={true}
          buttonHref="/birth-education"
          buttonText="Birth Education"
        />
      </div>
    </div>
  );
};

export default InformationSection;
