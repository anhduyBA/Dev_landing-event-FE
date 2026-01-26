import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Landing from './pages/landing/Landing';
import StaffLayout from './layouts/StaffLayout';
import TemplateManager from './pages/staff/TemplateManager/TemplateManager.jsx';
import OrderManager from './pages/staff/OrderManager/OrderManager.jsx';
import CustomerManager from './pages/staff/CustomerManager/CustomerManager.jsx';
import PromotionManager from './pages/staff/PromotionManager/PromotionManager.jsx';
import SupportManager from './pages/staff/SupportManager/SupportManager.jsx';
import StaffNotFound from './pages/staff/NotFound/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<Navigate to="/staff/templates" replace />} />
           <Route path="templates" element={<TemplateManager />} />
           <Route path="orders" element={<OrderManager />} />
           <Route path="customers" element={<CustomerManager />} />
           <Route path="promotions" element={<PromotionManager />} />
           <Route path="support" element={<SupportManager />} />
           <Route path="*" element={<StaffNotFound />} />
      </Route>
    </Routes>
  )
}

export default App