import Image from "next/image";

const ImageSection = ({ imgSrcs, bgColor, position }) => {
  return (
    <div
      className={`flex flex-wrap gap-8 items-center w-full px-2 py-8 justify-center ${bgColor}`}
    >
      {imgSrcs.map((imgSrc, i) => (
        <Image
          loading="lazy"
          key={`ds-img-${i}`}
          className="shadow-xl shadow-black/30"
          style={{ borderRadius: "10px" }}
          src={imgSrc}
          alt={`ds-img-${i}`}
          width={300}
          height={300}
        />
      ))}
    </div>
  );
};

export default ImageSection;
