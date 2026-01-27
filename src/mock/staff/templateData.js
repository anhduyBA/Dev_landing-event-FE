// ======================================
// MOCK DATA - TEMPLATE MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

// Templates list
export const templates = [
  {
    id: 1,
    name: "Modern Startup Landing",
    category: "Landing Page",
    price: 490000,
    status: "published",
    updatedAt: "2023-10-15",
  },
  {
    id: 2,
    name: "Lucky Wheel Game",
    category: "Game Page",
    price: 890000,
    status: "published",
    updatedAt: "2023-11-02",
  },
  {
    id: 3,
    name: "E-commerce Sale",
    category: "Landing Page",
    price: 390000,
    status: "draft",
    updatedAt: "2023-11-10",
  },
  {
    id: 4,
    name: "Quiz Master",
    category: "Game Page",
    price: 690000,
    status: "pending",
    updatedAt: "2023-11-12",
  },
  {
    id: 5,
    name: "App Showcase",
    category: "Landing Page",
    price: 550000,
    status: "published",
    updatedAt: "2023-11-15",
  },
];

// Template status config
export const templateStatusConfig = {
  published: { color: "#10b981", bg: "#d1fae5", text: "Đã xuất bản" },
  draft: { color: "#6b7280", bg: "#f3f4f6", text: "Bản nháp" },
  pending: { color: "#f59e0b", bg: "#fef3c7", text: "Chờ duyệt" },
};

// Template category options
export const templateCategoryOptions = [
  { value: "landing", label: "Landing Page" },
  { value: "game", label: "Game Page" },
];

// Template status options
export const templateStatusOptions = [
  { value: "published", label: "Đã xuất bản" },
  { value: "draft", label: "Bản nháp" },
  { value: "pending", label: "Chờ duyệt" },
];
