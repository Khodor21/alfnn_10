"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "./assets/Logo.png";
import Typical from "./react-typical";
import { motion } from "framer-motion";
import "../waves.css";

import Waves from "./Waves";

const Hero = () => {
  const pictureVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-second">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pictureVariants}
        transition={{ duration: 2 }}
        className="flex flex-col gap-20 md:gap-4 items-center justify-center h-80 md:h-full"
      >
        {/* <Waves /> */}
        <div
          className="absolute uppercase text-center text-[50px] text-third tracking-[0.8rem] md:tracking-[2rem] "
          id="englishBold"
        >
          <span className="text-main">Graphic</span> designer
        </div>
        <Image
          src={HeroImg}
          alt="heroBg"
          className="mx-auto my-auto w-[60%] md:w-[35%]  bounce"
        />
        <div id="arabic" className="text-center text-3xl text-main  ">
          <Typical
            steps={["  صاروخ جرافيكي", 3000, "كوكب محتوى", 3000]}
            loop={Infinity}
          />{" "}
        </div>
      </motion.div>
      <Waves />
    </div>
  );
};

export default Hero;
