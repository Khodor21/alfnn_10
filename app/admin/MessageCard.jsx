"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MessageCard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="text-center mt-4 mb-8">
        <div className="inline-block align-middle w-1/4 border-b border-third"></div>
        <h1 className="inline-block px-2 text-xl text-third" id="topic">
          رســـائــل مــن المـوقــع
        </h1>
        <div className="inline-block align-middle w-1/4 border-b border-third"></div>
      </div>
      <Slider {...settings}>
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
            >
              <div className="bg-white text-third rounded p-4 hover:shadow-lg flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold">{message.name}</h3>
                <p className="text-gray-600 mb-4">{message.number}</p>
                <p className="text-second">{message.message}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MessageCard;
