import Image from "next/image";
import Link from "next/link";
import BridgetImg from "/public/bridget-field.jpeg";
import { Balancer } from "react-wrap-balancer";
const AboutSection = ({ bgColor, textColor, button }) => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-8 items-center py-8 ${
        (bgColor, textColor)
      }`}
    >
      <div className="h-[20rem] w-[18rem]">
        <Image
          priority
          src={BridgetImg}
          className="object-contain shadow-lg shadow-black/50"
          alt="bridget-field"
        />
      </div>
      <div className="min-[280px]:w-3/4 sm:w-[500px] px-2 text-lg flex flex-col items-center gap-4">
        <div className="text-[1.15rem] flex flex-col gap-2 text_sage">
          <h2 className="self-start [word-spacing:-.5rem] text-4xl moon_font text_sky">
            Hi, I&apos;m Bridgit!
          </h2>
          <p>
            <Balancer>
              I am a wife and mother of 3 with my Master&apos;s in
              <br /> Educational Leadership. My core value of hope allows me to
              approach life with integrity and sustains my passion for justice.
            </Balancer>
          </p>
          <p>
            <Balancer>
              As a doula and birth strategist, I utilize the body&apos;s
              physiology, neuroscience, and trust in the client&apos;s intuition
              and ability to make informed decisions as a means to increase the
              likelihood of positive birth outcomes, as defined by the birthing
              person.
            </Balancer>
          </p>
        </div>
        {button && (
          <Link
            href="/about"
            className="moon_font self-center p-2 rounded-[10px] mt-auto bg_sky text_pearl border-gray-400 hover:bg-slate-200 hover:text-[#95a7ae] active:bg-sky-100 active:shadow-md shadow-lg shadow-black/30"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
