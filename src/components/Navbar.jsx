// src/components/Navbar.jsx
import React, { useState } from "react"; // Ne pas oublier useState
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  // --- État pour le menu mobile ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- Styles (mis ici pour l'instant) ---
  const navbarStyle = {
    margin: 0,
    position: "fixed",
    top: -1,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  const navContainerStyle = {
    backgroundColor: "#92CC41",
    marginBottom: "0",
    borderImageRepeat: "repeat",
    padding: "1rem 2rem",
  };

  const navContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    margin: "0 auto",
  };

  // Style pour le conteneur des liens desktop (sera caché sur mobile par CSS)
  const desktopLinksStyle = {
    with: "100%",
  };

  // Style de base pour les liens
  const linkStyle = {
    margin: "0 1em",
    color: "black",
    textDecoration: "none",
  };

  // Propriétés communes pour react-scroll
  const scrollProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -80, // Ajuste si nécessaire
    activeClass: "active", // Classe pour le style actif
  };

  // Style pour le bouton Hamburger (sera affiché uniquement sur mobile par CSS)
  const hamburgerButtonStyle = {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0.5rem", // Pour faciliter le clic
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav style={navbarStyle}>
      <div style={navContainerStyle}>
        <div style={navContentStyle}>
          {/* Côté Gauche: Logo/Nom */}
          <div>
            <Link
              to="accueil"
              {...scrollProps}
              offset={-100} // Offset différent pour le retour tout en haut ?
              style={{ ...linkStyle, fontWeight: "bold" }}
              className="nav-link"
            >
              Léo Stalhberger
            </Link>
          </div>

          {/* Côté Droit: Liens Desktop + Bouton Hamburger */}
          <div>
            {" "}
            {/* Conteneur pour gérer l'affichage flex à droite */}
            {/* Liens Desktop (classe pour cibler en CSS) */}
            <div style={desktopLinksStyle} className="desktop-nav-links">
              <Link
                to="about"
                {...scrollProps}
                style={linkStyle}
                className="nav-link"
              >
                À Propos
              </Link>
              <Link
                to="experience"
                {...scrollProps}
                style={linkStyle}
                className="nav-link"
              >
                Expériences
              </Link>
              <Link
                to="skills"
                {...scrollProps}
                style={linkStyle}
                className="nav-link"
              >
                Compétences
              </Link>
              <Link
                to="projects"
                {...scrollProps}
                style={linkStyle}
                className="nav-link"
              >
                Projets
              </Link>
              <Link
                to="contact"
                {...scrollProps}
                style={linkStyle}
                className="nav-link"
              >
                Contact
              </Link>
            </div>
            {/* Bouton Hamburger */}
            <button
              style={hamburgerButtonStyle}
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE CONDITIONNEL --- */}
      {isMobileMenuOpen && (
        <div className="mobile-menu open">
          {" "}
          {/* Ajout de la classe 'open' */}
          {/* Copie les mêmes liens que pour desktop, mais ajoute onClick={closeMobileMenu} */}
          <Link
            to="about"
            {...scrollProps}
            style={linkStyle}
            className="nav-link"
            onClick={closeMobileMenu}
          >
            À Propos
          </Link>
          <Link
            to="experience"
            {...scrollProps}
            style={linkStyle}
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Expériences
          </Link>
          <Link
            to="skills"
            {...scrollProps}
            style={linkStyle}
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Compétences
          </Link>
          <Link
            to="projects"
            {...scrollProps}
            style={linkStyle}
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Projets
          </Link>
          <Link
            to="contact"
            {...scrollProps}
            style={linkStyle}
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
