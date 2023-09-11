import Image from "next/image";

const TestimonialSection = ({
  index,
  imgSrc,
  alt,
  imgSide,
  testimonial,
  name,
  services,
}) => {
  return (
    <div
      className={`flex flex-wrap justify-evenly items-center ${
        imgSide === "right" && "flex-row-reverse"
      } ${index % 2 !== 0 ? "bg_sky text_pearl" : "text_sky"} py-8`}
    >
      <Image
        src={imgSrc}
        alt={alt}
        height={380}
        width={name === "Alecia H." || name === "Emily H." ? 380 : 290}
        className={`object-contain mb-4 shadow-lg shadow-black/30`}
      />

      <div className="px-2 text-xl w-[90vw] lg:w-8/12">
        <div className="flex flex-col gap-2">{testimonial}</div>
        <br />
        <h3 className="font-bold">{name}</h3>
        <p className="italic">{services}</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
