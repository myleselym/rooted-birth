"use client";

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import SashaF from "/public/sasha_f.jpeg";
import AleciaH from "/public/alecia_h.jpeg";
import AlexA from "/public/alex_a.jpeg";
import EmilyH from "/public/emily_h.jpeg";
import TestimonialCard from "@/components/ui/TestimonialCard";

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
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="testimonial-carousel"
      className="grid py-8 place-items-center bg_sage"
    >
      <h2 className="flex items-center justify-center">
        <Link href="/testimonials" className="pb-8 text-5xl text_pearl">
          Testimonials
        </Link>
      </h2>
      <div
        className={`relative group w-11/12 max-w-[800px] bg-neutral-800/30 p-4 rounded-xl`}
      >
        <div className="flex flex-col items-center justify-center p-2">
          {testimonials.map(
            (testimonial, index) =>
              index === currentIndex && (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              )
          )}
          {/* Left Arrow*/}
          <div
            onClick={prevSlide}
            className="lg:hidden group-hover:block absolute top-[666px] lg:top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 text-white cursor-pointer hover:text-neutral-200 active:text-neutral-600 "
          >
            <BsChevronCompactLeft size={30} />
          </div>

          {/* Right Arrrow*/}
          <div
            onClick={nextSlide}
            className="lg:hidden group-hover:block absolute top-[666px] lg:top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 text-white cursor-pointer hover:text-neutral-200 active:text-neutral-600 "
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
    </section>
  );
};

export default TestimonialSection;
