import { useState } from 'react'
import Title from './components/Title';
import ImageList from './components/Gallery';
import images from "./images.json";

function App() {
  return (
    <>
      <Title />
      <ImageList data={images} />
    </>
  )
}

export default App
