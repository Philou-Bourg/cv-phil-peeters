import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1: Informations de contact et réseaux sociaux */}
          <div className="col-md-3">
            <h5>Philippe Peeters</h5>
            <p>Adresse : 1 lieu dit Bélia, 33710 Saint Seurin de Bourg, France</p>
            <p>Téléphone : 06 62 77 97 09</p>
            <div className="d-flex">
              <a
                href="https://github.com/Philou-Bourg"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/philippe-peeters-a6a6645a/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens vers les pages */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="custom-link" onClick={scrollToTop}>Accueil</Link></li>
              {location.pathname === '/' ? (
                <li>
                  <ScrollLink to="about-section" smooth={true} duration={500} className="custom-link">
                    À propos
                  </ScrollLink>
                </li>
              ) : (
                <li>
                  <Link to="/#about-section" className="custom-link" onClick={scrollToTop}>
                    À propos
                  </Link>
                </li>
              )}
              <li><Link to="/services" className="custom-link">Services</Link></li>
              <li><Link to="/contact" className="custom-link">Me contacter</Link></li>
              <li><Link to="/legal" className="custom-link">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Dernières réalisations */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/fresh-food-image" className="custom-link">Fresh food</Link></li>
              <li><Link to="/resto-jap-image" className="custom-link">Restaurant Akira</Link></li>
              <li><Link to="/espace-bien-etre-image" className="custom-link">Espace bien-être</Link></li>
            </ul>
          </div>

          {/* Colonne 4: Derniers articles de blog */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog/article1" className="custom-link">Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog/article2" className="custom-link">Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog/article3" className="custom-link">Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer text-center mt-3">
        <div className="footer-bar">
          <div className="container">
            <p className="footer-text">&copy; Designed by Philippe Peeters</p>
          </div>
        </div>
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="btn"
            style={{ backgroundColor: '#298eff', color: '#fff' }}
            aria-label="Retour en haut de la page"
          >
            Retour en haut
          </button>
        )}
      </div>

      {/* Styles pour les liens personnalisés et les icônes */}
      <style jsx>{`
        .custom-link {
          color: #444; /* Texte des liens en gris foncé */
          position: relative;
          padding-left: 20px; 
          text-decoration: none;
          
        }

        .custom-link::before {
          content: '>';
          position: absolute;
          left: 0;
          color: #0d6efd; /* Le symbole > en #0d6efd */
          font-weight: 900; /* Mettre le symbole > en gras */
          font-size: 1.5em; /* Augmenter la taille du symbole */
          transform: translateY(-0.30em); /* J'ajuste la position verticale du symbole */
          text-shadow: 0.5px 0.5px 0 #0d6efd, -0.5px -0.5px 0 #0d6efd; /* Ombre en bleu clair */
        }

        .custom-link:hover {
          text-decoration: underline;
        }

        .social-icon {
          margin-right: 10px;
          color: #000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.3s ease, border 0.3s ease;
        }

        .social-icon i {
          font-size: 20px;
        }

        .github {
          background-color: #f8f9fa;
          border-radius: 50%;
          padding: 10px;
          width: 40px;
          height: 40px;
          border: 2px solid transparent;
        }

        .twitter {
          color: #fff;
          background-color: #000;
          padding: 10px;
          width: 40px;
          height: 40px;
          border: 10px solid #f8f9fa;
          transition: background-color 0.3s ease;
        }

        .linkedin {
          background-color: #f8f9fa;
          padding: 10px;
          width: 40px;
          height: 40px;
          border: 2px solid transparent;
        }

        .social-icon:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }

        .github:hover,
        .linkedin:hover {
          background-color: rgba(255, 255, 255, 0.8);
          border: 2px solid #000;
        }

        .twitter:hover {
          border: 2px solid #000;
          background-color: #fff;
          color: #000;
        }

        .footer-bar {
          background-color: #000; /* Fond noir */
          padding: 10px 0; /* Optionnel : Ajoute un peu de padding vertical */
        }

        .footer-text {
          color: #fff; /* Texte blanc */
          margin: 0; /* Supprime les marges par défaut */
          text-align: center; /* Je centre le texte */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
