import HeroSection from "@/app/components/HeroSection";
import { Playfair_Display } from "next/font/google";
import BirthEducationHeroImg from "/public/hand-hold.jpeg";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const BirthEducation = () => {
  return (
    <main>
      <HeroSection
        imgSrc={BirthEducationHeroImg}
        alt="Holding Hands"
        heroTitle="Birth Education"
      />
      <section className="flex flex-col [&>*]:w-full items-center justify-center mx-auto [&>p]:text-xl w-[80vw] py-8">
        <p>Birth is variable.</p>
        <p className="mt-2">
          Being prepared to cope with anything you may encounter will increase
          the likelihood of high satisfaction of your birth experience. <br />
          Rooted offers a five-part evidence-based birth education series which
          will prepare you and your partner to cope with labor and early
          postpartum.
        </p>
        <p className="my-2">You will learn:</p>
        <ul
          style={{ wordSpacing: ".1rem" }}
          className={`${playfairDisplay.className} mb-4 pl-8 list-disc text-lg`}
        >
          <li>The Stages and Hormones of Labor</li>
          <li>Advocacy Strategies</li>
          <li>Effective Birthing Positions</li>
          <li>Advanced Coping Measures</li>
          <li>Planning for the Unexpected</li>
          <li>Postpartum Prep: Parent and Infant Care</li>
        </ul>
        <p>
          Group birth education classes are not currently available.
          <br />
          <br />
          Contact Bridget below to inquire about private birth education
          classes.
        </p>
      </section>
    </main>
  );
};

export default BirthEducation;
