import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  imgSrc,
  imgAlt,
  title,
  content,
  button,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[400px] min-h-[450px] text-center">
      <div className="relative mx-auto h-[260px] w-[260px]">
        <Image
          className="object-cover shadow-xl shadow-zinc-700"
          style={{
            borderRadius: "10px",
          }}
          src={imgSrc}
          fill
          loading="lazy"
          alt={imgAlt}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {title && <h3 className="mt-8 text-3xl">{title}</h3>}
        <div
          className={`${
            title && "text-left"
          } text-lg min-[280px]:pl-2 md:pl-4 pr-2 leading-7 mt-8`}
        >
          {content}
        </div>
      </div>
      {button && (
        <Link
          href={buttonHref}
          className="p-2 border rounded-[10px] mt-auto hover:bg-slate-200 hover:text-[#95a7ae] active:bg-sky-100 active:shadow-md shadow-lg shadow-black/30"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Card;
