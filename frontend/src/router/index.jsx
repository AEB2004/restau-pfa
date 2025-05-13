// src/router/index.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Reservation from '../pages/Reservation/Reservation';
import Menu from '../pages/Menu/Menu';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import Profile from '../pages/Profile';
// import AdminDashboard from '../pages/AdminDashboard';
import LoginPage from '../components/LoginPage';
import Registre from '../components/Register';
import Layout from '../components/layout/Layout';




const AppRouter = () => {
  return (
  <Router>
    <Routes>
     
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registre />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  </Routes>
</Router>
  );
};

export default AppRouter;
