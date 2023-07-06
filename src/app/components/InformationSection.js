"use client";

import Link from "next/link";
import Card from "./ui/Card";

const InformationSection = () => {
  return (
    <div className="flex flex-col px-2 py-8 mb-8 text-center text_pearl bg_sky">
      <div className="pb-4">
        <h2 style={{ wordSpacing: "-.9rem" }} className="pb-4 text-5xl">
          Your birth. Your way.
        </h2>
        <p style={{ wordSpacing: "-.4rem" }} className="mb-4 text-3xl">
          Supporting all families and birth preferences in all locations.
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-center w-full gap-8">
        <Card
          imgSrc="/doula.jpeg"
          imgAlt="Doula Img"
          content="A birth doula is a professional trained in labor support.
                  Doulas provide informational, emotional, and physical support
                  for pregnant, birthing, and postpartum families."
          button={true}
          buttonHref="/doula-support"
          buttonText="Doula Support"
        />
        <Card
          imgSrc="/baby-in-hands.jpg"
          imgAlt="Baby in hands"
          content={
            <p>
              Read &nbsp;
              <a
                href="https://evidencebasedbirth.com/the-evidence-for-doulas/"
                className="underline opacity-70 text_finch hover:text-blue-300 active:text-black/50"
              >
                this signature article
              </a>
              &nbsp; from Evidence Based Birth to learn more about what a doula
              does and why they are so valuable.
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
