import React from 'react';
import './contact.css'; // Importer le fichier CSS pour la page Contact

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">ME CONTACTER</h1>
        <p className="contact-description">
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className="contact-divider"></div>

        <div className="contact-panes">
          {/* Pavé Formulaire de Contact */}
          <div className="contact-form">
            <h3 className="form-title">Formulaire de contact</h3>
            <div className="form-divider"></div>
            <form>
              <div className="form-group">
                <input type="text" className="form-control name-field" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control email-field" placeholder="Votre adresse email" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control phone-field" placeholder="Votre numéro de téléphone" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Sujet" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary send-btn">Envoyer</button>
            </form>
          </div>

          {/* Pavé Mes coordonnées */}
          <div className="contact-info">
            <h3 className="info-title">Mes coordonnées</h3>
            <div className="info-divider"></div>
            <p>
              <i className="fas fa-map-marker-alt"></i> 1 lieu dit Bélia, 33710 Saint Seurin De Bourg, France
            </p>
            <p>
              <i className="fas fa-mobile-alt"></i> 06 62 77 97 09
            </p>
            <div style={{ 
                position: 'relative', /* Positionnement relatif pour le conteneur */
                overflow: 'hidden', /* Cache tout ce qui dépasse */
                marginTop: '10px', /* Espace au-dessus de l'iframe */
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d728.5866619391278!2d-0.5791330714749477!3d45.04695399818433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDAyJzQ5LjAiTiAwwrAzNCc0Mi42Ilc!5e1!3m2!1sfr!2sfr!4v1726646767669!5m2!1sfr!2sfr"
                style={{ 
                  border: '0', 
                  width: 'calc(100% + 40px)', /* L'iframe s'étend à 100% + 40px */
                  height: '325px', /* Ajustement de la hauteur */
                  aspectRatio: '4 / 3', /* Maintient le ratio largeur/hauteur */
                  marginLeft: '-20px', /* Décalage à gauche pour aligner avec le bord droit */
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Contact;