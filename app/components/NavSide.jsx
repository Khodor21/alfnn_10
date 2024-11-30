import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const NavSide = ({ isOpen, onCloseNav }) => {
  const handleCloseNav = () => {
    onCloseNav();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[9999] transition-opacity duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleCloseNav}
    >
      <div
        className={`bg-white shadow-lg h-full flex flex-col pb-20 justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex flex-col items-end gap-6 p-10 text-second"
          id="arabic"
        >
          <div
            className="text-2xl text-main relative z-10 cursor-pointer border-b-2 pb-3"
            onClick={handleCloseNav}
          >
            <AiOutlineClose />
          </div>
          <Link href="/" className="hover:text-main" onClick={handleCloseNav}>
            الرئيسية
          </Link>
          <Link
            href="#services"
            className="hover:text-main"
            onClick={handleCloseNav}
          >
            خدماتي
          </Link>
          <Link
            href="#works"
            className="hover:text-main"
            onClick={handleCloseNav}
          >
            أعمالي
          </Link>
          <Link
            href="#contact"
            className="hover:text-main"
            onClick={handleCloseNav}
          >
            تواصل معي
          </Link>
          <Link
            href="#testimonial"
            className="hover:text-main"
            onClick={handleCloseNav}
          >
            آراء العملاء
          </Link>
        </div>
        <div>Contact Info</div>
      </div>
    </div>
  );
};

export default NavSide;
