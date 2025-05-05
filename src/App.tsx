import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import images from "./images.json";

function App() {
  return (
    <>
      <Header />
      <Gallery data={images} />
    </>
  )
}

export default App
