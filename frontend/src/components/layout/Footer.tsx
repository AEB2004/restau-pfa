import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">L'Élégance</h3>
            <p className="footer-tagline">
              Plateforme de réservation et de gestion gastronomique
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-group">
              <h4 className="footer-links-title">Navigation</h4>
              <ul className="footer-links-list">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Réservation</Link></li>
                <li><Link to="/about">À Propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Légal</h4>
              <ul className="footer-links-list">
                <li><Link to="/terms">Conditions générales</Link></li>
                <li><Link to="/privacy">Politique de confidentialité</Link></li>
                <li><Link to="/cookies">Politique de cookies</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Contact</h4>
              <ul className="footer-links-list contact-list">
                <li>15 Rue de la Gastronomie</li>
                <li>75008 Paris, France</li>
                <li>+33 1 23 45 67 89</li>
                <li>contact@lelegance.fr</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} L'Élégance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;