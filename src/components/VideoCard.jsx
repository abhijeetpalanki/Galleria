import React from "react";
import { RiFileDownloadLine } from "react-icons/ri";

const VideoCard = ({ video }) => {
  return (
    <div className="w-full flex flex-col p-4 bg-[#25354c] shadow-[1px_8px_23px_rgba(0,0,0,0.25)] rounded-md">
      <div className="flex-[2]">
        <video controls autoPlay preload="none" className="h-[350px] w-full">
          <source src={video.link} type="video/mp4"></source>
        </video>
      </div>
      <div className="text-white flex justify-between pt-4">
        <p>{video.name}</p>

        <div className="flex flex-row gap-2">
          <p className="bg-gray-500 p-1 rounded-md">
            {new Date(video.createdAt).toDateString()}
          </p>
          <a href={video.link} target="_blank" rel="noreferrer">
            <RiFileDownloadLine size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
