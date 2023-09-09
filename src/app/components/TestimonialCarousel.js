"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import SashaF from "/public/sasha_f.jpeg";
import AleciaH from "/public/alecia_h.jpeg";
import AlexA from "/public/alex_a.jpeg";
import EmilyH from "/public/emily_h.jpeg";

const testimonials = [
  {
    name: "Sasha F",
    imgSrc: SashaF,
    alt: "sasha_f",
    testimonial:
      '"I was surprised at all of the things she was doing during my labor. She was asking questions, holding my hand, encouraged me and telling me that I could do it - all while taking detailed notes of my birth story. And then after I had the baby the first thing Bridget did was to offer me food. I was like this lady is IT!"',
  },
  {
    name: "Alecia H.",
    imgSrc: AleciaH,
    alt: "alicia_h",
    testimonial:
      '"Ever since our very first meeting, the conversation with Bridget flowed so naturally. She made me feel understood, supported and empowered, and it was those characteristics that I wanted my birth experience to embody. Bridget was a perfect fit for us and for what we envisioned our birth would be."',
  },
  {
    name: "Alex A.",
    imgSrc: AlexA,
    alt: "alex_a",
    testimonial:
      '"I would highly recommend hiring a doula for any birth, and especially for first time parents. It is so helpful to have someone who can offer a helping hand during the birth and offer support when the significant other may not know what to do. For us, it was especially great that Bridget could support me post birth while my husband held the babies."',
  },
  {
    name: "Emily H.",
    imgSrc: EmilyH,
    alt: "emily_h",
    testimonial:
      '"Bridget provided clear, non-judgmental support throughout my pregnancy.  I never felt like I was being told how to parent or pressured in any way but rather empowered through the knowledge she provided."',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setDirection("prev"); // Set slide direction to "prev"
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setDirection("next"); // Set slide direction to "next"
  };

  const handleDotClick = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };

  useEffect(() => {
    setDirection("next"); // Reset slide direction

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== testimonials.length - 1 ? prevIndex + 1 : 0
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      id="carousel-wrapper"
      className="flex flex-col items-center py-8 justify-d bg_sage"
    >
      <div className="flex items-center justify-center pb-4">
        <Link href="/testimonials" className="text-5xl text_pearl">
          Testimonials
        </Link>
      </div>
      <div
        className={`relative group w-11/12 max-w-[800px] min-[200px]:h-[650px] sm:h-[540px] m-4`}
      >
        <div className="flex flex-col items-center h-full p-2 min-[200px]:justify-evenly sm:justify-center border-2 border-neutral-600 bg_finch rounded-[.5rem]">
          <div className="relative w-[240px] h-[310px] mb-6">
            <Image
              loading="eager"
              className="object-cover shadow-2xl shadow-black"
              src={testimonials[currentIndex].imgSrc}
              alt={testimonials[currentIndex].alt}
              fill
            />
          </div>

          <div className="p-4 rounded text_pearl bg-black/20">
            <p className="italic">
              <Balancer>{testimonials[currentIndex].testimonial}</Balancer>
            </p>
            <p className="pt-2 pl-4">{`-${testimonials[currentIndex].name}`}</p>
          </div>
          {/* Left Arrow*/}
          <div
            onClick={prevSlide}
            className="lg:hidden group-hover:block absolute min-[200px]:top-[685px] min-[400px]:top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
          >
            <BsChevronCompactLeft size={30} />
          </div>

          {/* Right Arrrow*/}
          <div
            onClick={nextSlide}
            className="lg:hidden group-hover:block absolute min-[200px]:top-[685px] min-[400px]:top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </div>
      <div className={"flex top-4 justify-center py-2"}>
        {testimonials.map((testimonial, index) => (
          <div
            key={`dot-${index}`}
            onClick={() => {
              handleDotClick(index);
            }}
            className={`${
              index === currentIndex && "text_finch"
            } text_pearl text-2xl cursor-pointer`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
