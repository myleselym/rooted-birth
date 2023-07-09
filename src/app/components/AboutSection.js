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
      <Image
        priority
        src={BridgetImg}
        className="object-contain mb-4 shadow-xl shadow-black/30"
        style={{ borderRadius: "10px" }}
        alt="bridget-field"
        height={380}
        width={290}
      />
      <div className="min-[280px]:w-11/12 sm:w-[500px] px-2 text-lg flex flex-col gap-4">
        <h2 className="text-4xl">{`Hi, I'm Bridget!`}</h2>
        <p>
          <Balancer>
            I am a wife and mother of 3 with my Master&apos;s in Educational
            Leadership. My core value of hope allows me to approach life with
            <span className="mx-1 text-violet-500">integrity</span>and sustains
            my passion for justice.
            <br />
            As a doula and birth strategist, I utilize the body&apos;s
            physiology, neuroscience, and trust in the client&apos;s intuition
            and ability to make informed decisions as a means to increase the
            likelihood of positive birth outcomes, as defined by the birthing
            person.
          </Balancer>
        </p>
        {button && (
          <Link
            href="/about"
            className="self-center p-2 border rounded-[10px] mt-auto bg_sage text_pearl border-gray-400 hover:bg-slate-200 hover:text-[#95a7ae] active:bg-sky-100 active:shadow-md shadow-lg shadow-black/30"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
