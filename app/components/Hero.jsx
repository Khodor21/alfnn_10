"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "./assets/Logo.png";
import Typical from "./react-typical";
import { motion } from "framer-motion";
import Planet from "./assets/test.jpg";
import Planet1 from "./assets/planet.png";
import "../waves.css";

import Waves from "./Waves";

const Hero = () => {
  const pictureVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-second h-[550px] md:h-full">
      {" "}
      <Image src={Planet} alt="planet" className="absolute w-[15%] planet" />
      <Image
        src={Planet1}
        alt="planet"
        className="absolute right-1 mt-4 w-[15%] planet1"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pictureVariants}
        transition={{ duration: 2 }}
        className="flex flex-col gap-20 md:gap-4 items-center justify-center h-80 md:h-full"
      >
        <div
          className="absolute uppercase text-center text-third"
          id="englishBold"
        >
          <div
            id="topic"
            className="flex justify-between md:justify-around mx-8 text-xl md:text-[35px]"
          >
            <div>أنــــــــا</div> <div className="">مــرحبًــا</div>
          </div>
          <div className="tracking-[0.8rem] md:tracking-[2rem] text-[50px] md:mt-10">
            <span className="text-main ">Graphic</span> designer
          </div>
        </div>
        <Image
          src={HeroImg}
          alt="heroBg"
          className="mx-auto pt-8 w-[60%] md:w-[35%] astroman"
        />
        <div id="arabic" className="text-center text-3xl text-main">
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
