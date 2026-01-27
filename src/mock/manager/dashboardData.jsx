// ======================================
// MOCK DATA - BUSINESS DASHBOARD
// TODO: Thay bằng API call khi nối BE
// ======================================

import {
  DollarOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  RiseOutlined,
} from "@ant-design/icons";

// Stats cards data
export const dashboardStats = [
  {
    title: "Tổng doanh thu",
    value: "45.2M",
    unit: "đ",
    change: "+20.1%",
    changeType: "increase",
    description: "so với tháng trước",
    icon: <DollarOutlined />,
    color: "#10b981",
  },
  {
    title: "Đơn hàng mới",
    value: "+2,350",
    change: "+180.1%",
    changeType: "increase",
    description: "so với tháng trước",
    icon: <ShoppingCartOutlined />,
    color: "#6366f1",
  },
  {
    title: "Khách hàng mới",
    value: "+12,234",
    change: "+19%",
    changeType: "increase",
    description: "so với tháng trước",
    icon: <UserAddOutlined />,
    color: "#8b5cf6",
  },
  {
    title: "Tỷ lệ chuyển đổi",
    value: "3.2%",
    change: "-1.2%",
    changeType: "decrease",
    description: "so với tháng trước",
    icon: <RiseOutlined />,
    color: "#f59e0b",
  },
];

// Top selling products
export const topProducts = [
  { name: "Startup Landing", sales: 85 },
  { name: "Lucky Game", sales: 72 },
  { name: "E-commerce", sales: 65 },
  { name: "Quiz App", sales: 58 },
  { name: "Portfolio", sales: 45 },
];

// Recent transactions
export const recentTransactions = [
  {
    key: "1",
    orderId: "TRX-9821",
    customer: "Nguyễn Văn A",
    product: "Startup Landing",
    amount: "490.000 đ",
    status: "success",
    time: "10:30 AM",
  },
  {
    key: "2",
    orderId: "TRX-9822",
    customer: "Trần Thị B",
    product: "Lucky Wheel Game",
    amount: "890.000 đ",
    status: "success",
    time: "09:15 AM",
  },
  {
    key: "3",
    orderId: "TRX-9823",
    customer: "Lê Hoàng C",
    product: "Portfolio Pro",
    amount: "290.000 đ",
    status: "pending",
    time: "Yesterday",
  },
  {
    key: "4",
    orderId: "TRX-9824",
    customer: "Phạm Minh D",
    product: "E-commerce Kit",
    amount: "550.000 đ",
    status: "success",
    time: "Yesterday",
  },
];

// Chart data (for future integration with recharts)
export const revenueChartData = [
  { day: "T2", revenue: 2400 },
  { day: "T3", revenue: 1398 },
  { day: "T4", revenue: 9800 },
  { day: "T5", revenue: 3908 },
  { day: "T6", revenue: 4800 },
  { day: "T7", revenue: 3800 },
  { day: "CN", revenue: 4300 },
];
