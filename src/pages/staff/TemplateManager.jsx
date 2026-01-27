import React, { useState } from "react";
import {
  Table,
  Card,
  Button,
  Tag,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
  Dropdown,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { templates, templateStatusConfig } from "../../mock/staff";

const { Option } = Select;

const TemplateManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);

  // Action menu items
  const getActionItems = (record) => [
    { key: "view", label: "Xem chi tiết", icon: <EyeOutlined /> },
    { key: "edit", label: "Chỉnh sửa", icon: <EditOutlined /> },
    { type: "divider" },
    { key: "delete", label: "Xóa", icon: <DeleteOutlined />, danger: true },
  ];

  // Columns
  const columns = [
    {
      title: "Tên Template",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span style={{ fontWeight: 500, color: "#1f2937" }}>{text}</span>
      ),
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      render: (category) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: category === "Landing Page" ? "#10b981" : "#8b5cf6",
            }}
          />
          <span style={{ color: "#6b7280" }}>{category}</span>
        </div>
      ),
    },
    {
      title: "Giá niêm yết",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span style={{ color: "#1f2937" }}>
          {price.toLocaleString("vi-VN")} đ
        </span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const config = templateStatusConfig[status];
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
      title: "Cập nhật",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => <span style={{ color: "#9ca3af" }}>{date}</span>,
    },
    {
      title: "Hành động",
      key: "action",
      width: 80,
      align: "center",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: getActionItems(record),
            onClick: ({ key }) => handleAction(key, record),
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

  const handleAction = (key, record) => {
    if (key === "delete") {
      message.success(`Đã xóa template ${record.name}`);
    }
  };

  const handleAddTemplate = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      message.success("Thêm template thành công!");
      setIsModalVisible(false);
      form.resetFields();
    });
  };

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
          <h2>Quản lý Template</h2>
          <p>Danh sách, thêm sửa và upload demo sản phẩm</p>
        </div>
        <div className="header-actions">
          <Button
            icon={<UploadOutlined />}
            onClick={() => setIsUploadModalVisible(true)}
            className="staff-btn-secondary"
          >
            Upload Demo
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddTemplate}
            className="staff-btn-primary"
          >
            Thêm Template
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="staff-filter-section">
        <Input
          placeholder="Tìm kiếm template..."
          prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <Select
          placeholder="Tất cả danh mục"
          allowClear
          value={categoryFilter}
          onChange={setCategoryFilter}
          className="filter-select"
          suffixIcon={<FilterOutlined />}
        >
          <Option value="landing">Landing Page</Option>
          <Option value="game">Game Page</Option>
        </Select>
        <Select
          placeholder="Tất cả trạng thái"
          allowClear
          value={statusFilter}
          onChange={setStatusFilter}
          className="filter-select"
        >
          <Option value="published">Đã xuất bản</Option>
          <Option value="draft">Bản nháp</Option>
          <Option value="pending">Chờ duyệt</Option>
        </Select>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={templates}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total) => `Tổng ${total} template`,
          responsive: true,
        }}
        scroll={{ x: 600 }}
      />

      {/* Add Template Modal */}
      <Modal
        title="Thêm Template Mới"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        width={600}
        okText="Thêm template"
        cancelText="Hủy"
        okButtonProps={{
          style: { background: "#10b981", borderColor: "#10b981" },
        }}
      >
        <Form form={form} layout="vertical" style={{ marginTop: 16 }}>
          <Form.Item
            name="name"
            label="Tên Template"
            rules={[{ required: true, message: "Vui lòng nhập tên template" }]}
          >
            <Input placeholder="VD: Modern Startup Landing" />
          </Form.Item>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <Form.Item
              name="category"
              label="Danh mục"
              rules={[{ required: true }]}
            >
              <Select placeholder="Chọn danh mục">
                <Option value="landing">Landing Page</Option>
                <Option value="game">Game Page</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="price"
              label="Giá bán (VNĐ)"
              rules={[{ required: true }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                placeholder="VD: 500,000"
              />
            </Form.Item>
          </div>
          <Form.Item name="thumbnail" label="Ảnh đại diện">
            <Upload listType="picture-card" maxCount={1}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item name="description" label="Mô tả chi tiết">
            <Input.TextArea rows={4} placeholder="Mô tả về template..." />
          </Form.Item>
        </Form>
      </Modal>

      {/* Upload Demo Modal */}
      <Modal
        title="Upload Demo"
        open={isUploadModalVisible}
        onCancel={() => setIsUploadModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsUploadModalVisible(false)}>
            Hủy
          </Button>,
          <Button
            key="upload"
            type="primary"
            style={{ background: "#10b981", borderColor: "#10b981" }}
          >
            Upload
          </Button>,
        ]}
      >
        <Form layout="vertical" style={{ marginTop: 16 }}>
          <Form.Item label="Chọn Template" required>
            <Select placeholder="Chọn template...">
              {templates.map((t) => (
                <Option key={t.id} value={t.id}>
                  {t.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="File Demo (Zip/HTML)">
            <Upload.Dragger>
              <p className="ant-upload-drag-icon">
                <UploadOutlined style={{ fontSize: 32, color: "#10b981" }} />
              </p>
              <p className="ant-upload-text">
                Kéo thả file hoặc click để upload
              </p>
              <p className="ant-upload-hint">
                Hỗ trợ file .zip, .rar hoặc .html (Tối đa 50MB)
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default TemplateManager;
