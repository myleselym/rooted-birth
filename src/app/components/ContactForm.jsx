"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { Balancer } from "react-wrap-balancer";
import { useRouter } from "next/navigation";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      first: e.target.first.value,
      last: e.target.last.value,
      email: e.target.email.value,
      phone: e.target.tel.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        //reset form
        e.target.first.value = "";
        e.target.last.value = "";
        e.target.email.value = "";
        e.target.tel.value = "";
        e.target.message.value = "";
        console.log("Message sent successfully.");
      }
    } catch (error) {
      toast(error.message, { type: "error" });
      console.log("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mx-auto items-center w-full max-w-[800px] px-2 pb-8 text-center text_pearl bg_sky">
      <h2
        className="text-5xl cursor-pointer moon_font [word-spacing:-.45rem]"
        onClick={() => {
          router.push("/contact/#contact-form");
        }}
      >
        Contact Me
      </h2>
      <h3 className="p-4 text-2xl">
        <Balancer>
          Call, text, or send a message below for a free consultation.
        </Balancer>
      </h3>
      <p className="text-xl">
        <Balancer>
          (Text is Bridget&apos;s fastest mode of comunication.)
        </Balancer>
      </p>
      <div className="flex items-center gap-20 my-4 ">
        <span className="flex items-center text-2xl">
          <BsFillTelephoneFill className="text_finch" />
          &ensp;
          <a
            className={`${playfairDisplay.className} mr-4 active:text-slate-300 hover:text-slate-100`}
            href="tel:+6086181311"
          >
            (608) 618-1311
          </a>
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-4 w-full px-2 [&>*]:bg-[#f0efee] [&>*]:border-2 [&>*]:rounded-xl [&>*]:p-4 p-4 text-black"
      >
        <input
          id="firstName"
          className="custom-placeholder"
          type="text"
          name="first"
          placeholder="First Name"
          minLength="3"
          maxLength="20"
          required
        />
        <input
          id="last"
          className="custom-placeholder"
          type="text"
          name="last"
          placeholder="Last Name"
          minLength="3"
          maxLength="30"
          required
        />

        <input
          id="email"
          className="custom-placeholder"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          id="tel"
          className="custom-placeholder"
          type="tel"
          name="tel"
          placeholder="Phone Number"
        />
        <textarea
          name="message"
          id="message"
          className="custom-placeholder"
          cols="30"
          rows="4"
          placeholder="Type your message here..."
          required
        />
        <button
          className="p-4 text-xl border border-gray-500 shadow-lg disabled:bg-gray-400 disabled:text-gray-100 hover:bg-slate-100 text_sky rounded-2xl active:bg-slate-300 active:shadow-sm shadow-black/30"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
