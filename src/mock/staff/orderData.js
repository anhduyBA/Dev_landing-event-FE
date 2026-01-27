// ======================================
// MOCK DATA - ORDER MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

// Orders list
export const orders = [
  {
    id: "ORD-001",
    customer: "Nguyễn Văn A",
    date: "2023-11-20",
    total: 490000,
    status: "completed",
  },
  {
    id: "ORD-002",
    customer: "Trần Thị B",
    date: "2023-11-21",
    total: 890000,
    status: "processing",
  },
  {
    id: "ORD-003",
    customer: "Công ty XYZ",
    date: "2023-11-22",
    total: 1500000,
    status: "pending",
  },
  {
    id: "ORD-004",
    customer: "Lê Thị D",
    date: "2023-11-23",
    total: 650000,
    status: "cancelled",
  },
  {
    id: "ORD-005",
    customer: "Phạm Văn E",
    date: "2023-11-24",
    total: 1200000,
    status: "completed",
  },
];

// Order status config
export const orderStatusConfig = {
  completed: {
    color: "#10b981",
    bg: "#d1fae5",
    text: "Hoàn thành",
  },
  processing: {
    color: "#3b82f6",
    bg: "#dbeafe",
    text: "Đang xử lý",
  },
  pending: {
    color: "#f59e0b",
    bg: "#fef3c7",
    text: "Chờ thanh toán",
  },
  cancelled: {
    color: "#ef4444",
    bg: "#fee2e2",
    text: "Đã hủy",
  },
};

// Order status options
export const orderStatusOptions = [
  { value: "completed", label: "Hoàn thành" },
  { value: "processing", label: "Đang xử lý" },
  { value: "pending", label: "Chờ thanh toán" },
  { value: "cancelled", label: "Đã hủy" },
];
