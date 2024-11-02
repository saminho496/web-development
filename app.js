// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import MenuPage from './components/MenuPage';
import PaymentPage from './components/PaymentPage';
import OrderManagement from './components/OrderManagement';
import ReservationManagement from './components/ReservationManagement';
import OrderHistory from './components/OrderHistory';
import AdminDashboard from './components/AdminDashboard';
import Notifications from './components/Notifications';
import './components/login.css';
import './components/Dashboard.css';
import './components/MenuPage.css';
import './components/OrderManagement.css';
import './components/ReservationManagement.css';
import './components/OrderHistory.css';
import './components/AdminDashboard.css';
import './components/Notifications.css';
function App() {
  return (
    <Router>
      {/* Include MenuPage if it should be visible on all pages */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/reservations" element={<ReservationManagement />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;

