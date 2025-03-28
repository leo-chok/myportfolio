// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div> {/* Ou <main> */}
      <Hero />
      {/* Utilise des conteneurs NES.css pour structurer si tu veux */}
      <section className="nes-container is-dark with-title">
        <About />
      </section>

      <section className="nes-container is-dark with-title">
        <Skills />
      </section>

      <section className="nes-container is-dark with-title">
        <Experience />
      </section>

      <section className="nes-container is-dark with-title">
        <Projects />
      </section>

      <section className="nes-container is-dark with-title">
        <Contact />
      </section>
    </div>
  );
}

export default App;