"use client";

import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiAlertCircle, FiXCircle } from "react-icons/fi";
import { motion } from "framer-motion"; // Import framer-motion

const Notification = ({ type, message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000); // Notification disappears after 5 seconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "text-second border-second";
      case "error":
        return "text-red/80 border-red/40";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FiCheckCircle className="text-lg text-second" />;
      case "error":
        return <FiXCircle className="text-lg text-red/80" />;
      default:
        return null;
    }
  };

  return (
    show && (
      <motion.div
        dir="rtl"
        className={`fixed top-4 right-4 flex items-center gap-4 p-4 border-l-2 rounded shadow-lg bg-white ${getTypeStyles()}`}
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ zIndex: 1000 }}
      >
        <div className="flex-1">
          <p className="text-base" id="arabicBold">
            {message}
          </p>
        </div>
        <button onClick={onClose} className="text-gray/80 hover:text-gray">
          ✕
        </button>
      </motion.div>
    )
  );
};

export default Notification;
