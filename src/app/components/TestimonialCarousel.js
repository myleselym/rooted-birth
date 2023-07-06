"use client";

import { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

const testimonials = [
  {
    name: "Sasha F",
    imgUrl: "/sasha_f.jpeg",
    alt: "sasha_f",
    testimonial:
      "I was surprised at all of the things she was doing during my labor. She was asking questions, holding my hand, encouraged me and telling me that I could do it - all while taking detailed notes of my birth story. And then after I had the baby the first thing Bridget did was to offer me food. I was like this lady is IT! ",
  },
  {
    name: "Alecia H.",
    imgUrl: "/alecia_h.jpeg",
    alt: "alicia_h",
    testimonial:
      '"Ever since our very first meeting, the conversation with Bridget flowed so naturally. She made me feel understood, supported and empowered, and it was those characteristics that I wanted my birth experience to embody. Bridget was a perfect fit for us and for what we envisioned our birth would be."',
  },
  {
    name: "Alex A.",
    imgUrl: "/alex_a.jpeg",
    alt: "alex_a",
    testimonial:
      " I would highly recommend hiring a doula for any birth, and especially for first time parents. It is so helpful to have someone who can offer a helping hand during the birth and offer support when the significant other may not know what to do. For us, it was especially great that Bridget could support me post birth while my husband held the babies.",
  },
  {
    name: "Emily H.",
    imgUrl: "/emily_h.jpeg",
    alt: "emily_h",
    testimonial:
      "Bridget provided clear, non-judgmental support throughout my pregnancy.  I never felt like I was being told how to parent or pressured in any way but rather empowered through the knowledge she provided.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <div
      id="carousel-wrapper"
      className="flex flex-col items-center justify-center w-full mb-8"
    >
      <div className="flex items-center justify-center pb-8">
        <Link href="/testimonials" className="text-5xl text_sage">
          Testimonials
        </Link>
      </div>
      <div className="relative mx-auto flex flex-col items-center min-w-[260px] max-w-[800px] min-[280px]:h-[700px] lg:h-[570px] justify-evenly px-4 duration-500 bg-center bg-cover group bg_finch rounded-2xl">
        <Image
          priority
          style={{ borderRadius: "10px" }}
          className="shadow-2xl shadow-black"
          src={testimonials[currentIndex].imgUrl}
          alt={testimonials[currentIndex].alt}
          width={280}
          height={300}
        />

        <div className="max-w-[800px] text-center text_porcelain mx-2 p-2 bg-black/30 rounded-xl">
          <p className="italic">{testimonials[currentIndex].testimonial}</p>
          <p className="mt-2">{`-${testimonials[currentIndex].name}`}</p>
        </div>
        {/* Left Arrow*/}
        <div
          onClick={prevSlide}
          className="lg:hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
        >
          <BsChevronCompactLeft size={30} />
        </div>

        {/* Right Arrrow*/}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
        >
          <BsChevronCompactRight size={30} />
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
              index === currentIndex && "text_sky"
            } text-2xl cursor-pointer`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
