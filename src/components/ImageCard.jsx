import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiFileDownloadLine } from "react-icons/ri";
import Overlay from "./Overlay";
import Modal from "./Modal";

const ImageCard = ({ image }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full flex flex-col p-4 bg-[#25354c] shadow-[1px_8px_23px_rgba(0,0,0,0.25)] rounded-md"
        onClick={openModal}
      >
        <div className="flex-[2]">
          <img
            className="h-[350px] w-full object-cover"
            src={image.link}
            alt={image.name}
            loading="lazy"
          />
        </div>
        <div className="text-white flex justify-between pt-4">
          <p className="">{image.name}</p>
          <a href={image.link} target="_blank" rel="noreferrer">
            <RiFileDownloadLine size={30} />
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={image} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCard;
