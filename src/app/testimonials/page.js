import HeroSection from "@/app/components/HeroSection";
import TestimonialSection from "@/app/components/TestimonialSection";

const testimonials = [
  {
    imgSrc: "/alecia_h.jpeg",
    alt: "alecia_h",
    imgSide: "",
    name: "Alecia H.",
    testimonial: [
      <p key="first">
        {`As a second time laboring mom who didn’t use a doula for her first
        birth, my husband and I were both skeptical on the benefits of having
        one for the birth of our second baby. We had a relatively positive birth
        experience after our first was born and we both felt we could fare well
        enough to make it through our second. It wasn’t until I was 32 weeks
        that we finally decided to consider hiring a doula after realizing we
        wanted more than to just fare “well enough.”`}
      </p>,

      <p key="second">
        {`Ever since our very first meeting, the conversation with Bridget flowed
        so naturally. She made me feel understood, supported and empowered, and
        it was those characteristics that I wanted my birth experience to
        embody. Bridget was a perfect fit for us and for what we envisioned our
        birth would be. She supported us in just the way we needed to be
        supported and she will forever hold a special place in our hearts. We
        wouldn’t have wanted to share such intimate and raw moments with anyone
        else!`}
      </p>,
    ],
    services: "Full Spectrum Support",
  },
  {
    imgSrc: "/sasha_f.jpeg",
    alt: "sasha_f",
    imgSide: "right",
    name: "Sasha F.",
    testimonial: [
      <p key="first">
        {`10/10. I would give Bridget a thousand if there is any rating of that
        kind. This lady was awesome. All of my requests are met. I can't begin
        to say how wonderful she was.`}
      </p>,

      <p key="second">
        I was surprised at all of the things she was doing during my labor. She
        was asking questions, holding my hand, encouraged me and telling me that
        I could do it - all while taking detailed notes of my birth story. And
        then after I had the baby the first thing Bridget did was to offer me
        food. I was like this lady is IT!
      </p>,

      <p key="third">
        One thing that I will always remember is when the pain began to hit me
        she knew I was a believer and asked if she could pray with me. That was
        the fastest I have said yes to anything in my life. She prayed with me
        and that took me by storm. She was so engaging.
      </p>,

      <p key="fourth">
        {`I would recommend anyone who is searching for a doula to connect with
        Bridget. She was loving and just so fun. She is amazing. I love her. She
        even did a mini newborn photoshoot. I couldn't ask for a better doula.`}
      </p>,

      <p key="fifth">
        From me, my husband, and my baby, we love Bridget so much.{" "}
      </p>,
    ],
    services: "Birth Support & Newborn Photos",
  },
  {
    imgSrc: "/emily_h.jpeg",
    alt: "alt",
    imgSide: "",
    name: "Emily H.",
    testimonial: [
      <p key="first">
        My first birth was without a doula, traumatic, and resulted in having a
        lot of anxiety during my second pregnancy. I was determined to be more
        empowered and informed for my second birth.
      </p>,

      <p key="second">
        Bridget provided clear, non-judgmental support throughout my pregnancy.
        I never felt like I was being told how to parent or pressured in any way
        but rather empowered through the knowledge she provided. Bridget
        provided me with much emotional support throughout my pregnancy. She
        talked me through different ways to breathe and reduce my anxiety.
        Bridget was a great listener and always made sure that my voice was
        heard with all my birthing wishes. We regularly discussed my hopes for a
        less traumatic birth and Bridget was able to provide me with resources
        and tools to do so.
      </p>,

      <p key="third">
        When I was in labor, Bridget was readily available to support me. Her
        support was unwavering and got me through the process of being induced
        as well and what ended up being the most peaceful and relaxing birthing
        experience I could have ever wished for. During my induction, Bridget
        made sure to remind me of various birthing positions to help open my
        body and prepare it for birth. I could not be more grateful for her
        support and the role she played in my birthing experience.
      </p>,
    ],
    services: "Virtual Prenatal and Labor Support",
  },
  {
    imgSrc: "/nia_g.jpeg",
    alt: "nia_g",
    imgSide: "right",
    name: "Nia G.",
    testimonial: [
      <p key="first">
        This was my first child and I never knew what a doula was until I was
        referred to one. I was connected with a doula team, Bridget being one of
        them. Having a baby was a priceless experience especially with the
        support I had from Bridget and her doula partner that I never would have
        gotten as a single mom with out them.
      </p>,
      <p key="second">
        Thank you for being amazing supporters. I appreciate you both!
      </p>,
    ],
    services: "Birth Support",
  },
  {
    imgSrc: "/alex_a.jpeg",
    alt: "alex_a",
    imgSide: "",
    name: "Alex A.",
    testimonial: [
      <p key="first">
        I would highly recommend hiring a doula for any birth, and especially
        for first time parents. It is so helpful to have someone who can offer a
        helping hand during the birth and offer support when the significant
        other may not know what to do. For us, it was especially great that
        Bridget could support me post birth while my husband held the babies.
      </p>,
    ],
    services: "Full Spectrum Support",
  },
];

const Testimonials = () => {
  return (
    <main>
      <HeroSection
        imgSrc="/testimonial-header.jpeg"
        alt="Testimonial Header Image"
        heroTitle="Testimonials"
        font="text-8xl"
      />
      <section className="flex flex-col gap-2">
        {testimonials.map((testimonialObj, index) => (
          <TestimonialSection
            key={`testimonial-${index}`}
            index={index}
            imgSrc={testimonialObj.imgSrc}
            alt={testimonialObj.alt}
            imgSide={testimonialObj.imgSide}
            name={testimonialObj.name}
            testimonial={testimonialObj.testimonial}
            services={testimonialObj.services}
          />
        ))}
      </section>
    </main>
  );
};

export default Testimonials;
