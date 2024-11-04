import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom'; // useNavigate pour la navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './heroSection.css'; // Créer un fichier CSS pour styliser la section hero

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll automatique vers la section "À propos" si le hash est présent dans l'URL
  useEffect(() => {
    if (location.hash === '#about-section') {
      scroller.scrollTo('about-section', {
        smooth: true,
        duration: 500,
        offset: -45,
      });
    }
  }, [location]);

  // Fonction pour gérer le défilement vers la section "À propos"
  const handleAboutLinkClick = () => {
    if (location.pathname !== '/') {
      navigate('/#about-section'); // Redirection avec le hash
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Remonter en haut de la page d'accueil
    } else {
      scroller.scrollTo('about-section', {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  // Fonction pour gérer le lien "En savoir plus" même depuis d'autres pages
  const handleLearnMore = () => {
    if (location.pathname !== '/') {
      navigate('/#about-section'); // Redirection avec le hash
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Remonter en haut de la page d'accueil
    } else {
      scroller.scrollTo('about-section', {
        smooth: true,
        duration: 500,
        offset: -45,
      });
    }
  };

  return (
    <div>
      {/* Section Hero */}
      <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="hero-title">Bonjour, je suis Philippe Peeters</h1>
          <h2 className="hero-subtitle">Développeur web full stack</h2>
          <button onClick={handleLearnMore} className="btn btn-primary mt-3">En savoir plus</button>
        </div>
      </section>

      {/* Section À propos */}
      <Element name="about-section"> {/* Section cible pour le scroll */}
      <div className="about-section-container">
       <section className="about-section container mt-5" id="about-section">
          <div className="row">
            {/* Partie gauche : A propos */}
            <div className="col-md-6">
              <h3>À propos</h3>
              <p>Passionné par l’informatique et les nouvelles technologies, j’ai suivi une formation d’<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j’ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
              <p>Basé dans la région Bordelaise à Saint Seurin de Bourg. Je souhaite créer un cabinet de développeurs créateurs de sites web et web mobiles. Pour ce faire, j’ai besoin de consolider ma formation de <strong>développeur web full stack</strong>.</p>
              <p>J’accorde une attention particulière à la qualité du code que j’écris et je respecte les bonnes pratiques du web.</p>
            </div>

           {/* Partie droite : Image */}
            <div className="col-md-6">
              <img src="/img/philippe.jpg" alt="Philippe Peeters" className="img-fluid mx-auto d-block" />
              {/* Barre de compétences */}
              <div className="skills">
                <h5>Mes compétences</h5>

                <div className="skill">
                  <span>HTML5 90%</span>
                  <div className="progress">
                    <div className="progress-bar html-skill" style={{ width: '90%' }}></div>
                 </div>
                </div>

                <div className="skill">
                  <span>CSS3 80%</span>
                  <div className="progress">
                    <div className="progress-bar css-skill" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="skill">
                  <span>JavaScript 70%</span>
                  <div className="progress">
                    <div className="progress-bar java-script-skill" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="skill">
                  <span>PHP 60%</span>
                  <div className="progress">
                    <div className="progress-bar php-skill" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div className="skill">
                  <span>REACT 50%</span>
                  <div className="progress">
                    <div className="progress-bar react-skill" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Element>
    </div>
  );
};

export default Home;
