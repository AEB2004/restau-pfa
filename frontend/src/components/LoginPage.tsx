import React from 'react';
import { Utensils } from 'lucide-react';
import SocialLoginButtons from './SocialLoginButtons';
import '../styles/LoginPage.css';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="left-panel">
          <div className="branding">
            <div className="logo-container">
              <Utensils className="logo-icon" size={32} />
            </div>
            <h1 className="brand-name">L'Élégance</h1>
            <p className="brand-tagline">FINE DINING EXPERIENCE</p>
          </div>
          
          <blockquote className="quote">
            "A culinary journey that transcends ordinary dining."
          </blockquote>
          
          <div className="cta-container">
            <h2 className="cta-heading">Experience Refined Cuisine</h2>
            <p className="cta-text">Sign in to make reservations</p>
          </div>
        </div>

        <div className="right-panel">
          <div className="login-content">
            <h2 className="welcome-heading">Welcome Back</h2>
            <p className="welcome-text">Sign in to continue to your culinary journey</p>
            
            <LoginForm />
            
            <div className="separator">
              <span>Or continue with</span>
            </div>
            
            <SocialLoginButtons />
            
            <p className="signup-text">
              Don't have an account? <a href="/Register" className="signup-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
      
      <footer className="login-footer">
        <div className="copyright">© 2025 L'Élégance. All rights reserved.</div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;