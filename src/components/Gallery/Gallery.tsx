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

  useEffect(() => {
    const keys = Object.keys(data);
    const index = keys.indexOf(selectedKey);
    const toPreload = [keys[index - 1], keys[index + 1]].filter(Boolean);
    toPreload.forEach((key) => {
      const img = new Image();
      img.src = `/groetenuitoss/photos/${key}.avif`;
    });
  }, [selectedKey, data]);

  useEffect(() => {
    const keys = Object.keys(data);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "C") {
        const text = document.getElementById("selected-code")?.textContent?.trim() ?? "";
        navigator.clipboard.writeText(text);
        return;
      }
      if (e.shiftKey && e.key === "D") {
        const desc = document.getElementById("selected-description-text")?.textContent?.trim() ?? "";
        const code = document.getElementById("selected-code")?.textContent?.trim() ?? "";
        navigator.clipboard.writeText(`${desc}\n${code}`);
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setSelectedKey((current) => {
          const index = keys.indexOf(current);
          if (e.key === "ArrowLeft" && index > 0) {
            const newKey = keys[index - 1];
            window.history.replaceState(null, "", `#photo${newKey}`);
            return newKey;
          }
          if (e.key === "ArrowRight" && index < keys.length - 1) {
            const newKey = keys[index + 1];
            window.history.replaceState(null, "", `#photo${newKey}`);
            return newKey;
          }
          return current;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
