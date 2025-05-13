import React, { useState } from 'react';
import axios from '../api/axios';
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';
import Button from './Button';

function RegisterForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('/register', form);
      console.log('Inscription réussie :', response.data);

      alert('Compte créé avec succès !'); // Message de succès

      if (onSuccess) onSuccess(); // Callback vers le composant parent
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: 'Une erreur est survenue. Veuillez réessayer.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name</label>
        <div className="input-icon-wrapper">
          <User size={18} className="input-icon input-icon-left" />
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input input-with-icon-left ${errors.name ? 'input-error' : ''}`}
            value={form.name}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <div className="input-icon-wrapper">
          <Mail size={18} className="input-icon input-icon-left" />
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input input-with-icon-left ${errors.email ? 'input-error' : ''}`}
            value={form.email}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <div className="input-icon-wrapper">
          <Lock size={18} className="input-icon input-icon-left" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className={`form-input input-with-icon-left input-with-icon-right ${errors.password ? 'input-error' : ''}`}
            value={form.password}
            onChange={handleChange}
            placeholder=""
          />
          <div className="input-icon input-icon-right" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
        <div className="input-icon-wrapper">
          <Lock size={18} className="input-icon input-icon-left" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="password_confirmation"
            name="password_confirmation"
            className={`form-input input-with-icon-left input-with-icon-right ${errors.password_confirmation ? 'input-error' : ''}`}
            value={form.password_confirmation}
            onChange={handleChange}
            placeholder=""
          />
          <div className="input-icon input-icon-right" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        {errors.password_confirmation && <div className="error-message">{errors.password_confirmation}</div>}
      </div>

      {errors.general && <div className="error-message">{errors.general}</div>}

      <Button type="submit" isLoading={isLoading}>
        Create Account
      </Button>

      <div className="auth-footer">
        Already have an account? <a href="/login" className="auth-link">Sign In</a>
      </div>
    </form>
  );
}

export default RegisterForm;
