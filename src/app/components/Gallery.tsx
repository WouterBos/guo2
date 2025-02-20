"use client";

import React, { useState } from "react";

interface ImageListProps {
  data: { [key: string]: string };
}

const ImageList: React.FC<ImageListProps> = ({ data }) => {
  const [selectedKey, setSelectedKey] = useState<string>(Object.keys(data)[0]);

  const handleClick = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <>
      <><img src={`/photos/${selectedKey}.avif`} style={{width: '30rem'}} /></>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            onClick={() => handleClick(key)}
            style={{
              cursor: "pointer",
              backgroundColor: key === selectedKey ? "lightblue" : "white",
            }}
          >
            <img src={`/photos/${key}.avif`} style={{width: '20rem'}} />
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageList;
