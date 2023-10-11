"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import worksImage from "./assets/Work.png";
import project1A from "./assets/project1-A.jpg";
import project1B from "./assets/Project1-B.jpg";
import project1C from "./assets/Project 1-C.jpg";
import project1D from "./assets/Project 1-D.jpg";
import project2A from "./assets/Project2 -A.jpg";
import project2B from "./assets/Project2 -B.jpg";
import project2C from "./assets/Project2 -C.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    speed: 2000,
    autoplaySpeed: 2500,
  };

  const images = [project1A, project1B, project1C, project1D];
  const images2 = [project2A, project2B, project2C];

  const titleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const firstSlideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const secondSlideVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="works" className="py-8 bg-second">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 mx-8">
          <h1 className="text-center text-3xl text-main" id="topic">
            : جُــزء من أعمــالي
          </h1>
          <div className="relative rounded-full bg-main">
            <Image
              src={worksImage}
              alt="worksImage"
              className="w-18 h-18 astroman"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 1 }}
      >
        <div className="text-center mt-4 mb-8">
          <div className="inline-block align-middle w-1/4 border-b border-third"></div>
          <h1 className="inline-block px-2 text-xl text-third" id="topic">
            تصامــيم انستغرام
          </h1>
          <div className="inline-block align-middle w-1/4 border-b border-third"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center my-8">
        <div className="">
          <Slider {...settings}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={firstSlideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                ref={ref}
              >
                <Image
                  src={image}
                  alt="first service"
                  className="mx-auto rounded-xl border-2"
                  style={{ width: "300px", height: "auto" }} // Set a fixed width
                />
              </motion.div>
            ))}
          </Slider>
        </div>
        <div className="">
          <Slider {...settings}>
            {images2.map((image, index) => (
              <motion.div
                key={index}
                variants={secondSlideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                ref={ref}
              >
                <Image
                  src={image}
                  alt="first service"
                  className="mx-auto rounded-xl border-2"
                  style={{ width: "300px", height: "auto" }} // Set a fixed width
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 1 }}
      >
        <div className="text-center mt-4 mb-8">
          <div className="inline-block align-middle w-1/4 border-b border-third"></div>
          <h1 className="inline-block px-2 text-xl text-third" id="topic">
            مونتــاج ودعــواتـ
          </h1>
          <div className="inline-block align-middle w-1/4 border-b border-third"></div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mx-8 h-full">
        <motion.video
          autoPlay
          loop
          controls
          src={require("./assets/serviceVideo.mp4")}
          style={{ width: "300px", height: "auto" }} // Set a fixed width
          muted
          className="mx-8 rounded-lg"
          variants={secondSlideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.video
          autoPlay
          loop
          controls
          src={require("./assets/serviceVideo1.mp4")}
          style={{ width: "300px", height: "auto" }} // Set a fixed width
          muted
          className="mx-8 rounded-lg"
          variants={firstSlideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </div>
  );
};

export default Works;
