import React, { useState } from "react";
import {
  Table,
  Card,
  Tag,
  Button,
  Modal,
  Input,
  Select,
  Avatar,
  Dropdown,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  MoreOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { tickets, priorityConfig, ticketStatusConfig } from "../../mock/staff";

const { TextArea } = Input;

const SupportManager = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);

  // Action menu items
  const getActionItems = () => [
    { key: "view", label: "Xem chi tiết", icon: <EyeOutlined /> },
    { key: "reply", label: "Phản hồi", icon: <MessageOutlined /> },
  ];

  const columns = [
    {
      title: "Mã Ticket",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <span style={{ fontWeight: 500, color: "#1f2937" }}>{id}</span>
      ),
    },
    {
      title: "Khách hàng",
      key: "customer",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar
            size={36}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${record.id}`}
          />
          <div>
            <div style={{ fontWeight: 500, color: "#1f2937" }}>
              {record.customer}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>{record.type}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Vấn đề",
      dataIndex: "issue",
      key: "issue",
      render: (issue) => <span style={{ color: "#6b7280" }}>{issue}</span>,
    },
    {
      title: "Độ ưu tiên",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => {
        const config = priorityConfig[priority];
        return (
          <Tag
            style={{
              color: config.color,
              background: config.bg,
              border: "none",
              borderRadius: 6,
              padding: "4px 12px",
            }}
          >
            {config.text}
          </Tag>
        );
      },
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      render: (time) => <span style={{ color: "#9ca3af" }}>{time}</span>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const config = ticketStatusConfig[status];
        return (
          <Tag
            style={{
              color: config.color,
              background: config.bg,
              border: "none",
              borderRadius: 6,
              padding: "4px 12px",
            }}
          >
            {config.text}
          </Tag>
        );
      },
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
              if (key === "reply") {
                setCurrentTicket(record);
                setIsChatVisible(true);
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
          <h2>Hỗ trợ khách hàng</h2>
          <p>Danh sách yêu cầu và phản hồi ticket</p>
        </div>
        <div className="header-actions">
          <Button icon={<PlusOutlined />} className="staff-btn-secondary">
            Ticket mới
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="staff-filter-section">
        <Input
          placeholder="Tìm kiếm ticket, khách hàng..."
          prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <Select
          placeholder="Ưu tiên"
          allowClear
          value={priorityFilter}
          onChange={setPriorityFilter}
          className="filter-select"
          suffixIcon={<FilterOutlined />}
        >
          <Select.Option value="high">Cao</Select.Option>
          <Select.Option value="medium">Trung bình</Select.Option>
          <Select.Option value="low">Thấp</Select.Option>
        </Select>
        <Select
          placeholder="Trạng thái"
          allowClear
          value={statusFilter}
          onChange={setStatusFilter}
          className="filter-select"
        >
          <Select.Option value="new">Mới</Select.Option>
          <Select.Option value="processing">Đang xử lý</Select.Option>
          <Select.Option value="resolved">Đã đóng</Select.Option>
        </Select>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={tickets}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total) => `Tổng ${total} ticket`,
          responsive: true,
        }}
        scroll={{ x: 600 }}
      />

      {/* Chat Modal */}
      <Modal
        title={
          <div>
            <div>{currentTicket?.issue}</div>
            <div style={{ fontSize: 13, fontWeight: 400, color: "#6b7280" }}>
              {currentTicket?.customer}
            </div>
          </div>
        }
        open={isChatVisible}
        onCancel={() => setIsChatVisible(false)}
        footer={null}
        width={600}
      >
        <div
          style={{
            background: "#f8fafc",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            <Avatar
              size={40}
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentTicket?.id}`}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>
                {currentTicket?.customer}
              </div>
              <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
                Tôi đã thanh toán nhưng không thấy nút download? Vui lòng hỗ trợ
                tôi.
              </p>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 8 }}>
                {currentTicket?.time}
              </div>
            </div>
          </div>
        </div>

        <div>
          <TextArea
            rows={4}
            placeholder="Nhập nội dung phản hồi..."
            style={{ borderRadius: 8, marginBottom: 12 }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="primary"
              style={{
                background: "#10b981",
                borderColor: "#10b981",
                borderRadius: 8,
              }}
            >
              Gửi phản hồi
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default SupportManager;
