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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
        "https://alfnn-backend.vercel.app/api/blog",
        formData
      );
      toast.success("شكرااا لك ! رسالتك صارت عندي");
      setLoading(false);
      setTitle("");
      setIntroduction("");
      setLink("");
      setFilePath(null);
      setUploadError("");
    } catch (error) {
      console.log("Error uploading post:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="py-8 w-full">
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
          <div className="grid grid-cols-1" id="arabicBold">
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
          <div className="mb-4 text-right" id="arabicBold">
            <label htmlFor="introduction" className="text-white">
              شرح يسير
            </label>
            <textarea
              value={introduction}
              onChange={handleIntroductionChange}
              className="w-full mt-2 p-2  rounded"
            />
          </div>
          <div className="mb-4 text-right" id="arabicBold">
            <label htmlFor="link" className="text-white">
              لينك البوست
            </label>
            <input
              value={link}
              onChange={handleLinkChnage}
              className="w-full mt-2 p-2  rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4" id="arabicBold">
            <div className="mb-4 text-right ">
              <label htmlFor="image" className="text-gray-700 text-white">
                الصورة
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-2 p-2   rounded bg-white placeholder:text-black"
              />
            </div>
            <div className="mb-4 text-right ">
              <label
                htmlFor="datePublished"
                className="text-gray-700 text-white"
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
          <div className="text-center" id="arabicBold">
            <button
              dir="rtl"
              type="submit"
              className="text-main bg-white py-2 px-4 rounded w-[50%]"
            >
              <p> {loading ? "جاري النشر..." : "نشـــر"}</p>
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
