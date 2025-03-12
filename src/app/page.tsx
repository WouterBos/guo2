import React from "react";
import ImageList from "./components/Gallery";
import Title from "./components/Title";
import images from "../images.json";
import './globals.css';

export default function Home() {
  return (
    <div>
      <Title />
      <ImageList data={images} />
    </div>
  );
}
