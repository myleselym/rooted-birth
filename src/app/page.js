import HeroSection from "@/app/components/HeroSection";
import InformationSection from "@/app/components/InformationSection";
import Link from "next/link";
import AboutSection from "@/app/components/AboutSection";
import TestimonialCarousel from "@/app/components/TestimonialCarousel";
import HeroImg from "/public/rooted_header.jpg";

export default function Home() {
  return (
    <main>
      <HeroSection imgSrc={HeroImg} alt="Rooted Header" />
      <div className="flex flex-col flex-wrap items-center justify-center w-full gap-4 py-4 font-bold text-center bg_sky text_pearl">
        <h2 style={{ wordSpacing: "-.4rem" }} className={`text-4xl font-bold`}>
          Free 30-Minute Consultation
        </h2>
        <Link
          href="/contact"
          className="w-32 py-2 text-xl font-bold border-2 rounded-xl hover:bg-slate-200 hover:text-[#95a7ae] active:bg-sky-100 active:shadow-md shadow-lg shadow-black/30"
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
