import React from "react";
import ImageList from "./components/Gallery";
import images from "../images.json";
import './globals.css';

export default function Home() {
  return (
    <div>
      <h1>Image List</h1>
      <ImageList data={images} />
    </div>
  );
}
