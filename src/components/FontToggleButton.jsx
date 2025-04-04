// src/components/FontToggleButton.jsx
import React from 'react';
import { useFont } from '../context/FontContext'; // Importe le hook du contexte
import { Visible } from "@nsmr/pixelart-react";

function FontToggleButton() {
  const { fontMode, toggleFontMode } = useFont(); // Utilise le contexte

  // Utilise un bouton NES.css pour la cohérence
  return (
    <button
      type="button"
      className={`nes-btn font-toggle-button ${fontMode === 'pixel' ? 'is-primary' : 'is-success'}`} // Change de couleur selon le mode
      onClick={toggleFontMode}
      title={`Passer en police ${fontMode === 'pixel' ? 'classique' : 'pixel'}`}
      style={{ padding: '0.3rem 0.8rem'}}
    >
      {/* Affiche un texte ou une icône indiquant le mode actuel/l'action */}
      {fontMode === 'pixel' ? (<Visible size={24} style={{ margin: '0.0rem'}} />) : (<Visible size={24} style={{ margin: '0.0rem'}} />)}
      {/* Ou utilise des icônes si tu préfères */}
    </button>
  );
}

export default FontToggleButton;