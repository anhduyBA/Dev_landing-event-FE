// ======================================
// ROUTE PATH CONSTANTS
// ======================================

export const ROUTES = {
  // Auth Routes
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },

  // Manager Routes
  MANAGER: {
    ROOT: "/manager",
    DASHBOARD: "/manager/dashboard",
    STAFF: "/manager/staff",
    INVENTORY: "/manager/inventory",
    SETTINGS: "/manager/settings",
  },

  // Staff Routes
  STAFF: {
    ROOT: "/staff",
    TEMPLATES: "/staff/templates",
    ORDERS: "/staff/orders",
    CUSTOMERS: "/staff/customers",
    PROMOTIONS: "/staff/promotions",
    SUPPORT: "/staff/support",
  },

  // Public Routes
  HOME: "/",
  NOT_FOUND: "*",
};

// Route titles for breadcrumbs/page titles
export const ROUTE_TITLES = {
  // Manager
  [ROUTES.MANAGER.DASHBOARD]: "Quản lý kinh doanh",
  [ROUTES.MANAGER.STAFF]: "Quản lý Staff",
  [ROUTES.MANAGER.INVENTORY]: "Quản lý kho",
  [ROUTES.MANAGER.SETTINGS]: "Cấu hình hệ thống",
  // Staff
  [ROUTES.STAFF.TEMPLATES]: "Quản lý Template",
  [ROUTES.STAFF.ORDERS]: "Quản lý Đơn hàng",
  [ROUTES.STAFF.CUSTOMERS]: "Quản lý Khách hàng",
  [ROUTES.STAFF.PROMOTIONS]: "Quản lý Khuyến mãi",
  [ROUTES.STAFF.SUPPORT]: "Hỗ trợ Khách hàng",
  // Auth
  [ROUTES.AUTH.LOGIN]: "Đăng nhập",
  [ROUTES.AUTH.REGISTER]: "Đăng ký",
};

export default ROUTES;
