"use client";

import { useState } from "react";
import HeroSection from "@/app/components/HeroSection";

const Contact = () => {
  const [mapClicked, setMapClicked] = useState(false);
  return (
    <main>
      <HeroSection
        imgSrc="/baby-head.jpeg"
        alt="Baby Head"
        heroTitle="Contact"
        font="text-9xl"
      />
      <div className="pt-8 text-center">
        <h2 className="text-5xl ">{`Let's Connect`}</h2>
        <p className="mt-4 text-xl">
          Proudly serving the Dane County, Wisconsin area (in-person) and
          virtually nation wide.
        </p>
        <div
          onClick={() => setMapClicked(!mapClicked)}
          className={`flex items-center justify-center my-8 h-[50vh]`}
        >
          <iframe
            className={`${
              mapClicked ? "pointer-events-auto" : "pointer-events-none"
            } w-[90%] h-[90%]`}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d267380.8145943509!2d-89.42863301557786!3d43.09747678899573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1688603927513!5m2!1sen!2sus"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div id="contact-form" className="h-[4.4rem]"></div>
    </main>
  );
};

export default Contact;
