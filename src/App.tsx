import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import images from "./images.json";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Gallery data={images} />
      <Footer style={{ flexGrow: 1 }}>
        <p>
          All photos on this website are free to use but not to sell.<br />
          This website is <a href="https://github.com/WouterBos/guo2">built with GUOS</a>.<br />
          <a href="mailto:wouter@bososs.nl">wouter@bososs.nl</a>
        </p>
      </Footer>
    </>
  );
}

export default App;
