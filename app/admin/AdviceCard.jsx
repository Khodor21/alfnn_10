"use client";
import React, { useState } from "react";
import axios from "axios";
import Icon from "../components/assets/Logo.png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Blog() {
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [filePath, setFilePath] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [datePublished, setDatePublished] = useState("");
  const [link, setLink] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };
  const handleLinkChnage = (e) => {
    setLink(e.target.value);
  };
  const handleImageChange = (e) => {
    setFilePath(e.target.files[0]);
  };
  const handleDatePublishedChange = (event) => {
    setDatePublished(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!filePath) {
      setUploadError("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", filePath);
    formData.append("title", title);
    formData.append("introduction", introduction);
    formData.append("link", link);
    formData.append("datePublished", datePublished);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/blog",
        formData
      );
      toast.success("شكرااا لك ! رسالتك صارت عندي");

      setTitle("");
      setIntroduction("");
      setLink("");
      setFilePath(null);
      setUploadError("");
    } catch (error) {
      console.log("Error uploading post:", error);
    }
  };

  return (
    <>
      <div className="py-8 w-full" id="arabic">
        <form
          onSubmit={handleSubmit}
          className=" p-4 rounded-lg bg-main mx-4 md:mx-10"
        >
          <div className="flex items-center justify-center text-white font-extrabold text-2xl mb-2">
            <Image src={Icon} alt="Logo Icon" className="w-16 " />
          </div>
          <h1 className="text-white text-center mb-4 text-xl" id="topic">
            نشر البوســت
          </h1>
          <div className="grid grid-cols-1">
            <div className="mb-4 text-right ">
              <label htmlFor="title" className="text-gray-700 m-2 text-white">
                العنوان
              </label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="w-full mt-2 p-2   rounded placeholder:text-black"
              />
            </div>
          </div>
          <div className="mb-4 text-right">
            <label htmlFor="introduction" className="text-white">
              شرح يسير
            </label>
            <textarea
              value={introduction}
              onChange={handleIntroductionChange}
              className="w-full mt-2 p-2  rounded"
            />
          </div>
          <div className="mb-4 text-right">
            <label htmlFor="link" className="text-white">
              لينك البوست
            </label>
            <input
              value={link}
              onChange={handleLinkChnage}
              className="w-full mt-2 p-2  rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4" id="english">
            <div className="mb-4 text-right ">
              <label
                htmlFor="image"
                className="text-gray-700 text-white"
                id="arabic"
              >
                الصورة
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-2 p-2   rounded bg-white placeholder:text-black"
              />
            </div>
            <div className="mb-4 text-right " id="english">
              <label
                htmlFor="datePublished"
                className="text-gray-700 text-white"
                id="arabic"
              >
                تاريخ النشر
              </label>
              <input
                type="date"
                id="datePublished"
                value={datePublished}
                onChange={handleDatePublishedChange}
                className="w-full mt-2 p-2   rounded text-right"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-main bg-white py-2 px-4 rounded w-[50%]"
            >
              <h1> تأكيد</h1>
            </button>
          </div>
          <ToastContainer />
          {uploadError && <p className="text-red-500">{uploadError}</p>}
        </form>
      </div>
    </>
  );
}
export default Blog;
