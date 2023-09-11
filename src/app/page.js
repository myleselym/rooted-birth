import HeroSection from "@/components/HeroSection";
import InformationSection from "@/components/InformationSection";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroImg from "/public/RootedBanner.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <HeroSection imgSrc={HeroImg} alt="Rooted Header" />
        <Image
          className="absolute left-0 right-0 mx-auto shadow-inner bottom-[15%] bg-black/10"
          src="/logos/Rooted_Logo_white.png"
          alt="Rooted Header"
          height={295}
          width={923}
        />
      </section>
      <div className="flex flex-col flex-wrap items-center justify-center w-full gap-2 py-4 font-bold text-center bg_sky text_pearl">
        <h2
          style={{ wordSpacing: "-.5rem" }}
          className={`moon_font text-3xl font-bold`}
        >
          Free 30-Minute Consultation
        </h2>
        <Link
          href="/contact#contact-form"
          className="moon_font p-2 text-lg font-bold border-2 rounded-xl hover:bg-slate-200 hover:text-[#95a7ae] active:bg-sky-100 active:shadow-md shadow-lg shadow-black/30"
        >
          Contact Me
        </Link>
      </div>
      <AboutSection button />
      <InformationSection />
      <TestimonialCarousel />
    </main>
  );
}
