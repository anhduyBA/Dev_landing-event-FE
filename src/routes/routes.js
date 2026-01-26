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

  // Staff Routes (future)
  STAFF: {
    ROOT: "/staff",
    DASHBOARD: "/staff/dashboard",
  },

  // Public Routes
  HOME: "/",
  NOT_FOUND: "*",
};

// Route titles for breadcrumbs/page titles
export const ROUTE_TITLES = {
  [ROUTES.MANAGER.DASHBOARD]: "Quản lý kinh doanh",
  [ROUTES.MANAGER.STAFF]: "Quản lý Staff",
  [ROUTES.MANAGER.INVENTORY]: "Quản lý kho",
  [ROUTES.MANAGER.SETTINGS]: "Cấu hình hệ thống",
  [ROUTES.AUTH.LOGIN]: "Đăng nhập",
  [ROUTES.AUTH.REGISTER]: "Đăng ký",
};

export default ROUTES;
