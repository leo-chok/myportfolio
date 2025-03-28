// src/components/Hero.jsx
import React from "react";
import monAvatar from "../assets/avatar.png";
import { Link } from "react-scroll"; // Importé !

function Hero() {
  // Propriétés communes pour les Links react-scroll
  const scrollProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -80, // Ajuste cette valeur ! Doit être environ -hauteurDeTaNavbar
    // activeClass: "active", // On ajoutera cette classe CSS plus tard si tu veux
  };
  return (
    <section
      className="nes-container is-dark is-centered"
      style={{ marginBottom: "2rem" }}
    >
      {/* Mettons le nom en couleur primaire */}
      <h1
        style={{
          marginBottom: "1rem",
          color: "#209cee" /* Ou utiliser une classe si tu préfères */,
        }}
      >
        Léo Stalhberger
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        {/* Mettons en évidence le rôle */}
        Développeur <span className="nes-text is-primary">Full-Stack</span> Web
        et Applications
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        Passionné de code et de d'expérience intéractive (Jeux Vidéo) <br></br>
        En recherche d'
        <span className="nes-text is-warning">alternance</span> (Objectif{" "}
        <span className="nes-text is-success">DevOps</span>)
      </p>

      <img
        src={monAvatar} // Utilise la variable importée comme source
        alt="Mon Avatar Pixel Art" // Texte alternatif important pour l'accessibilité !
        style={{
          width: "150px", // Ajuste la taille comme tu veux
          height: "150px",
          margin: "1.5rem 0", // Espace autour
          imageRendering: "pixelated", // Garde les pixels nets si l'image est redimensionnée !
        }}
      />

      <div>
        {/* Gardons le bouton primaire et mettons le second en succès (vert) */}
        <Link
          className="nes-btn is-primary nav-link"
          to="projects"
          {...scrollProps}
          style={{ marginRight: "1rem" }}
        >
          Mes Projets
        </Link>
        <a href="#contact" className="nes-btn is-success">
          Contactez-moi
        </a>
      </div>
    </section>
  );
}

export default Hero;
