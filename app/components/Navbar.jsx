"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { motion } from "framer-motion";
import MainLogo from "./assets/MainLogo.png";
import NavSide from "./NavSide";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const topDataVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div>
      <nav className="pt-10 pb-2 px-6 relative z-10 bg-second arabic">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topDataVariants}
          transition={{ duration: 1.2 }}
        >
          <div className="flex justify-between items-center pb-6">
            <div>
              <button className="bg-white rounded-xl shadow-xl text-second lg:flex hidden">
                <Link href="tel:+966533762862">
                  <h5 className="my-2 mx-4 flex gap-2" id="englishBold">
                    <BsTelephoneInbound />
                    +966-533762862
                  </h5>
                </Link>
              </button>
              {/* Hamburger Menu for Smaller Screens */}
              <button className="lg:hidden" onClick={handleNav}>
                <HiOutlineMenuAlt3 className="text-3xl text-white" />
              </button>
            </div>
            <div id="arabic" className="text-white">
              <div className="lg:flex gap-14 hidden text-lg flex-row-reverse">
                <Link href="/" className="hover:text-main">
                  الرئيسية
                </Link>
                <Link href="#services" className="hover:text-main">
                  خدماتي
                </Link>
                <Link href="#works" className="hover:text-main">
                  أعمالي
                </Link>
                <Link href="#contact" className="hover:text-main">
                  تواصل معي
                </Link>
                <Link href="#testimonial" className="hover:text-main">
                  آراء العملاء
                </Link>
              </div>
            </div>
            <div className="flex pl-4">
              <Image src={MainLogo} className="w-16 mr-2" alt="فن فضائي" />
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Sidebar Component */}
      <NavSide isOpen={showNav} onCloseNav={handleNav} />
    </div>
  );
};

export default Navbar;
