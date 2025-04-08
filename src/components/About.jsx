// src/components/About.jsx
import React from "react";

import { useInView } from "react-intersection-observer";

function About() {
  
  const { ref, inView } = useInView({
    
    triggerOnce: true, // Déclenche l'animation une seule fois
    threshold: 0.1, // Pourcentage de l'élément qui doit être visible pour déclencher (0.1 = 10%)
    rootMargin: "0px 0px -50px 0px",
  });

  return (

    <section
      ref={ref} // La ref pour que useInView observe cet élément
      className={`nes-container is-dark is-rounded with-title fade-in-section ${
        inView ? "is-visible" : ""
      }`} // Ajoute 'is-visible' quand inView est true
      style={{ marginBottom: "5rem"}}
    >
      <h1 className="title">À Propos de moi</h1>

      
      <p>
        Après plusieurs années dans la conception et l'infographie 3D, j'ai
        choisi de me réorienter vers ma passion pour la technologie en devenant{" "}
        <span className="nes-text is-primary">Développeur Full-Stack</span>.
      </p>
      
      <p>
        Curieux et passionné par l'évolution technologique, notamment la{" "}
        <span className="nes-text is-primary">VR/AR</span>, je cherche
        maintenant une <span className="nes-text is-warning">alternance</span>{" "}
        pour continuer à monter en compétences, avec un intérêt marqué pour les
        pratiques <span className="nes-text is-success">DevOps</span>.
        J'apprends vite et j'aime travailler en équipe sur des projets innovants
        !
      </p>
    </section>
  );
}

export default About;
