// ======================================
// MOCK DATA - SUPPORT TICKET MANAGEMENT
// TODO: Thay bằng API call khi nối BE
// ======================================

// Support tickets list
export const tickets = [
  {
    id: "SUP-001",
    customer: "Nguyễn Văn A",
    type: "Technical",
    issue: "Lỗi không tải được template",
    priority: "high",
    time: "10 phút trước",
    status: "new",
  },
  {
    id: "SUP-002",
    customer: "Trần Thị B",
    type: "Guide",
    issue: "Hỏi về cách cài đặt",
    priority: "medium",
    time: "1 giờ trước",
    status: "processing",
  },
  {
    id: "SUP-003",
    customer: "Lê Văn C",
    type: "Billing",
    issue: "Yêu cầu hoàn tiền",
    priority: "low",
    time: "1 ngày trước",
    status: "resolved",
  },
  {
    id: "SUP-004",
    customer: "Phạm Thị D",
    type: "Technical",
    issue: "Link download bị lỗi",
    priority: "high",
    time: "2 giờ trước",
    status: "new",
  },
];

// Priority config
export const priorityConfig = {
  high: { color: "#ef4444", bg: "#fee2e2", text: "Cao" },
  medium: { color: "#f59e0b", bg: "#fef3c7", text: "Trung bình" },
  low: { color: "#6b7280", bg: "#f3f4f6", text: "Thấp" },
};

// Ticket status config
export const ticketStatusConfig = {
  new: { color: "#10b981", bg: "#d1fae5", text: "Mới" },
  processing: { color: "#3b82f6", bg: "#dbeafe", text: "Đang xử lý" },
  resolved: { color: "#6b7280", bg: "#f3f4f6", text: "Đã đóng" },
};

// Priority filter options
export const priorityOptions = [
  { value: "high", label: "Cao" },
  { value: "medium", label: "Trung bình" },
  { value: "low", label: "Thấp" },
];

// Ticket status options
export const ticketStatusOptions = [
  { value: "new", label: "Mới" },
  { value: "processing", label: "Đang xử lý" },
  { value: "resolved", label: "Đã đóng" },
];
