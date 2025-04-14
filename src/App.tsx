import Header from './components/Header/Header';
import ImageList from './components/Gallery/Gallery';
import images from "./images.json";

function App() {
  return (
    <>
      <Header />
      <ImageList data={images} />
    </>
  )
}

export default App
