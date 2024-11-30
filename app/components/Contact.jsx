"use client";
import React, { useState } from "react";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { BsBehance, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Waves from "./FinalWaves";
import ContactIcon from "./assets/Contact.png";
import Notification from "./Notification";

const Contact = () => {
  const [form, setForm] = useState({ name: "", number: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    visible: true,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      showNotification("error", "الاسم والرسالة مطلوبان.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("https://alfnn-backend.vercel.app/api/contact", form);
      showNotification("success", "شكرااا لك! رسالتك صارت عندي");
      setForm({ name: "", number: "", message: "" });
    } catch {
      showNotification(
        "error",
        "حدث خطأ أثناء تقديم الرسالة. يرجى المحاولة مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ visible: true, type, message });
    setTimeout(() => {
      setNotification({ visible: false, type: "", message: "" });
    }, 3000); // Auto-close after 3 seconds
  };

  return (
    <div className="bg-second" id="contact">
      <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 mx-8">
        <h1 className="text-center text-3xl text-white" id="topic">
          : تواصــل معنا
        </h1>
        <div className="relative rounded-full bg-white mt-6">
          <Image src={ContactIcon} alt="Contact Icon" className="w-18 h-18" />
        </div>
      </div>
      <form
        onSubmit={submitForm}
        className="mx-4 mt-6 md:mx-12 text-right flex flex-col gap-8"
        dir="rtl"
      >
        <input
          name="name"
          placeholder="اكتب اسمك هنا"
          value={form.name}
          onChange={handleChange}
          className="placeholder:text-right text-right p-2 rounded-xs text-second"
          id="arabicMedium"
        />
        <input
          name="number"
          type="tel"
          placeholder="رقمك إذا تحب أتواصل معك واتساب"
          className="placeholder:text-right text-right p-2 rounded-xs text-second"
          id="arabicMedium"
          value={form.number}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="رسالتــك هنــا"
          className="placeholder:text-right text-right p-2 rounded-xs text-second"
          id="arabicMedium"
          value={form.message}
          onChange={handleChange}
        />
        <button
          id="topic"
          type="submit"
          className="rounded-sm py-1 text-second bg-white w-[40%] text-center mx-auto mb-8"
        >
          {loading ? "جاري الإرسال..." : "إرســـال"}
        </button>
      </form>
      <div className="flex justify-center items-center gap-4 text-second text-2xl font-extrabold">
        {[
          {
            href: "https://www.instagram.com/alfnn_10/",
            icon: <FiInstagram />,
          },
          {
            href: "https://www.behance.net/alfnndesign?log_shim_removal=1",
            icon: <BsBehance />,
          },
          {
            href: "https://api.whatsapp.com/message/BFP3GRIKS2CNB1?autoload=1&app_absent=0",
            icon: <BsWhatsapp />,
          },
          {
            href: "https://twitter.com/Alfn_10",
            icon: <FaXTwitter />,
          },
          {
            href: "https://www.youtube.com/channel/UCbN7yJqw1tPmiKUy-O2GycA",
            icon: <FiYoutube />,
          },
          {
            href: "https://www.tiktok.com/@alfn_10",
            icon: <FaTiktok />,
          },
        ].map(({ href, icon }, index) => (
          <Link key={index} href={href} className="bg-white rounded-full mb-2">
            {React.cloneElement(icon, { className: "m-2" })}
          </Link>
        ))}
      </div>
      {notification.visible && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() =>
            setNotification({ visible: false, type: "", message: "" })
          }
        />
      )}
      <Waves />
    </div>
  );
};

export default Contact;
