// ======================================
// MOCK DATA - STAFF MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

// Staff members list
export const staffMembers = [
  {
    key: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    role: "Admin",
    status: "active",
    joinDate: "01/01/2026",
    avatar: null,
    phone: "0912345678",
  },
  {
    key: "2",
    name: "Trần Thị B",
    email: "tranthib@email.com",
    role: "Editor",
    status: "active",
    joinDate: "15/01/2026",
    avatar: null,
    phone: "0923456789",
  },
  {
    key: "3",
    name: "Lê Hoàng C",
    email: "lehoangc@email.com",
    role: "Viewer",
    status: "inactive",
    joinDate: "20/01/2026",
    avatar: null,
    phone: "0934567890",
  },
  {
    key: "4",
    name: "Phạm Minh D",
    email: "phamminhd@email.com",
    role: "Editor",
    status: "active",
    joinDate: "25/01/2026",
    avatar: null,
    phone: "0945678901",
  },
  {
    key: "5",
    name: "Hoàng Thu E",
    email: "hoangthue@email.com",
    role: "Viewer",
    status: "active",
    joinDate: "28/01/2026",
    avatar: null,
    phone: "0956789012",
  },
];

// Role options
export const roleOptions = [
  { value: "Admin", label: "Admin", color: "blue" },
  { value: "Editor", label: "Editor", color: "green" },
  { value: "Viewer", label: "Viewer", color: "default" },
];

// Status options
export const statusOptions = [
  { value: "active", label: "Hoạt động", color: "green" },
  { value: "inactive", label: "Ngừng hoạt động", color: "red" },
];
