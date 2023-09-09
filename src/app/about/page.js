import HeroSection from "@/app/components/HeroSection";
import Card from "@/app/components/ui/Card";
import React from "react";

const About = () => {
  return (
    <main id="about">
      <HeroSection
        imgSrc="/bridget-landscape.jpeg"
        alt="Bridget Landscape"
        heroTitle="About Me"
      />
      <section id="about-bridget" className="py-8 bg_sky text_pearl">
        <div className="flex flex-col flex-wrap items-center justify-start gap-8 xl:flex-row xl:items-start xl:justify-center">
          <Card
            imgSrc="/bridget-pregnant-bw.jpeg"
            imgAlt="Bridget Pregnant Black and White"
            title="My Birth Philosophy"
            content={[
              <p key="first">
                I believe all people, regardless of beliefs, status, or
                identities deserve to be supported and valued.
              </p>,
              <p key="second">
                I believe in centering the birthing person at all stages of
                their pregnancy, labor, birth, and postpartum experience.
              </p>,
              <p key="third">
                I believe in informed consent and informed refusal.
              </p>,
              <p key="fourth">
                I believe birth is a natural process which has a variety of ways
                to be embraced.
              </p>,
              <p key="fifth">
                I believe birth is as much of a mental experience as a physical
                one.
              </p>,
            ]}
          />
          <Card
            imgSrc="/bridget-graduate.jpeg"
            imgAlt="Bridget Graduate"
            title="My Education"
            content={[
              <p key="first">
                I have a Master&apos;s in Educational Leadership as well as a
                Bachelor&apos;s degree in Elementary and Special Education. My
                professional background has taught me about how the brain learns
                and responds to stimuli. This training is translated to how I
                support clients to prepare for and cope through the intensity of
                bringing life into the world.
              </p>,

              <p key="second">
                As a doula and birth strategist, I am fortunate to have received
                my training though Harambee Village in a year long cohort, which
                included included instruction with Dr. Amy Gilliland. Since
                then, the Harambee Village doula community continues to support
                me and is something for which I have deep gratitude.
              </p>,
            ]}
          />
          <Card
            imgSrc="/bridget-newborn.jpeg"
            imgAlt="Bridget Newborn"
            title="My Birth Experience"
            content={[
              <p key="first">
                I have never felt more empowered and sure of myself than after
                the birth of my children. The mental and physical preparation my
                husband and I did prior to the birth of our first child gave us
                confidence to pursue our goals. It also affirmed our ability to
                make informed choices and advocate for ourselves. I believe
                everyone should feel as empowered to advocate for their own
                birth preferences. For me this meant being able to birth all
                three of my children in the setting I chose, which was the
                hospital without pharmaceutical pain management support and all
                of the mental and spiritual support I needed.
              </p>,
              <p key="second">
                However similar or different you hope to have your birthing
                journey - my work as a doula is to support you in the way you
                desire.
              </p>,
            ]}
          />
        </div>
      </section>
      <div className="pt-8 bg_pearl text_sky">
        <h2 className="text-5xl text-center">Why Rooted?</h2>
        <div className="flex flex-col flex-wrap items-center justify-start gap-8 py-8 xl:flex-row xl:items-start xl:justify-center ">
          <Card
            imgSrc="/bridget-baby-mom.jpeg"
            imgAlt="Bridget Hospital"
            title="My Roots"
            content={[
              <p key="first">
                My late grandfather once said, &quot;We are the sum of our
                branches and the product of our roots.&quot;
              </p>,
              <p key="second">
                Not only does this speak to the generational impact of who we
                are and what we do, our roots are also grounded in our core
                values and beliefs which translate to what we produce for the
                world to see.
              </p>,
              <p key="third">
                &quot;Blessed is the man who trusts in the LORD, whose trust is
                the LORD. He is like a tree planted by water, that sends out its
                roots by the stream, and does not fear when heat comes, for its
                leaves remain green, and is not anxious in the year of drought,
                for it does not cease to bear fruit.&quot;
              </p>,
              <p key="fourth">&ensp;-Jerimiah 17: 7-8</p>,
            ]}
          />
          <Card
            imgSrc="/bridget-fam.jpeg"
            imgAlt="Bridget Family"
            title="Your Roots"
            content={[
              <p key="first">
                Rooted in your intuition.
                <br key="first" />
                Rooted in your core values.
                <br key="second" />
                Rooted in the strength that is already within you.
              </p>,
              <p key="second">
                As a doula and birth strategist, I get to support clients to
                root themselves in their core values to make informed choices
                most aligned with who they are and their own intuition. No
                matter how similar or different our core values are to each
                other, it is my role and joy to support clients to be empowered
                by their own roots.
              </p>,
              <p key="third">
                Generationally, it is also my deepest honor to support families
                in bringing forth the next generation.
              </p>,
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default About;
