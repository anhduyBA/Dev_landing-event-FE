// ======================================
// MOCK DATA - INVENTORY MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

import {
  AppstoreOutlined,
  TagOutlined,
  InboxOutlined,
} from "@ant-design/icons";

// Inventory stats
export const inventoryStats = [
  {
    title: "Tổng sản phẩm",
    value: "156",
    icon: <AppstoreOutlined />,
    color: "#6366f1",
  },
  {
    title: "Đang hoạt động",
    value: "142",
    icon: <TagOutlined />,
    color: "#10b981",
  },
  {
    title: "Chờ duyệt",
    value: "8",
    icon: <InboxOutlined />,
    color: "#f59e0b",
  },
  {
    title: "Nháp",
    value: "6",
    icon: <InboxOutlined />,
    color: "#6b7280",
  },
];

// Products list
export const productsList = [
  {
    key: "1",
    name: "Startup Landing Page",
    category: "Landing Page",
    price: "490.000 đ",
    status: "active",
    sales: 234,
    createdAt: "01/01/2026",
    thumbnail: null,
  },
  {
    key: "2",
    name: "Lucky Wheel Game",
    category: "Game Page",
    price: "890.000 đ",
    status: "active",
    sales: 187,
    createdAt: "05/01/2026",
    thumbnail: null,
  },
  {
    key: "3",
    name: "E-commerce Landing Page",
    category: "Landing Page",
    price: "390.000 đ",
    status: "pending",
    sales: 0,
    createdAt: "10/01/2026",
    thumbnail: null,
  },
  {
    key: "4",
    name: "Portfolio Template",
    category: "Portfolio Page",
    price: "690.000 đ",
    status: "active",
    sales: 156,
    createdAt: "15/01/2026",
    thumbnail: null,
  },
  {
    key: "5",
    name: "Blog Landing Page",
    category: "Landing Page",
    price: "450.000 đ",
    status: "draft",
    sales: 0,
    createdAt: "20/01/2026",
    thumbnail: null,
  },
  {
    key: "6",
    name: "SaaS Landing Page",
    category: "Landing Page",
    price: "550.000 đ",
    status: "active",
    sales: 98,
    createdAt: "22/01/2026",
    thumbnail: null,
  },
  {
    key: "7",
    name: "Event Landing Page",
    category: "Event Page",
    price: "350.000 đ",
    status: "active",
    sales: 76,
    createdAt: "24/01/2026",
    thumbnail: null,
  },
];

// Category options
export const categoryOptions = [
  { value: "Landing Page", label: "Landing Page" },
  { value: "Game Page", label: "Game Page" },
  { value: "Portfolio Page", label: "Portfolio Page" },
  { value: "Event Page", label: "Event Page" },
  { value: "Blog Page", label: "Blog Page" },
];

// Status options
export const productStatusOptions = [
  { value: "active", label: "Hoạt động", color: "green" },
  { value: "pending", label: "Chờ duyệt", color: "orange" },
  { value: "draft", label: "Nháp", color: "default" },
];
