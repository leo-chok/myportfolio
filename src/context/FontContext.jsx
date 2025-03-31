// src/context/FontContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Créer le contexte
const FontContext = createContext();

// 2. Créer le fournisseur (Provider)
export function FontProvider({ children }) {
  // 3. État pour la police ('pixel' ou 'classic')
  // Lit la valeur initiale depuis localStorage ou utilise 'pixel' par défaut
  const [fontMode, setFontMode] = useState(() => {
    const savedFont = localStorage.getItem('fontMode');
    return savedFont ? savedFont : 'pixel'; // 'pixel' est le défaut
  });

  // 4. Fonction pour basculer la police
  const toggleFontMode = () => {
    setFontMode(prevMode => {
      const newMode = prevMode === 'pixel' ? 'classic' : 'pixel';
      // Sauvegarde dans localStorage
      localStorage.setItem('fontMode', newMode);
      return newMode;
    });
  };

  // 5. Effet pour mettre à jour la classe sur <body> ET sauvegarder
  useEffect(() => {
    if (fontMode === 'classic') {
      document.body.classList.add('classic-font');
    } else {
      document.body.classList.remove('classic-font');
    }
    // La sauvegarde localStorage est maintenant dans toggleFontMode et l'initialisation
    // localStorage.setItem('fontMode', fontMode); // Déplacé
  }, [fontMode]); // Se déclenche quand fontMode change

  // 6. Fournir l'état et la fonction aux enfants
  return (
    <FontContext.Provider value={{ fontMode, toggleFontMode }}>
      {children}
    </FontContext.Provider>
  );
}

// 7. Hook personnalisé pour utiliser facilement le contexte
export function useFont() {
  return useContext(FontContext);
}