import React, { useState } from "react";
import {
  Table,
  Card,
  Button,
  Modal,
  Avatar,
  Input,
  Select,
  Dropdown,
} from "antd";
import {
  UserOutlined,
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  MoreOutlined,
  EyeOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { customers, purchaseHistory } from "../../mock/staff";

const CustomerManager = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(null);

  // Action menu items
  const getActionItems = () => [
    { key: "view", label: "Xem chi tiết", icon: <EyeOutlined /> },
    { key: "edit", label: "Chỉnh sửa", icon: <EditOutlined /> },
  ];

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      width: 70,
      render: (avatar) => (
        <Avatar src={avatar} size={40} icon={<UserOutlined />} />
      ),
    },
    {
      title: "Thông tin khách hàng",
      key: "info",
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 600, color: "#1f2937" }}>{record.name}</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>ID: {record.id}</div>
        </div>
      ),
    },
    {
      title: "Liên hệ",
      key: "contact",
      render: (_, record) => (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#6b7280",
              fontSize: 13,
            }}
          >
            <MailOutlined style={{ fontSize: 12 }} />
            {record.email}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#6b7280",
              fontSize: 13,
              marginTop: 2,
            }}
          >
            <PhoneOutlined style={{ fontSize: 12 }} />
            {record.phone}
          </div>
        </div>
      ),
    },
    {
      title: "Tổng chi tiêu",
      dataIndex: "totalSpent",
      key: "totalSpent",
      render: (val) => (
        <span style={{ color: "#10b981", fontWeight: 600 }}>
          {val.toLocaleString("vi-VN")} đ
        </span>
      ),
    },
    {
      title: "Đơn hàng",
      dataIndex: "orders",
      key: "orders",
      render: (orders) => (
        <span style={{ color: "#3b82f6" }}>{orders} đơn</span>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      width: 80,
      align: "center",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: getActionItems(),
            onClick: ({ key }) => {
              if (key === "view") {
                setSelectedCustomer(record);
                setIsHistoryVisible(true);
              }
            },
          }}
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            style={{ color: "#9ca3af" }}
          />
        </Dropdown>
      ),
    },
  ];

  return (
    <Card
      style={{
        borderRadius: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
      bodyStyle={{ padding: 24 }}
    >
      {/* Header */}
      <div className="staff-page-header">
        <div className="header-info">
          <h2>Quản lý Khách hàng</h2>
          <p>Danh sách khách hàng và lịch sử mua hàng</p>
        </div>
        <div className="header-actions">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="staff-btn-primary"
          >
            Thêm khách hàng
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="staff-filter-section">
        <Input
          placeholder="Tìm kiếm tên, email, số điện thoại..."
          prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <Select
          placeholder="Tất cả khách hàng"
          allowClear
          value={filter}
          onChange={setFilter}
          className="filter-select"
          suffixIcon={<FilterOutlined />}
        >
          <Select.Option value="vip">Khách VIP</Select.Option>
          <Select.Option value="new">Khách mới</Select.Option>
          <Select.Option value="regular">Khách thường</Select.Option>
        </Select>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={customers}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total) => `Tổng ${total} khách hàng`,
          responsive: true,
        }}
        scroll={{ x: 600 }}
      />

      {/* History Modal */}
      <Modal
        title={`Lịch sử mua hàng - ${selectedCustomer?.name}`}
        open={isHistoryVisible}
        onCancel={() => setIsHistoryVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsHistoryVisible(false)}>
            Đóng
          </Button>,
        ]}
        width={700}
      >
        {selectedCustomer && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: 16,
                background: "#f8fafc",
                borderRadius: 8,
                marginBottom: 24,
              }}
            >
              <Avatar src={selectedCustomer.avatar} size={56} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {selectedCustomer.name}
                </div>
                <div style={{ color: "#6b7280", fontSize: 13 }}>
                  {selectedCustomer.email} • {selectedCustomer.phone}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{ color: "#10b981", fontWeight: 600, fontSize: 18 }}
                >
                  {selectedCustomer.totalSpent.toLocaleString("vi-VN")} đ
                </div>
                <div style={{ color: "#6b7280", fontSize: 12 }}>
                  Tổng chi tiêu
                </div>
              </div>
            </div>

            <Table
              dataSource={purchaseHistory}
              rowKey="id"
              pagination={false}
              size="small"
              columns={[
                { title: "Mã đơn", dataIndex: "id", key: "id" },
                { title: "Ngày mua", dataIndex: "date", key: "date" },
                { title: "Sản phẩm", dataIndex: "template", key: "template" },
                {
                  title: "Giá tiền",
                  dataIndex: "amount",
                  key: "amount",
                  render: (val) => (
                    <span style={{ color: "#10b981", fontWeight: 500 }}>
                      {val.toLocaleString("vi-VN")} đ
                    </span>
                  ),
                },
              ]}
            />
          </>
        )}
      </Modal>
    </Card>
  );
};

export default CustomerManager;
