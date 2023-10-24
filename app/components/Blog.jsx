"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MdOutlineDateRange } from "react-icons/md";
import BlogImg from "./assets/blog.png";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blog");
      setPosts(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching posts:", error);
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-third">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        transition={{ duration: 2 }}
      >
        {" "}
        <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 mx-8 mb-4">
          <h1 className="text-center text-2xl text-second" id="topic">
            هنا حتلاقي شروحات تصميمية رهيبة وبشكل بسيط
          </h1>
          <div className="relative bg-second rounded-full">
            <Image src={BlogImg} alt="Icon here" className="w-18 h-18 moon" />
          </div>
        </div>
      </motion.div>
      <div>
        {" "}
        {posts.map((blog, idx) => (
          <div key={idx}>
            {" "}
            <div className="flex flex-col items-center justify-center gap-2 text-center pt-6 pb-2">
              <Link href={blog.link}>
                <p
                  className="mb-4 mx-2 text-white text-xl bg-second"
                  id="topic"
                >
                  {blog.title}
                </p>
                <p className="mb-4 mx-6 text-second" id="topic">
                  {blog.introduction}
                </p>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-md mx-auto mb-4"
                  width={240}
                  height={240}
                />
              </Link>
              <div className="mx-8 font-bold flex text-white" id="englishBold">
                {blog.datePublished && typeof blog.datePublished === "string"
                  ? blog.datePublished.substring(0, 10)
                  : "Date not available"}{" "}
                : <span id="arabicBold"> نُشِــر فـي</span>{" "}
                <MdOutlineDateRange className=" ml-2 text-[25px] font-extrabold" />
              </div>
            </div>{" "}
            <hr className="w-[75%] text-white mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
