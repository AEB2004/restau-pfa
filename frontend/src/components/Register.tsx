import React from 'react';
import RegisterForm from './RegisterForm';
import { Utensils } from 'lucide-react';
import '../styles/auth.css';

const Register: React.FC = () => {
  const handleRegisterSuccess = () => {
    // Handle successful registration, perhaps redirect to login
    console.log('Registration successful, redirecting...');
    // In a real app, you might use React Router to navigate
    // or window.location to redirect
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="brand">
          <div className="logo">
            <Utensils className="logo-icon" />
          </div>
          <h1 className="brand-name">L'Élégance</h1>
          <p className="brand-tagline">FINE DINING EXPERIENCE</p>
        </div>

        <div className="quote">
          "A culinary journey that transcends ordinary dining."
        </div>

        <div className="experience-text">
          <h2 className="experience-title">Experience Refined Cuisine</h2>
          <p className="experience-subtitle">Sign in to make reservations</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h2 className="auth-heading">Create Your Account</h2>
          <p className="auth-subheading">Join us to begin your culinary journey</p>
          
          <RegisterForm onSuccess={handleRegisterSuccess} />
          
          <div className="divider">
            <span>Or continue with</span>
          </div>
          
          <div className="social-buttons">
            <div className="social-btn">G</div>
            <div className="social-btn">f</div>
            <div className="social-btn">in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;