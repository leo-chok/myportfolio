// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Importé !
// import './Navbar.css';

function Navbar() {
  // Styles ... (inchangés par rapport à avant)
  const navbarStyle = { position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 };
  const navContainerStyle = { backgroundColor: '#212529', marginBottom: '0', borderImageRepeat: 'repeat', padding: '0.5rem 1rem' };
  const navContentStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' };
  const linkContainerStyle = { display: 'flex', gap: '1rem' };
  const linkStyle = { color: '#fff', textDecoration: 'none', cursor: 'pointer' }; // Style de base

  // Propriétés communes pour les Links react-scroll
  const scrollProps = {
    smooth: true,
    duration: 1000,
    spy: true,
    offset: -80, // Ajuste cette valeur ! Doit être environ -hauteurDeTaNavbar
    // activeClass: "active", // On ajoutera cette classe CSS plus tard si tu veux
  };

  return (
    <nav style={navbarStyle}>
      <div className="nes-container is-dark" style={navContainerStyle}>
          <div style={navContentStyle}>
              {/* Logo/Nom -> Link vers 'accueil' */}
              <div>
                  <Link
                    to="accueil" // ID de la section Hero dans App.jsx
                    {...scrollProps} // Applique les props communes
                    style={{ ...linkStyle, fontWeight: 'bold' }}
                    className="nav-link" // Classe pour style actif
                  >
                    Léo Stalhberger
                  </Link>
              </div>

              {/* Liens de Navigation -> Links vers les sections */}
              <div style={linkContainerStyle}>
                  <Link to="about" {...scrollProps} style={linkStyle} className="nav-link">À Propos</Link>
                  <Link to="experience" {...scrollProps} style={linkStyle} className="nav-link">Expériences</Link>
                  <Link to="skills" {...scrollProps} style={linkStyle} className="nav-link">Compétences</Link>
                  <Link to="projects" {...scrollProps} style={linkStyle} className="nav-link">Projets</Link>
                  <Link to="contact" {...scrollProps} style={linkStyle} className="nav-link">Contact</Link>
              </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;