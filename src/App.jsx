// src/App.jsx
import React, { useEffect, useState } from "react";

// Importer tous tes composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { PacmanLoader } from "react-spinners";
import RunningSeparator from './components/RunningSeparator';
import FontToggleButton from "./components/FontToggleButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    setTimeout(handleLoading, 3000);
  }, []);

  return !isLoading ? (
    <div style={{ flex: 1, marginInline: "auto" }}>
      <Navbar />
      <section id="accueil" style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
        <Hero />
      </section>
      <RunningSeparator />
      <section id="about" style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
        <About />
      </section>
      <section id="experience" style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
        <Experience />
      </section>
      <section id="skills" style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
        <Skills />
      </section>
      <section id="projects" style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
        <Projects />
      </section>
      <section id="contact" style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
        <Contact />
      </section>
      <Footer />
      <FontToggleButton />
    </div>
  ) : (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "98vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
    <h2>Chargement</h2>
      <PacmanLoader color="#ffe300" loading={true} speedMultiplier={2} />
    </div>
  );
}

export default App;
