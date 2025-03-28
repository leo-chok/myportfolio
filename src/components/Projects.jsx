// src/components/Projects.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import jambonbeurreLogo from "../assets/image_jambonbeurre.png";
import jambonbeurreGif from "../assets/gif_jambonbeurre.gif";

// Données du projet (à compléter)
const projectData = [
  {
    id: "jambonbeurre",
    title: "JambonBeurre",
    // TODO: Demander à l'utilisateur une courte description (1-2 phrases)
    description:
      "JambonBeurre est une application mobile conçue pour aider les personnes à trouver des compagnons de repas et éviter de manger seul. L'idée est née du constat que de nombreuses personnes, qu'elles soient étudiantes, salariées ou en voyage, prennent leurs repas seules alors qu'elles aimeraient partager un moment convivial autour d'une table. Développé dans le cadre d'un projet de fin de formation à La Capsule, JambonBeurre a été réalisé par une équipe de cinq développeurs en mettant l'accent sur la simplicité, l'expérience utilisateur et l'interaction en temps réel.",
    imageUrl: jambonbeurreLogo,
    gifUrl: jambonbeurreGif,
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
    ],
    githubLink: "https://github.com/leo-chok/jambonbeurre_beta_frontend",
    liveDemoLink: "https://youtu.be/CRcOUVc1OcA",
  },
  // Tu pourras ajouter d'autres objets ici pour d'autres projets plus tard
];

// Couleurs pour les badges de techno (comme dans Skills)
const badgeColors = ["is-primary", "is-success", "is-warning", "is-error"];

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclencher un peu plus tôt pour les sections potentiellement plus hautes
  });

  return (
    <section
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`} // Animation sur la section globale
      style={{ marginBottom: "2rem" }}
    >
      {/* Titre Principal de la section Projets */}
      {/* On utilise un container SANS 'with-title' pour le titre principal cette fois */}
      <div
        className="nes-container is-dark"
        style={{ marginBottom: "1.5rem", textAlign: "center" }}
      >
        <h2>Mes Projets</h2>
      </div>

      {/* Mapper sur chaque projet dans projectData */}
      {projectData.map((project, index) => (
        // Utiliser un container NES pour chaque carte de projet
        // Note: On pourrait aussi appliquer l'animation à chaque carte individuellement
        // en appelant useInView à l'intérieur du map, mais commençons simple.
        <div
          key={project.id}
          className="nes-container is-dark with-title"
          style={{ marginBottom: "2rem", justifyContent: 'center', textAlign: "center" }}
        >
          {/* Titre du projet dans le style NES */}
          <h2>{project.title}</h2>

          {project.imageUrl ? (
            <div
              style={{
                display: "flex",
                maxWidth: "100%",
                marginBottom: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={project.gifUrl}
                alt={`Aperçu de ${project.title}`}
                style={{ maxWidth: "50%"}}
              />
            </div>
          ) : (
            <div
              className="nes-container is-dark"
              style={{
                padding: "2rem 1rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              <p>Bientôt une image ou un GIF ici !</p>
            </div>
          )}

          {/* Description du projet */}
          <p style={{ marginBottom: "1rem" }}>{project.description}</p>

          {/* Stack Technique (avec les badges) */}
          <div style={{ marginBottom: "1.5rem" }}>
            <p>
              <strong>Technologies utilisées :</strong>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem 2rem",
              }}
            >
              {project.techStack.map((tech, techIndex) => (
                <div
                  className="nes-badge"
                  key={tech}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <span
                    className={
                      badgeColors[(index + techIndex) % badgeColors.length]
                    }
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Liens GitHub / Démo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank" // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Sécurité pour target="_blank"
                className="nes-btn is-primary"
                style={{ marginRight: "1rem" }}
              >
                <i
                  className="nes-icon github is-small"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Code Source
              </a>
            )}
            {project.liveDemoLink ? (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nes-btn is-success"
              >
                <i
                  className="nes-icon external-link is-small"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Démo Live
              </a>
            ) : (
              <button type="button" className="nes-btn is-disabled">
                Démo Live (N/A)
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
