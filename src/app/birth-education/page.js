import HeroSection from "@/components/HeroSection";
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
        <p>
          Read
          <span className="mx-2 text-lg opacity-70 text_finch">
            <a
              href="https://evidencebasedbirth.com/the-evidence-for-doulas/"
              className="hover:text-neutral-500 active:text-neutral-800"
            >
              this signature article
            </a>
          </span>
          from Evidence Based Birth to learn more about what a doula does and
          why they are so valuable.
        </p>
        <p className="mt-4 text-xl">
          Contact Bridget below to inquire about private birth education
          classes.
        </p>
        <p className="text-sm">
          *Group birth education classes are not currently available.
        </p>
      </section>
    </main>
  );
};

export default BirthEducation;
