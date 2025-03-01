import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-description">
          <h3>Saad_Hôtel</h3>
          <p>Profitez d'un séjour confortable et inoubliable dans nos chambres de S_H.</p>
        </div>
        <div className="footer-links">
          <a href="/accueil">Accueil</a>
          <a href="/chambres">Chambres</a>
          <a href="/reservation">Réservation</a>
          <a href="/clients">Contact</a>
        </div>
        <div className="footer-socials">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Saad_Hôtel. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
