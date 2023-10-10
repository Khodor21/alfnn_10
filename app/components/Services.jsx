"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import servicesImg from "./assets/services.png";
import service1 from "./assets/service1.png";
import service2 from "./assets/service2.png";
import service3 from "./assets/service3.png";
import service4 from "./assets/service4.png";
import service5 from "./assets/service5.png";
import service6 from "./assets/service6.png";
import ScrollTrigger from "react-scroll-trigger";

const Services = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services");
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight;
        setInView(inView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ScrollTrigger
      onEnter={() => setInView(true)}
      onExit={() => setInView(false)}
    >
      <div id="services" className={`py-8 bg-main ${inView ? "animate" : ""}`}>
        <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 mx-8">
          <h1 className="text-center text-3xl text-second" id="topic">
            : خدماتــــي
          </h1>
          <div className="relative bg-second rounded-full">
            <Image
              src={servicesImg}
              alt="servicesImg"
              className="w-18 h-18 rocket"
            />
          </div>
        </div>

        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center my-8">
            <motion.div variants={item}>
              <div>
                <Image
                  src={service3}
                  alt="first service"
                  className="w-28 h-28 mx-auto rounded-full border-2 bg-third"
                />
                <h1 className="text-white mt-2" id="topic">
                  مونتــاج ودعــواتـ
                </h1>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <div>
                <Image
                  src={service1}
                  alt="first service"
                  className="w-28 h-28 mx-auto rounded-full border-2 bg-second"
                />
                <h1 className="text-white mt-2" id="topic">
                  تصميــمات متنوّعــة
                </h1>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <div>
                <Image
                  src={service2}
                  alt="first service"
                  className="w-28 h-28 mx-auto rounded-full border-2 bg-third"
                />
                <h1 className="text-white mt-2" id="topic">
                  عــروض وتلخيــصات
                </h1>
              </div>{" "}
            </motion.div>

            <motion.div variants={item}>
              <div>
                <Image
                  src={service4}
                  alt="first service"
                  className="w-28 h-28 mx-auto"
                />
                <h1 className="text-white mt-2" id="topic">
                  خــارج الصــندوقـ
                </h1>
              </div>{" "}
            </motion.div>

            <motion.div variants={item}>
              <div>
                <Image
                  src={service6}
                  alt="first service"
                  className="w-28 h-28 mx-auto"
                />
                <h1 className="text-white mt-2" id="topic">
                  ســعر منــافس{" "}
                </h1>
              </div>{" "}
            </motion.div>

            <motion.div variants={item}>
              <div>
                <Image
                  src={service5}
                  alt="first service"
                  className="w-28 h- mx-auto"
                />
                <h1 className="text-white mt-2" id="topic">
                  سرعـة و دقّــة
                </h1>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ScrollTrigger>
  );
};

export default Services;
