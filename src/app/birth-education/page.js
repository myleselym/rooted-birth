import HeroSection from "@/app/components/HeroSection";
import BirthEducationHeroImg from "/public/hand-hold.jpeg";

const BirthEducation = () => {
  return (
    <main>
      <HeroSection
        imgSrc={BirthEducationHeroImg}
        alt="Holding Hands"
        heroTitle="Birth Education"
      />
      <section className="flex flex-col text-lg mx-auto w-[80vw] py-8">
        <h2 className="text-2xl moon_font [word-spacing:-.3rem]">
          Birth is variable.
        </h2>
        <p className="mt-2">
          Being prepared to cope with anything you may encounter will increase
          the likelihood of high satisfaction of your birth experience. <br />
          Rooted offers a five-part evidence-based birth education series which
          will prepare you and your partner to cope with labor and early
          postpartum.
        </p>
        <p className="my-2">You will learn:</p>
        <ul className="pl-8 mb-4 text-lg list-disc">
          <li>The Stages and Hormones of Labor</li>
          <li>Advocacy Strategies</li>
          <li>Effective Birthing Positions</li>
          <li>Advanced Coping Measures</li>
          <li>Planning for the Unexpected</li>
          <li>Postpartum Prep: Parent and Infant Care</li>
        </ul>
        <p>Group birth education classes are not currently available.</p>
        <p className="mt-4 text-xl">
          Contact Bridget below to inquire about private birth education
          classes.
        </p>
      </section>
    </main>
  );
};

export default BirthEducation;
