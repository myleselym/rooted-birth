"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

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
      <h2 className="text-5xl">Contact Me</h2>
      <p className="p-4 text-xl">
        Call, text, or send a message below for a free consultation.
        <br />
        {`(Text is Bridget's fastest mode of comunication.)`}
      </p>
      <div className="flex items-center gap-20 my-4 ">
        <span className="flex items-center text-2xl">
          <BsFillTelephoneFill className="text-blue-300" />
          &ensp;
          <a
            className={`${playfairDisplay.className} mr-4 text-slate-600 active:text-slate-800 hover:text-blue-300`}
            href="tel:+6086181311"
          >
            (608) 618-1311
          </a>
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full px-2 [&>*]:bg-[#f0efee] [&>*]:border-2 [&>*]:rounded-xl [&>*]:p-4 p-4 text-black"
      >
        <input
          id="firstName"
          type="text"
          name="first"
          placeholder="First Name"
          minLength="3"
          maxLength="20"
          required
        />
        <input
          id="last"
          type="text"
          name="last"
          placeholder="Last Name"
          minLength="3"
          maxLength="30"
          required
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input id="tel" type="tel" name="tel" placeholder="Phone Number" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Type your message here..."
          required
        />
        <button
          className="p-4 text-xl border border-gray-500 shadow-lg disabled:bg-gray-400 disabled:text-gray-100 hover:bg-slate-100 text_sky rounded-2xl active:bg-slate-300 active:shadow-md active:border-gray-200 shadow-black/30"
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
