import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Spin } from "antd";
import { ROUTES } from "./routes";

// Lazy load layouts
const ManagerLayout = lazy(() => import("../layouts/ManagerLayout"));
const StaffLayout = lazy(() => import("../layouts/StaffLayout"));

// Lazy load auth pages
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));

// Lazy load landing page
const Landing = lazy(() => import("../pages/landing/Landing"));

// Lazy load manager pages
const BusinessDashboard = lazy(
  () => import("../pages/manager/BusinessDashboard"),
);
const StaffManagement = lazy(() => import("../pages/manager/StaffManagement"));
const InventoryManagement = lazy(
  () => import("../pages/manager/InventoryManagement"),
);
const SystemSettings = lazy(() => import("../pages/manager/SystemSettings"));

// Lazy load staff pages
const TemplateManager = lazy(() => import("../pages/staff/TemplateManager"));
const OrderManager = lazy(() => import("../pages/staff/OrderManager"));
const CustomerManager = lazy(() => import("../pages/staff/CustomerManager"));
const PromotionManager = lazy(() => import("../pages/staff/PromotionManager"));
const SupportManager = lazy(() => import("../pages/staff/SupportManager"));

// Lazy load common pages
const NotFound = lazy(() => import("../pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader">
    <Spin size="large" tip="Đang tải trang..." />
  </div>
);

// Route configuration
const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ============================================
            PUBLIC ROUTES
            ============================================ */}
        {/* Landing Page - Trang chủ */}
        <Route path={ROUTES.HOME} element={<Landing />} />

        {/* Auth Routes */}
        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />

        {/* ============================================
            MANAGER ROUTES (No auth required for development)
            TODO: Add PrivateRoute wrapper when connecting to API
            ============================================ */}
        <Route path={ROUTES.MANAGER.ROOT} element={<ManagerLayout />}>
          <Route index element={<BusinessDashboard />} />
          <Route path="dashboard" element={<BusinessDashboard />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="settings" element={<SystemSettings />} />
        </Route>

        {/* ============================================
            STAFF ROUTES (No auth required for development)
            TODO: Add PrivateRoute wrapper when connecting to API
            ============================================ */}
        <Route path={ROUTES.STAFF.ROOT} element={<StaffLayout />}>
          <Route index element={<Navigate to="templates" replace />} />
          <Route path="templates" element={<TemplateManager />} />
          <Route path="orders" element={<OrderManager />} />
          <Route path="customers" element={<CustomerManager />} />
          <Route path="promotions" element={<PromotionManager />} />
          <Route path="support" element={<SupportManager />} />
        </Route>

        {/* ============================================
            404 NOT FOUND
            ============================================ */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
