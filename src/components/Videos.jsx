import React, { useEffect, useState } from "react";
import { videosData } from "../data/videosData";
import VideoCard from "./VideoCard";
import Search from "./Search";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setVideos(videosData);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredVideos = videos.filter((vids) =>
        vids.name.toLowerCase().includes(searchTerm)
      );
      setVideos(filteredVideos);
    } else {
      setVideos(videosData);
    }
  }, [searchTerm]);

  return (
    <div className="mt-2">
      <div className="flex h-[15vh] items-center justify-center flex-col bg-[#25354c] mb-2 rounded-md">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,_1fr))] gap-4 auto-rows-[1fr] pb-12">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
