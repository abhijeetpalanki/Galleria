import React from "react";
import { RiFileDownloadLine } from "react-icons/ri";

const ImageCard = ({ image }) => {
  return (
    <div className="w-full flex flex-col p-4 bg-[#25354c] shadow-[1px_8px_23px_rgba(0,0,0,0.25)] rounded-md">
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
        <a href={image.link}>
          <RiFileDownloadLine size={30} />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
