// src/router/index.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import Registre from '../pages/Registre';
import AdminDashboard from '../pages/AdminDashboard';

const AppRouter = () => {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    
    <Route path="/register" element={<Registre />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
</Router>
  );
};

export default AppRouter;
