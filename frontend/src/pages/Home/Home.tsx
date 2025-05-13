import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Utensils, Clock, Award, Users } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => observer.observe(el));

    return () => {
      featureElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">L'art de la gastronomie à portée de clic</h1>
          <p className="hero-subtitle">
            Réservez votre table, explorez notre menu exquis et vivez une expérience culinaire inoubliable
          </p>
          <div className="hero-actions">
            <Link to="/reservation" className="btn btn-primary hero-btn">
              Réserver une table <ChevronRight size={18} />
            </Link>
            <Link to="/menu" className="btn btn-outline hero-btn">
              Voir notre menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section" ref={featuresRef}>
        <div className="container">
          <h2 className="section-title">Une expérience gastronomique complète</h2>
          <p className="section-subtitle">
            Notre plateforme élégante combine fonctionnalité et design pour une gestion fluide de votre expérience culinaire
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Utensils size={28} />
              </div>
              <h3 className="feature-title">Réservation visuelle</h3>
              <p className="feature-description">
                Choisissez votre table préférée grâce à notre plan interactif de la salle
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={28} />
              </div>
              <h3 className="feature-title">Gestion des créneaux</h3>
              <p className="feature-description">
                Réservez votre table à l'heure qui vous convient avec notre système intelligent
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award size={28} />
              </div>
              <h3 className="feature-title">Menu digital</h3>
              <p className="feature-description">
                Explorez notre menu avec options de filtrage et commandez en toute simplicité
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={28} />
              </div>
              <h3 className="feature-title">Programme fidélité</h3>
              <p className="feature-description">
                Accumulez des points à chaque visite et bénéficiez d'avantages exclusifs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="preview section">
        <div className="container">
          <div className="preview-content">
            <div className="preview-text">
              <h2 className="section-title">Réservation intuitive et interactive</h2>
              <p className="preview-description">
                Notre système de réservation vous permet de visualiser l'ensemble de la salle et de sélectionner votre table idéale en fonction de vos préférences. Un code couleur intuitif vous indique la disponibilité en temps réel.
              </p>
              <Link to="/reservation" className="btn btn-primary mt-3">
                Essayer maintenant
              </Link>
            </div>
            <div className="preview-image table-selection-preview"></div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="menu-preview section">
        <div className="container">
          <div className="preview-content reverse">
            <div className="preview-image menu-preview-image"></div>
            <div className="preview-text">
              <h2 className="section-title">Menu digital personnalisable</h2>
              <p className="preview-description">
                Explorez notre menu complet avec des filtres adaptés à vos préférences alimentaires. De la haute gastronomie aux options végétariennes, sans gluten ou adaptées à d'autres régimes, trouvez facilement les plats qui vous conviennent.
              </p>
              <Link to="/menu" className="btn btn-primary mt-3">
                Découvrir notre menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Prêt à vivre l'expérience L'Élégance ?</h2>
          <p className="cta-description">
            Réservez dès maintenant et découvrez pourquoi notre restaurant est l'un des plus appréciés de Paris
          </p>
          <div className="cta-actions">
            <Link to="/reservation" className="btn btn-primary cta-btn">
              Réserver maintenant
            </Link>
            <Link to="/contact" className="btn btn-outline cta-btn">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;