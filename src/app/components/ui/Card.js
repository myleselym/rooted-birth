import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

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
    <div className="flex flex-col p-2 items-center justify-center gap-8 max-w-[400px] min-h-[450px] text-center">
      <div className="relative h-[260px] w-[260px]">
        <Image
          className="object-cover shadow-xl shadow-zinc-700"
          src={imgSrc}
          fill
          loading="lazy"
          alt={imgAlt}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {title && <h3 className="pt-8 pb-2 text-3xl moon_font">{title}</h3>}
        <div
          className={`${
            title && "text-left"
          } flex flex-col gap-2 text-xl leading-7`}
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
