import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tents from "./components/Tents";
function App() {
  return (
    <div>
      <>
        <body>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Tents />
          <Footer />
        </body>
      </>
    </div>
  );
}

export default App;
