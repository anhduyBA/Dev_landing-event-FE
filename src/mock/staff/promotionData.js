// ======================================
// MOCK DATA - PROMOTION MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

// Promotions list
export const promotions = [
  {
    id: 1,
    code: "SUMMER2024",
    discount: "20%",
    status: "active",
    usageCount: 45,
  },
  {
    id: 2,
    code: "WELCOME",
    discount: "50k",
    status: "active",
    usageCount: 120,
  },
  {
    id: 3,
    code: "FLASH10",
    discount: "10%",
    status: "expired",
    usageCount: 300,
  },
];

// Promotion status config
export const promotionStatusConfig = {
  active: { color: "#10b981", bg: "#d1fae5", text: "Đang chạy" },
  expired: { color: "#6b7280", bg: "#f3f4f6", text: "Hết hạn" },
};

// Discount type options
export const discountTypeOptions = [
  { value: "percent", label: "Phần trăm (%)" },
  { value: "fixed", label: "Số tiền cố định (VNĐ)" },
];
