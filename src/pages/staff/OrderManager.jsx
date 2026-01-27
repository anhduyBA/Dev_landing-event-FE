import React, { useState } from "react";
import {
  Table,
  Card,
  Tag,
  Button,
  Modal,
  Select,
  Input,
  DatePicker,
  Dropdown,
  Descriptions,
  Timeline,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  CalendarOutlined,
  ExportOutlined,
  MoreOutlined,
  EyeOutlined,
  EditOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { orders, orderStatusConfig } from "../../mock/staff";

const { Option } = Select;

// Status icons mapping
const statusIcons = {
  completed: <CheckCircleOutlined />,
  processing: <SyncOutlined spin />,
  pending: <ClockCircleOutlined />,
  cancelled: <CloseCircleOutlined />,
};

const OrderManager = () => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);

  // Action menu items
  const getActionItems = () => [
    { key: "view", label: "Xem chi tiết", icon: <EyeOutlined /> },
    { key: "edit", label: "Cập nhật trạng thái", icon: <EditOutlined /> },
  ];

  const columns = [
    {
      title: "Mã đơn",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <span style={{ fontWeight: 500, color: "#1f2937" }}>{id}</span>
      ),
    },
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
      render: (name) => <span style={{ color: "#1f2937" }}>{name}</span>,
    },
    {
      title: "Ngày đặt",
      dataIndex: "date",
      key: "date",
      render: (date) => <span style={{ color: "#6b7280" }}>{date}</span>,
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
      render: (val) => (
        <span style={{ color: "#10b981", fontWeight: 600 }}>
          {val.toLocaleString("vi-VN")} đ
        </span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const config = orderStatusConfig[status];
        return (
          <Tag
            icon={statusIcons[status]}
            style={{
              color: config.color,
              background: config.bg,
              border: "none",
              borderRadius: 6,
              padding: "4px 12px",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
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
              if (key === "view") {
                setSelectedOrder(record);
                setIsDetailVisible(true);
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
          <h2>Quản lý Đơn hàng</h2>
          <p>Theo dõi và cập nhật trạng thái đơn hàng</p>
        </div>
        <div className="header-actions">
          <Button icon={<ExportOutlined />} className="staff-btn-secondary">
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="staff-filter-section">
        <Input
          placeholder="Tìm kiếm mã đơn, khách hàng..."
          prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <Select
          placeholder="Tất cả trạng thái"
          allowClear
          value={statusFilter}
          onChange={setStatusFilter}
          className="filter-select"
          suffixIcon={<FilterOutlined />}
        >
          <Option value="completed">Hoàn thành</Option>
          <Option value="processing">Đang xử lý</Option>
          <Option value="pending">Chờ thanh toán</Option>
          <Option value="cancelled">Đã hủy</Option>
        </Select>
        <DatePicker
          placeholder="Chọn ngày"
          className="filter-select"
          suffixIcon={<CalendarOutlined />}
        />
      </div>

      {/* Table */}
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total) => `Tổng ${total} đơn hàng`,
          responsive: true,
        }}
        scroll={{ x: 600 }}
      />

      {/* Detail Modal */}
      <Modal
        title={`Chi tiết đơn hàng ${selectedOrder?.id || ""}`}
        open={isDetailVisible}
        onCancel={() => setIsDetailVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsDetailVisible(false)}>
            Đóng
          </Button>,
          <Button
            key="update"
            type="primary"
            style={{ background: "#10b981", borderColor: "#10b981" }}
          >
            Cập nhật trạng thái
          </Button>,
        ]}
        width={700}
      >
        {selectedOrder && (
          <>
            <Timeline
              style={{ marginTop: 24, marginBottom: 24 }}
              items={[
                {
                  color: "green",
                  children: "Đặt hàng thành công",
                },
                {
                  color:
                    selectedOrder.status !== "cancelled" ? "green" : "gray",
                  children: "Xác nhận thanh toán",
                },
                {
                  color:
                    selectedOrder.status === "completed" ? "green" : "gray",
                  children: "Hoàn thành",
                },
              ]}
            />

            <Descriptions bordered column={2} size="small">
              <Descriptions.Item label="Khách hàng">
                {selectedOrder.customer}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                0901234567
              </Descriptions.Item>
              <Descriptions.Item label="Ngày đặt">
                {selectedOrder.date}
              </Descriptions.Item>
              <Descriptions.Item label="Tổng tiền">
                <span style={{ color: "#10b981", fontWeight: 600 }}>
                  {selectedOrder.total.toLocaleString("vi-VN")} đ
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Trạng thái" span={2}>
                <Select
                  defaultValue={selectedOrder.status}
                  style={{ width: 200 }}
                >
                  <Option value="completed">Hoàn thành</Option>
                  <Option value="processing">Đang xử lý</Option>
                  <Option value="pending">Chờ thanh toán</Option>
                  <Option value="cancelled">Đã hủy</Option>
                </Select>
              </Descriptions.Item>
            </Descriptions>
          </>
        )}
      </Modal>
    </Card>
  );
};

export default OrderManager;
