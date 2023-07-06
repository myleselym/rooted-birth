"use client";

import Image from "next/image";

const HeroSection = ({ imgSrc, alt, heroTitle, font }) => {
  return (
    <>
      <div className="relative flex min-[280px]:h-[40dvh] sm:h-[50dvh]">
        <Image
          priority
          src={imgSrc}
          fill={true}
          className="-z-10"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt={alt}
        />
        <h1
          className={`min-[280px]:text-5xl md:text-9xl text-center text_pearl mx-auto self-center`}
        >
          {heroTitle}
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
