"use client";
import React, { useState } from "react";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { BsBehance, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ContactIcon from "./assets/Contact.png";
import Image from "next/image";
import Link from "next/link";
import Waves from "./FinalWaves";
const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", {
        name,
        number,
        message,
      });

      toast.success("شكرااا لك ! رسالتك صارت عندي");

      setName("");
      setNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("حدث خطأ أثناء تقديم الرسالة. يرجى المحاولة مرة أخرى.");
    }
  };
  //https://api.whatsapp.com/message/BFP3GRIKS2CNB1?autoload=1&app_absent=0
  return (
    <div className="bg-second" id="contact">
      <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 mx-8">
        <h1 className="text-center text-3xl text-white" id="topic">
          : تواصــل معنا
        </h1>
        <div className="relative rounded-full bg-white mt-6">
          <Image
            src={ContactIcon}
            alt="Contact Icon"
            className="w-18 h-18 astroman"
          />
        </div>
      </div>
      <form
        className="mx-4 mt-6 md:mx-12 text-right flex flex-col gap-8"
        id="arabicBold"
      >
        <input
          className="placeholder:text-right text-second shadow appearance-none border-second rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="اكتب اسمك هنا"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          className="placeholder:text-right text-second shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          placeholder="رقمك إذا تحب أتواصل معك واتساب"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
        />
        <textarea
          className="placeholder:text-right text-second shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          type="text"
          placeholder="رسالتــك هنــا"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button
          id="topic"
          type="submit"
          onClick={submitForm}
          className="rounded-md text-second bg-white w-[50%] text-center mx-auto mb-8"
        >
          إرسال
        </button>
        <ToastContainer />
      </form>
      <div className="flex justify-center items-center gap-4 text-second text-2xl font-extrabold">
        <Link
          href="https://www.instagram.com/alfnn_10/"
          className="bg-white rounded-full mb-2"
        >
          <FiInstagram className="m-2" />
        </Link>
        <Link
          href="https://www.behance.net/alfnndesign?log_shim_removal=1"
          className="bg-white rounded-full mb-2"
        >
          <BsBehance className="m-2" />
        </Link>
        <Link
          href="https://api.whatsapp.com/message/BFP3GRIKS2CNB1?autoload=1&app_absent=0"
          className="bg-white rounded-full mb-2"
        >
          <BsWhatsapp className="m-2" />
        </Link>
        <Link
          href="https://twitter.com/Alfn_10"
          className="bg-white rounded-full mb-2"
        >
          <FaXTwitter className="m-2" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCbN7yJqw1tPmiKUy-O2GycA"
          className="bg-white rounded-full mb-2"
        >
          <FiYoutube className="m-2" />
        </Link>
        <Link
          href="https://www.tiktok.com/@alfn_10"
          className="bg-white rounded-full mb-2"
        >
          <FaTiktok className="m-2" />
        </Link>
      </div>
      <Waves />
    </div>
  );
};

export default Contact;
