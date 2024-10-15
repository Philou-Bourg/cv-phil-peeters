import React from 'react';
import './portfolio.css'; // Importer le fichier CSS

const Portfolio = () => {
  return (
    <>
      <img 
        src="/img/banner.jpg" 
        alt="Bannière de portfolio" 
        className="banner"
      />

      <div className="portfolio-background">
        <div className="container portfolio-section">
          <h1>MON PORTFOLIO</h1>
          <p id="portfolio-description" className="portfolio-description">
            Voici quelques-unes de mes réalisations.
          </p>

          <div className="row portfolio-row">
            {/* Premier pavé */}  
            <div className="col-md-4 portfolio-card">
              <img src="/img/portfolio/fresh-food.jpg" alt="Fresh Food" className="portfolio-image" />
              <h2>Fresh Food</h2>
              <p className="project-description">
                Réalisation d'un site avec commandes en ligne.
              </p>
              <a href="/fresh-food-image" className="view-link">Voir</a>
              <p className="additional-text">Site réalisé avec PHP et MySQL</p>
            </div>  

            {/* Deuxième pavé */}
            <div className="col-md-4 portfolio-card">
              <img src="/img/portfolio/restaurant-japonais.jpg" alt="Restaurant japonais" className="portfolio-image" />
              <h2>Restaurant Akira</h2>
              <p className="project-description">
                Réalisation d'un site vitrine.
              </p>
              <a href="/resto-jap-image" className="view-link">Voir</a>
              <p className="additional-text">Site réalisé avec WordPress</p>
            </div>

            {/* Troisième pavé */}
            <div className="col-md-4 portfolio-card">
              <img src="/img/portfolio/espace-bien-etre.jpg" alt="Photo Zen" className="portfolio-image" />
              <h2>Espace bien-être</h2>
              <p className="project-description">
                Réalisation d'un site vitrine pour un praticien de bien-être.
              </p>
              <a href="/espace-bien-etre-image" className="view-link">Voir</a>
              <p className="additional-text">Site réalisé en HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;