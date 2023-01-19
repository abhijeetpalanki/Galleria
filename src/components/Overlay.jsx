import React from "react";
import { motion } from "framer-motion";

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };
  return (
    <motion.div
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      className="fixed top-0 left-0 w-full h-full bg-black/60 z-[100] flex justify-center items-start p-[40px_0px] xl:justify-center xl:items-center"
      onClick={close}
      key={"overlay"}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
