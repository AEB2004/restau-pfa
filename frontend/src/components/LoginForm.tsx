import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [transformStyle, setTransformStyle] = useState({});
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('/login', { email, password });

      localStorage.setItem('user', JSON.stringify(response.data));
      
      localStorage.setItem('token', response.data.token);
       

      if (response.data.role === 'admin') {
        navigate('/admin'); // Redirige vers le tableau de bord admin
      } else if (response.data.role === 'user') {
        navigate('/'); // Redirige vers la page utilisateur
      }
    } catch (error) {
      console.error('Erreur de connexion :', error.response?.data || error.message);
    }


  };

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update glow effect position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Calculate rotation (reduced intensity for subtlety)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 5; // Reduced from 10 to 5
    const rotateY = ((x - centerX) / centerX) * 5;  // Reduced from 10 to 5
    
    setTransformStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.01, 1.01, 1.01)
      `,
      transition: 'transform 0.1s ease'
    });
  };
  
  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease'
    });
  };
  


  return (
    <div 
      className="login-card-container"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle as React.CSSProperties}
    >
      <div className="login-card">
        <div className="login-glow"></div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <Mail size={16} className="input-icon" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>
            <div className="input-wrapper">
              <Lock size={16} className="input-icon" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;