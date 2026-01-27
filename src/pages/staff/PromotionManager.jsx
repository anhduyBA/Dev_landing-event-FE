import React, { useState } from "react";
import {
  Card,
  Button,
  Table,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Tag,
} from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { promotions, promotionStatusConfig } from "../../mock/staff";

const PromotionManager = () => {
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Mã Code",
      dataIndex: "code",
      key: "code",
      render: (text) => (
        <span style={{ fontWeight: 600, color: "#1f2937" }}>{text}</span>
      ),
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
      render: (val) => <span style={{ color: "#6b7280" }}>{val}</span>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const config = promotionStatusConfig[status];
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
      title: "Lượt dùng",
      dataIndex: "usageCount",
      key: "usageCount",
      render: (count) => <span style={{ color: "#6b7280" }}>{count}</span>,
    },
    {
      title: "Hành động",
      key: "action",
      width: 80,
      align: "center",
      render: () => (
        <Button
          type="text"
          icon={<RightOutlined />}
          style={{ color: "#10b981" }}
        />
      ),
    },
  ];

  const handleCreate = () => {
    form.validateFields().then((values) => {
      message.success(`Đã tạo mã ${values.code} thành công!`);
      form.resetFields();
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Form tạo mã giảm giá */}
      <Card
        style={{
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
        bodyStyle={{ padding: 24 }}
      >
        <div className="staff-page-header" style={{ marginBottom: 16 }}>
          <div className="header-info">
            <h2>Tạo mã giảm giá</h2>
            <p>Thiết lập mã khuyến mãi mới</p>
          </div>
        </div>

        <Form form={form} layout="vertical">
          <Form.Item
            name="code"
            label="Mã code"
            rules={[{ required: true, message: "Vui lòng nhập mã code" }]}
          >
            <Input
              placeholder="VD: SUMMER2024"
              style={{ height: 44, borderRadius: 8 }}
            />
          </Form.Item>

          <Form.Item
            name="discount"
            label="Mức giảm"
            rules={[{ required: true, message: "Vui lòng nhập mức giảm" }]}
          >
            <Input
              placeholder="VD: 20%"
              style={{ height: 44, borderRadius: 8 }}
            />
          </Form.Item>

          <Form.Item name="type" label="Loại giảm giá">
            <Select
              placeholder="Chọn loại giảm giá"
              style={{ height: 44 }}
              options={[
                { value: "percent", label: "Phần trăm (%)" },
                { value: "fixed", label: "Số tiền cố định (VNĐ)" },
              ]}
            />
          </Form.Item>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreate}
            className="staff-btn-primary"
            style={{
              width: "100%",
              height: 44,
              fontSize: 15,
            }}
          >
            Tạo mã
          </Button>
        </Form>
      </Card>

      {/* Danh sách khuyến mãi */}
      <Card
        style={{
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
        bodyStyle={{ padding: 24 }}
      >
        <div className="staff-page-header" style={{ marginBottom: 16 }}>
          <div className="header-info">
            <h2>Danh sách khuyến mãi</h2>
            <p>Quản lý các chiến dịch đang chạy</p>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={promotions}
          rowKey="id"
          pagination={false}
          scroll={{ x: 500 }}
        />
      </Card>
    </div>
  );
};

export default PromotionManager;
