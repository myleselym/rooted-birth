"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Balancer } from "react-wrap-balancer";

const TestimonialCard = ({ testimonial }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
    }, 7000);
  }, []);

  return (
    <section
      className={`${
        loaded ? "" : "opacity-0"
      } relative flex flex-col gap-4 transition-opacity duration-1000 ease-in-out items-center h-[600px] p-4`}
    >
      <div
        id="testimonial-img"
        className="relative justify-self-start w-[250px] h-[350px]"
      >
        <Image
          loading="lazy"
          className="object-cover object-top shadow-xl shadow-black/50"
          src={testimonial.imgSrc}
          alt={testimonial.alt}
          fill
        />
      </div>
      <div
        id="testimonial-statement"
        className="max-w-2xl my-auto italic justify-self-start text_pearl"
      >
        <p className="text-lg">
          <Balancer>{testimonial.testimonial}</Balancer>
        </p>
        <p className="pl-4">{`-${testimonial.name}`}</p>
      </div>
    </section>
  );
};

export default TestimonialCard;
