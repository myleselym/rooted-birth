"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceLinkOpen, setIsServiceLinkOpen] = useState(false);

  const handleHamburgerLinks = () => {
    setIsMenuOpen(false);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServiceLinkOpen(false);
  };

  return (
    <nav className="moon_font fixed top-0 z-10 flex items-center justify-between w-full min-[280px]:px-5 min-[320px]:px-8 py-4 text-lg font-extrabold border-b border-b-slate-300 opacity-90 bg_sky text_pearl">
      <div className="min-[320px]:max-lg:mx-auto">
        <Link onClick={closeMenus} href="/">
          <div className="flex items-center min-[280px]:gap-2 sm:gap-4">
            <Image
              src={"/icons/Rooted_icon-04.png"}
              alt="icon"
              width={40}
              height={40}
              loading="lazy"
            />
            <h2 className="opacity-100">Rooted Birth Services</h2>
          </div>
        </Link>
      </div>
      <div className="min-[200px]:hidden lg:block [&>*]:cursor-pointer">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <div>
            <li
              className="flex"
              onClick={() => {
                setIsServiceLinkOpen(!isServiceLinkOpen);
              }}
            >
              Services <BsChevronDown className="mt-2 ml-1" />
              {isServiceLinkOpen && (
                <div className="absolute flex flex-col mt-[50px] -ml-6 border border-t-0 rounded-b -p-2 bg_sky">
                  <Link
                    onClick={() => setIsServiceLinkOpen(false)}
                    className="p-2 hover:bg-slate-500 active:bg-slate-700 rounded-xl"
                    href="/doula-support"
                  >
                    Doula Support
                  </Link>
                  <Link
                    onClick={() => setIsServiceLinkOpen(false)}
                    className="p-2 hover:bg-slate-500 active:bg-slate-700 rounded-xl"
                    href="/birth-education"
                  >
                    Birth Education
                  </Link>
                </div>
              )}
            </li>
          </div>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>{" "}
          </li>
          <li>
            <Link href="/contact/#contact-form">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="min-[200px]:block lg:hidden">
        <MdMenu
          className="text-4xl border rounded-[5px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute flex justify-center w-48 py-4 right-2 rounded-b-xl top-16 bg_sky">
            <ul className="flex flex-col items-center justify-center w-full gap-2 text-center">
              <li className="w-full hover:bg-slate-500/50">
                <Link onClick={handleHamburgerLinks} href="/">
                  Home
                </Link>
              </li>
              <li
                onMouseLeave={() => {
                  setIsServiceLinkOpen(false);
                }}
                className="w-full hover:bg-slate-500/50"
              >
                <h3
                  className="cursor-default"
                  onClick={() => {
                    setIsServiceLinkOpen(true);
                  }}
                  href="/services"
                >
                  Services
                </h3>
                {isServiceLinkOpen && (
                  <div className="flex">
                    <Link
                      onClick={closeMenus}
                      className="flex p-2 hover:bg-slate-500 active:bg-slate-700 rounded-xl"
                      href="/doula-support"
                    >
                      Doula Support
                    </Link>

                    <Link
                      onClick={closeMenus}
                      className="flex p-2 hover:bg-slate-500 active:bg-slate-700 rounded-xl"
                      href="/birth-education"
                    >
                      Birth Education
                    </Link>
                  </div>
                )}
              </li>
              <li className="w-full hover:bg-slate-500/50">
                <Link onClick={handleHamburgerLinks} href="/about">
                  About
                </Link>
              </li>
              <li className="w-full hover:bg-slate-500/50">
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li className="w-full hover:bg-slate-500/50">
                <Link onClick={handleHamburgerLinks} href="/faq">
                  FAQ
                </Link>{" "}
              </li>
              <li className="w-full hover:bg-slate-500/50">
                <Link onClick={handleHamburgerLinks} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
