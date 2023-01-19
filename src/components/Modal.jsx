import React from "react";
import { motion } from "framer-motion";

const Modal = ({ data }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  return (
    <motion.div
      className="w-[90%] h-[90%] flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
    >
      <motion.img
        className="w-full h-full object-contain"
        variants={imageVariants}
        src={data.link}
        alt={data.name}
        loading="lazy"
      />
    </motion.div>
  );
};

export default Modal;
