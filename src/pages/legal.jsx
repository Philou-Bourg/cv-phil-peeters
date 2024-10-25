import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet'; // Pour désactiver l'indexation par les moteurs de recherche
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './legal.css';

const Legal = () => {
  return (
    <>
    <div className="ensemble">
      {/* Meta tag pour désactiver l'indexation */} 
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales</title>
      </Helmet>

      <div className="container mt-5">
        {/* Ajout du titre sur la page */}
        <h1 className="legal-title mb-4">MENTIONS LEGALES</h1>
        
        
        <Accordion defaultActiveKey="0">
          {/* Premier Menu : Éditeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header">
              <span>Éditeur du site</span>
            </Accordion.Header>
            <Accordion.Body>
              <p><strong>Philippe Peeters</strong></p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1 Lieu dit Bélia,</p>
              <p>33710 Saint Seurin de Bourg, France</p>
              <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+33662779709" className="text-primary">06 62 77 97 09</a></p>
              <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:peeters_phil50@hotmail.com" className="text-primary">peeters_phil50@hotmail.com</a></p>
            </Accordion.Body>
          </Accordion.Item>
          
          {/* Deuxième Menu : Hébergeur du site */}
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accordion-header">
              <span>Hébergeur</span>
            </Accordion.Header>
            <Accordion.Body>
              <p><strong>Always Data</strong></p>
              <p>91, rue du Faubourg Saint-Honoré,</p>
              <p>75008 Paris</p>
              <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer" className="text-primary">www.alwaysdata.com</a></p>
            </Accordion.Body>
          </Accordion.Item>
          
          {/* Troisième Menu : Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accordion-header">
              <span>Crédits</span>
            </Accordion.Header>
            <Accordion.Body>
              <p><strong>Crédits</strong></p>
              <p>Site développé par Philippe Peeters, étudiant du CEF, diplômé DESCF.</p>
              <p>Les images libres de droit sont issues du site <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer" className="text-primary">Pixabay</a>.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>  
    </>
  );
};

export default Legal;