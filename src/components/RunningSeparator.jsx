// src/components/RunningSeparator.jsx
import React, { useState, useEffect, useRef } from "react"; // useRef n'est plus nécessaire ici

// --- Tes imports de GIFs ---
import yoshiRunGif from "../assets/yoshi-run.gif";
import sonicRunGif from "../assets/sonic-run.gif";
import pikachuRunGif from "../assets/pika-run.gif";
import kirbyRunGif from "../assets/kirby-run.gif";
import linkRunGif from "../assets/link-run.gif";
// ... autres imports ...

import "./RunningSeparator.css"; // Ton CSS avec l'animation et SANS durée fixe

// --- Tableau d'objets Personnage avec speed ---
const characters = [
  { id: "sonic", name: "Sonic", src: sonicRunGif, speed: 3 },
  { id: "yoshi", name: "Yoshi", src: yoshiRunGif, speed: 6 },
  { id: "link", name: "Link", src: linkRunGif, speed: 10 },
  { id: "pikachu", name: "Pikachu", src: pikachuRunGif, speed: 5 },
  { id: "kirby", name: "Kirby", src: kirbyRunGif, speed: 25 },
];

function RunningSeparator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Récupère le personnage actuel pour connaître sa vitesse
    const currentCharacter = characters[currentIndex];
    // Vérifie si le personnage et sa vitesse sont valides
    if (!currentCharacter || typeof currentCharacter.speed !== "number") {
      return; // Ne fait rien s'il y a un souci
    }

    // Calcule la durée en millisecondes
    const durationInMs = currentCharacter.speed * 1000;

    // Lance le timer pour changer de personnage APRES la fin de l'animation actuelle
    const timerId = setTimeout(() => {
      console.log(
        `Timer finished for index ${currentIndex}, changing character.`
      ); // Log de debug
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, durationInMs);

    // --- > Fonction de Nettoyage < ---
    // Sera appelée si currentIndex change AVANT la fin du timer,
    // ou si le composant est démonté. Annule le timer précédent.
    return () => {
      console.log(`Clearing timer for index ${currentIndex}`); // Log de debug
      clearTimeout(timerId);
    };

    // --- > Dépendances : currentIndex et characters < ---
    // Cet effet se relancera à chaque fois que currentIndex change
  }, [currentIndex, characters]); // characters est inclus au cas où le tableau changerait (peu probable ici)

  // --- Récupérer le personnage à afficher ---
  const characterToDisplay = characters[currentIndex];

  return (
    <div className="running-separator">
      {characterToDisplay && (
        <img
          // ref={imgRef} // Plus besoin
          // --- > La key est TOUJOURS importante pour le rendu propre <---
          key={currentIndex} // Ou key={characterToDisplay.id}
          src={characterToDisplay.src}
          alt={`Personnage ${characterToDisplay.name || "qui court"}`}
          className="running-character"
          // Applique la durée dynamiquement pour que le CSS la prenne en compte
          style={{
            animationDuration: `${characterToDisplay.speed}s`,
          }}
        />
      )}
    </div>
  );
}

export default RunningSeparator;
