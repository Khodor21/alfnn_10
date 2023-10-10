"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { motion } from "framer-motion";
import Logo from "./assets/Logo.png";
import MainLogo from "./assets/MainLogo.png";
import NavSide from "./NavSide";
import Image from "next/image";
import Link from "next/link";
import { Main } from "next/document";

const Navbar = () => {
  const topDataVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <nav className="pt-10 px-6 relative z-10 bg-second arabic">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topDataVariants}
          transition={{ duration: 1.2 }}
        >
          {" "}
          <div className="flex justify-between items-center pb-6">
            <div>
              <button className="bg-white rounded-xl shadow-xl text-second lg:flex hidden">
                <Link href="tel:++966533762862">
                  <h5 className={`my-2 mx-4 flex gap-2`} id="englishBold">
                    <BsTelephoneInbound />
                    +966-533762862
                  </h5>
                </Link>
              </button>
              <button className="lg:hidden" onClick={handleNav}>
                {showNav ? (
                  <div className="flex flex-col">
                    <div className="navbar-container">
                      <NavSide onCloseNav={handleNav} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <HiOutlineMenuAlt3 className="text-3xl text-white" />
                  </div>
                )}
              </button>
            </div>
            <div id="arabic" className="text-white">
              <div className="lg:flex gap-14 hidden flex-row-reverse">
                <Link href="/" className="hover:text-main">
                  الرئيسية
                </Link>
                <Link href="#booking" className="hover:text-main">
                  حجز موعد
                </Link>{" "}
                <Link href="#location" className="hover:text-main">
                  موقعــنا{" "}
                </Link>
                <Link href="#Team" className="hover:text-main">
                  فريقنا
                </Link>
                <Link href="#footer" className="hover:text-main">
                  تواصل معنا
                </Link>
                <Link href="#testimonial" className="hover:text-main">
                  آراء المراجعــين
                </Link>
              </div>
            </div>
            <div className="flex pl-4">
              <Image src={MainLogo} className="w-16  mr-2" alt="فن فضائي" />
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
