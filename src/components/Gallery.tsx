"use client";

import React, { useState, useEffect } from "react";
import { GalleryRoot, SelectedImage, ImageList } from "./Gallery.styled";
import "./Gallery.css";

interface GalleryProps {
  data: { [key: string]: string };
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [selectedKey, setSelectedKey] = useState<string>(Object.keys(data)[0]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#photo")) {
      const photoKey = hash.split("#photo")[1];
      if (data[photoKey]) {
        setSelectedKey(photoKey);
      }
    }
  }, [data]);

  return (
    <GalleryRoot>
      <SelectedImage code={selectedKey} description={data[selectedKey]} />
      <ImageList
        images={data}
        selected={selectedKey}
        updateSelected={setSelectedKey}
      />
    </GalleryRoot>
  );
};

export default Gallery;
