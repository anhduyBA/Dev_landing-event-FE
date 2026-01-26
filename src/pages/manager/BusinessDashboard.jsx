import React from "react";
import { Row, Col, Card, Button, Table, Tag } from "antd";
import {
  RiseOutlined,
  FallOutlined,
  CalendarOutlined,
  FilterOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  dashboardStats,
  topProducts,
  recentTransactions,
  revenueChartData,
} from "../../mock/manager";

const Dashboard = () => {
  // Table columns
  const columns = [
    {
      title: "Mã GD",
      dataIndex: "orderId",
      key: "orderId",
      render: (text) => <span className="order-id">{text}</span>,
    },
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
      render: (text) => (
        <div className="customer-cell">
          <div className="customer-avatar">{text.charAt(0)}</div>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Sản phẩm",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Giá trị",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span className="amount">{text}</span>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "success" ? "green" : "orange"}>
          {status === "success" ? "Thành công" : "Chờ xử lý"}
        </Tag>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      render: (text) => <span className="time">{text}</span>,
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-info">
          <h1 className="page-main-title">Tổng quan kinh doanh</h1>
          <p className="page-description">
            Theo dõi hiệu suất doanh thu và hoạt động bán hàng.
          </p>
        </div>
        <div className="header-actions">
          <Button icon={<CalendarOutlined />}>7 ngày qua</Button>
          <Button icon={<FilterOutlined />}>Lọc</Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="stats-row">
        {dashboardStats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card className="stat-card">
              <div className="stat-header">
                <span className="stat-title">{stat.title}</span>
                <div
                  className="stat-icon"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="stat-value">
                {stat.value}
                {stat.unit && <span className="stat-unit">{stat.unit}</span>}
              </div>
              <div className="stat-change">
                <span
                  className={`change-value ${
                    stat.changeType === "increase" ? "positive" : "negative"
                  }`}
                >
                  {stat.changeType === "increase" ? (
                    <RiseOutlined />
                  ) : (
                    <FallOutlined />
                  )}
                  {stat.change}
                </span>
                <span className="change-desc">{stat.description}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Row */}
      <Row gutter={[16, 16]} className="charts-row">
        <Col xs={24} lg={14}>
          <Card className="chart-card">
            <h3 className="card-title">Biểu đồ doanh thu</h3>
            <p className="card-subtitle">Thống kê doanh thu theo tuần</p>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                  data={revenueChartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    formatter={(value) => [
                      `${value.toLocaleString()} đ`,
                      "Doanh thu",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card className="chart-card">
            <h3 className="card-title">Sản phẩm bán chạy</h3>
            <p className="card-subtitle">Top template có doanh số cao nhất</p>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={topProducts}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#374151", fontSize: 13 }}
                    width={110}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#fff" }}
                    labelStyle={{ color: "#10b981", fontWeight: 600 }}
                    formatter={(value) => [`${value}%`, "Doanh số"]}
                  />
                  <Bar dataKey="sales" radius={[0, 4, 4, 0]} barSize={20}>
                    {topProducts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#1e293b" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Transactions Table */}
      <Card className="table-card">
        <div className="table-header">
          <div>
            <h3 className="card-title">Giao dịch gần đây</h3>
            <p className="card-subtitle">
              Lịch sử thanh toán mới nhất trên hệ thống.
            </p>
          </div>
          <Button type="link" className="view-all-btn">
            Xem tất cả
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={recentTransactions}
          pagination={false}
          className="transactions-table"
        />
      </Card>
    </div>
  );
};

export default Dashboard;
