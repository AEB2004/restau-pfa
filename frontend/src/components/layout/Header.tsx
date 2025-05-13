import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import axios from 'axios';// Assurez-vous d'importer axios correctement





const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const [user, setUser] = useState<any>(null);
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo1">
          <Link to="/">
            <span className="logo-text">L'Élégance</span>
          </Link>
        </div>

        <nav className={`nav-desktop ${isMenuOpen ? 'nav-mobile-active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reservation" className={location.pathname === '/reservation' ? 'active' : ''}>
                Réservation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                À Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          {user ? (
            <span className="user-name">👋 Bonjour, <strong>{user.user.name}</strong></span>
          ) : (
            <Link to="/login" className="btn btn-outline">
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;