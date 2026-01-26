import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Table,
  Tag,
  Input,
  Space,
  Row,
  Col,
  Dropdown,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { inventoryStats, productsList } from "../../mock/manager";

const InventoryManagement = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Action menu for mobile
  const getActionMenu = (record) => ({
    items: [
      {
        key: "view",
        label: "Xem chi tiết",
        icon: <EyeOutlined />,
      },
      {
        key: "edit",
        label: "Chỉnh sửa",
        icon: <EditOutlined />,
      },
    ],
  });

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: 500 }}>{text}</div>
          {/* Show category & price on mobile */}
          {isMobile && (
            <div style={{ marginTop: 4 }}>
              <Tag size="small">{record.category}</Tag>
              <span
                style={{
                  fontSize: 12,
                  color: "#10b981",
                  fontWeight: 600,
                  marginLeft: 8,
                }}
              >
                {record.price}
              </span>
            </div>
          )}
        </div>
      ),
    },
    // Hide category on mobile (shown inline above)
    ...(!isMobile
      ? [
          {
            title: "Danh mục",
            dataIndex: "category",
            key: "category",
            width: 120,
            render: (category) => <Tag>{category}</Tag>,
          },
        ]
      : []),
    // Hide price on mobile (shown inline above)
    ...(!isMobile
      ? [
          {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            width: 120,
            render: (price) => (
              <span style={{ fontWeight: 600, color: "#10b981" }}>{price}</span>
            ),
          },
        ]
      : []),
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: isMobile ? 90 : 120,
      render: (status) => (
        <Tag
          color={
            status === "active"
              ? "green"
              : status === "pending"
                ? "orange"
                : "default"
          }
        >
          {status === "active"
            ? "Hoạt động"
            : status === "pending"
              ? "Chờ duyệt"
              : "Nháp"}
        </Tag>
      ),
    },
    // Hide sales on mobile
    ...(!isMobile
      ? [
          {
            title: "Lượt bán",
            dataIndex: "sales",
            key: "sales",
            width: 100,
          },
        ]
      : []),
    {
      title: "",
      key: "action",
      width: isMobile ? 50 : 100,
      render: (_, record) =>
        isMobile ? (
          <Dropdown menu={getActionMenu(record)} trigger={["click"]}>
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        ) : (
          <Space>
            <Button type="text" icon={<EyeOutlined />} />
            <Button type="text" icon={<EditOutlined />} />
          </Space>
        ),
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="header-info">
          <h1 className="page-main-title">Quản lý kho</h1>
          <p className="page-description">
            Quản lý sản phẩm template trong hệ thống.
          </p>
        </div>
        <div className="header-actions">
          <Input
            placeholder="Tìm kiếm sản phẩm..."
            prefix={<SearchOutlined />}
            className="search-input"
          />
          <Button type="primary" icon={<PlusOutlined />}>
            <span className="btn-text">Thêm sản phẩm</span>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }} className="stats-row">
        {inventoryStats.map((stat, index) => (
          <Col xs={12} sm={6} key={index}>
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
              <div className="stat-value">{stat.value}</div>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="table-card">
        <Table
          columns={columns}
          dataSource={productsList}
          pagination={{ pageSize: 10 }}
          scroll={{ x: isMobile ? 350 : undefined }}
        />
      </Card>
    </div>
  );
};

export default InventoryManagement;
