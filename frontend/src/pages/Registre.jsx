// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); // pour register
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // LOGIN
        const response = await axios.post('/login', { email, password });
        console.log('Connexion réussie:', response.data);
        navigate('/');
      } else {
        // REGISTER
        const response = await axios.post('/register', { name, email, password });
        console.log('Inscription réussie:', response.data);
        setIsLogin(true); // Après inscription, on retourne au login
      }
    } catch (error) {
      console.error('Erreur:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{isLogin ? 'Se connecter' : "S'inscrire"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>Nom :</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Email :</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          {isLogin ? 'Se connecter' : "S'inscrire"}
        </button>
      </form>

      <div style={{ marginTop: '15px' }}>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Pas de compte ? S'inscrire" : 'Déjà inscrit ? Se connecter'}
        </button>
      </div>
    </div>
  );
};

export default Login;
