import React from 'react';
import './services.css'; // Import du fichier CSS
import { MDBIcon } from 'mdbreact';

const Services = () => {
  return (
    <>
      {/* Ajout de l'image responsive hors de la section de services */}
      <img 
        src="/img/banner.jpg" 
        alt="Bannière de service" 
        className="banner"
      />

      <div className="services-background">
        <div className="container services-section">
          <h1>MON OFFRE DE SERVICES</h1>
          <p id="offre-services" className="offre-services">
            Voici les prestations sur lesquelles je peux intervenir
          </p>

          <div className="row services-row">
            {/* Premier pavé */}
            <div className="col-md-4 service-card">
              <div className="service-logo inverted-colors-screen">
                <MDBIcon fas icon="desktop" style={{ color: '#0d6efd', fontSize: '3rem' }} />
              </div>
              <h2>UX DESIGN</h2>
              <p>
                <strong>L'UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
              </p>
            </div>

            {/* Deuxième pavé */}
            <div className="col-md-4 service-card">
              <div className="service-logo">
                <MDBIcon fas icon="file-code" style={{ color: '#0d6efd', fontSize: '3rem' }} />
              </div>
              <h2>DÉVELOPPEMENT WEB</h2>
              <p>
                <strong>Le développement de sites web</strong> repose sur l'utilisation des langages <u style={{ textDecorationStyle: 'dotted' }}>HTML, CSS,</u> JavaScript et <u style={{ textDecorationStyle: 'dotted' }}>PHP</u>.
              </p>
            </div>

            {/* Troisième pavé */}
            <div className="col-md-4 service-card">
              <div className="service-logo">
                <MDBIcon fas icon="search-dollar" style={{ color: '#0d6efd', fontSize: '3rem' }}  />
              </div>
              <h2>RÉFÉRENCEMENT</h2>
              <p>
                <strong>Le référencement naturel d'un site, aussi appelé <u style={{ textDecorationStyle: 'dotted' }}>SEO,</u></strong> consiste à mettre des techniques en œuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;