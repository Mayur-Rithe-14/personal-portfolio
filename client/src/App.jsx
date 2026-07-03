// client/src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GithubActivity from "./components/GithubActivity";

import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GithubActivity />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
