import React, { useEffect, useState } from "react";
import { imagesData } from "../data/imagesData";
import ImageCard from "./ImageCard";
import Search from "./Search";

const Art = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setImages(imagesData);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredImages = images.filter((imgs) =>
        imgs.name.toLowerCase().includes(searchTerm)
      );
      setImages(filteredImages);
    } else {
      setImages(imagesData);
    }
  }, [searchTerm]);

  return (
    <div className="mt-2">
      <div className="flex h-[15vh] items-center justify-center flex-col bg-[#25354c] mb-2 rounded-md">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,_1fr))] gap-4 auto-rows-[1fr] pb-12">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Art;
