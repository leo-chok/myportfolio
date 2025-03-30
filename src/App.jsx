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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    <div style={{ flex: 1, marginInline: "auto", maxWidth: "1024px" }}>
      <Navbar />
      <section id="accueil">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div style={{ paddingTop: "80px" }}></div>
      <Footer />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <PacmanLoader color="#ffe300" loading={true} speedMultiplier={2} />
    </div>
  );
}

export default App;
