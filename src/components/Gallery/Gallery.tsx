"use client";

import React, { useState, useEffect } from "react";
import Root from "./Root/Root";
import Selected from "./Selected/Selected";
import List from "./List/List";

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
    <Root>
      <Selected code={selectedKey} description={data[selectedKey]} />
      <List
        images={data}
        selected={selectedKey}
        updateSelected={setSelectedKey}
      />
    </Root>
  );
};

export default Gallery;
