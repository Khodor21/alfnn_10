"use client";
import Image from "next/image";
import React from "react";
import worksImage from "./assets/Testimonial.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TestimonialA from "./assets/Test1.jpg";
import TestimonialB from "./assets/Test2.png";
import TestimonialC from "./assets/Test3.png";

import MainLogo from "./assets/MainLogo.png";
import TestLogo from "./assets/TestLogo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    speed: 2000,
    autoplaySpeed: 4000,
  };
  const images = [TestimonialA, TestimonialB, TestimonialC];

  return (
    <div className=" bg-main" id="testimonial">
      <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 mx-8">
        <h1 className="text-center text-3xl text-second " id="topic">
          رســائل حُــبّ مِــن عُمــلاء فَــنّ فضــائي{" "}
        </h1>
        <div className="relative rounded-full bg-second mt-6">
          <Image
            src={worksImage}
            alt="worksImage"
            className="w-18 h-18 astroman"
          />{" "}
        </div>
      </div>
      <div className="bg- rounded-lg border-0">
        <p
          id="english"
          className="flex justify-center items-center py-6 text-white text-3xl"
        >
          <BiSolidQuoteAltLeft />{" "}
        </p>

        <div className=" w-full card">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  priority
                  src={image}
                  alt="first service"
                  className="mx-auto rounded-xl border-2"
                  style={{ width: "300px", height: "auto" }} // Set a fixed width
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Image
            alt="Testimonial"
            className="w-[25%] md:w-[15%] lg:w-[5%]"
            src={MainLogo}
          />
          <Image
            alt="Testimonial"
            className="w-[25%] md:w-[15%] lg:w-[5%]"
            src={TestLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
