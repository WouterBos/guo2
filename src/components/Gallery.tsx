"use client";

import React, { useState, useEffect } from "react";
import {
  GalleryRoot,
  ImageList,
  ImageListButton,
  ImageListCode,
  SelectedImage,
  ImageCode,
  ImageListContainer,
} from "./Gallery.styled";

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

  const handleClick = (key: string) => {
    setSelectedKey(key);
    window.history.pushState(null, "", `#photo${key}`);
  };

  return (
    <GalleryRoot>
      <SelectedImage>
        <img
          src={`/groetenuitoss/photos/${selectedKey}.avif`}
          alt={data[selectedKey]}
        />
        <div>
          <span>{data[selectedKey]}</span>
          <ImageCode>{selectedKey}</ImageCode>
        </div>
      </SelectedImage>
      <ImageListContainer>
        <ImageList>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <ImageListButton
                onClick={() => handleClick(key)}
                style={{
                  cursor: "pointer",
                }}
                className={key === selectedKey ? "selected" : ""}
              >
                <img
                  src={`/groetenuitoss/photos/${key}-thumbnail.avif`}
                  title={value}
                  alt={value}
                  loading="lazy"
                />
                <ImageListCode>{key}</ImageListCode>
              </ImageListButton>
            </li>
          ))}
        </ImageList>
      </ImageListContainer>
    </GalleryRoot>
  );
};

export default Gallery;
