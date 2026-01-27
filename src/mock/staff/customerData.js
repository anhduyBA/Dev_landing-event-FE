// ======================================
// MOCK DATA - CUSTOMER MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

// Customers list
export const customers = [
  {
    id: "CUST-001",
    name: "Nguyễn Văn A",
    email: "a.nguyen@example.com",
    phone: "0901234567",
    totalSpent: 4900000,
    orders: 12,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: "CUST-002",
    name: "Trần Thị B",
    email: "b.tran@example.com",
    phone: "0912345678",
    totalSpent: 890000,
    orders: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: "CUST-003",
    name: "Lê Văn C",
    email: "c.le@example.com",
    phone: "0987654321",
    totalSpent: 15000000,
    orders: 25,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
  {
    id: "CUST-004",
    name: "Phạm Thị D",
    email: "d.pham@example.com",
    phone: "0933445566",
    totalSpent: 2500000,
    orders: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  },
];

// Purchase history mock data
export const purchaseHistory = [
  {
    id: "ORD-001",
    date: "2023-11-15",
    template: "Landing Event Pro",
    amount: 490000,
  },
  {
    id: "ORD-005",
    date: "2023-11-20",
    template: "Beauty Shop Theme",
    amount: 750000,
  },
  {
    id: "ORD-008",
    date: "2023-11-25",
    template: "Game Marketing",
    amount: 600000,
  },
];

// Customer filter options
export const customerFilterOptions = [
  { value: "vip", label: "Khách VIP" },
  { value: "new", label: "Khách mới" },
  { value: "regular", label: "Khách thường" },
];
