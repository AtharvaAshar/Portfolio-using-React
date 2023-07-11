import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
