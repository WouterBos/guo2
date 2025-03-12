"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface GalleryProps {
  data: { [key: string]: string };
}

const GalleryRoot = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 20rem 1fr;
`;

const ImageList = styled.ul`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 1;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
  }
  li + li {
    margin-top: 1rem;
  }
  li:hover {
    opacity: 0.9;
  }
`;

const SelectedImage = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  position: sticky;
  top: 0;
  align-self: start;
  margin: 0 auto;

  img {
    max-width: 100%;
    max-height: 80vh;
  }
`;

const ImageCode = styled.div`
  font-size: 0.9em;
  font-style: italic;
`;

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState<string>(Object.keys(data)[0]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#photo=")) {
      const photoKey = hash.split("#photo=")[1];
      if (data[photoKey]) {
        setSelectedKey(photoKey);
      }
    }
  }, [data]);

  const handleClick = (key: string) => {
    setSelectedKey(key);
    router.push(`#photo=${key}`, { scroll: false });
  };

  return (
    <GalleryRoot>
      <SelectedImage>
        <img src={`/groetenuitoss/photos/${selectedKey}.avif`} alt={data[selectedKey]} />
        <div>
          <span>{data[selectedKey]}</span>
          <ImageCode>{selectedKey}</ImageCode>
        </div>
      </SelectedImage>
      <ImageList>
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            onClick={() => handleClick(key)}
            style={{
              cursor: "pointer",
              backgroundColor: key === selectedKey ? "lightblue" : "white",
            }}
          >
            <img
              src={`/groetenuitoss/photos/${key}.avif`}
              style={{ width: "20rem" }}
              title={value}
              alt={value}
              loading="lazy"
            />
          </li>
        ))}
      </ImageList>
    </GalleryRoot>
  );
};

export default Gallery;
