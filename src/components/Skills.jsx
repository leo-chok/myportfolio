// src/components/Skills.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Liste des compétences par catégorie (inchangée)
const skillsData = {
  'Front-End': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'React Native', 'Tailwind', 'Styled Components'],
  'Back-End & Base de Données': ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'API REST'],
  'Outils & DevOps': ['Git', 'GitHub', 'CI/CD', 'Docker'],
  'Méthodologies & Gestion': ['Agile', 'Scrum', 'Trello', 'Notion', 'Clean Code'],
  'Outils Design & 3D': ['AutoCAD', 'Revit', 'Unreal Engine', 'D5Render', 'Blender'],
  'Soft Skills': ['Teamwork', 'Communication', 'Adaptabilité', 'Apprentissage', 'Logique', 'Curieux'],
};

// Couleurs pour les badges (inchangé)
const badgeColors = ['is-primary', 'is-success', 'is-warning', 'is-error']; // Ajouté 'is-dark' pour plus de variété

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`nes-container is-dark with-title fade-in-section ${inView ? 'is-visible' : ''}`}
      style={{ marginBottom: '2rem' }}
    >
      <h2 className="title">Compétences</h2>

      {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
        <div key={category} style={{ marginBottom: '1.5rem' }}>
          <p><strong>{category}</strong></p>
          {/* Conteneur Flex pour les badges */}
          <div style={{ display: 'flex', justifyContent:"center", flexWrap: 'wrap', gap: '1rem 2rem' /* Espace vertical / horizontal */ }}>
            {skills.map((skill, skillIndex) => {
              // Détermine la couleur du badge en boucle
              const colorClass = badgeColors[(categoryIndex + skillIndex) % badgeColors.length];

              return (
                // Utilisation de la structure nes-badge correcte
                // On utilise <div> au lieu de <a> car ce ne sont pas des liens
                <div className="nes-badge" key={skill} style={{ display: 'flex', justifyContent:"center"}}>
                  {/* Le span intérieur porte la classe de couleur */}
                  <span className={colorClass}>{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;