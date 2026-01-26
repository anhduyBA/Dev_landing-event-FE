import React, { useState, useEffect } from "react";
import { Card, Button, Table, Tag, Input, Space, Dropdown } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { staffMembers } from "../../mock/manager";

const StaffManagement = () => {
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
        key: "edit",
        label: "Chỉnh sửa",
        icon: <EditOutlined />,
      },
      {
        key: "delete",
        label: "Xóa",
        icon: <DeleteOutlined />,
        danger: true,
      },
    ],
  });

  const columns = [
    {
      title: "Nhân viên",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="customer-cell">
          <div className="customer-avatar">{text.charAt(0)}</div>
          <div>
            <div style={{ fontWeight: 500 }}>{text}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>{record.email}</div>
            {/* Show role on mobile */}
            {isMobile && (
              <Tag
                size="small"
                color={
                  record.role === "Admin"
                    ? "blue"
                    : record.role === "Editor"
                      ? "green"
                      : "default"
                }
                style={{ marginTop: 4 }}
              >
                {record.role}
              </Tag>
            )}
          </div>
        </div>
      ),
    },
    // Hide role column on mobile (shown inline above)
    ...(!isMobile
      ? [
          {
            title: "Vai trò",
            dataIndex: "role",
            key: "role",
            width: 100,
            render: (role) => (
              <Tag
                color={
                  role === "Admin"
                    ? "blue"
                    : role === "Editor"
                      ? "green"
                      : "default"
                }
              >
                {role}
              </Tag>
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
        <Tag color={status === "active" ? "green" : "red"}>
          {status === "active" ? "Hoạt động" : "Ngừng"}
        </Tag>
      ),
    },
    // Hide join date on mobile
    ...(!isMobile
      ? [
          {
            title: "Ngày tham gia",
            dataIndex: "joinDate",
            key: "joinDate",
            width: 120,
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
            <Button type="text" icon={<EditOutlined />} />
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Space>
        ),
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="header-info">
          <h1 className="page-main-title">Quản lý Staff</h1>
          <p className="page-description">
            Quản lý nhân viên và phân quyền trong hệ thống.
          </p>
        </div>
        <div className="header-actions">
          <Input
            placeholder="Tìm kiếm nhân viên..."
            prefix={<SearchOutlined />}
            className="search-input"
          />
          <Button type="primary" icon={<PlusOutlined />}>
            <span className="btn-text">Thêm nhân viên</span>
          </Button>
        </div>
      </div>

      <Card className="table-card">
        <Table
          columns={columns}
          dataSource={staffMembers}
          pagination={{ pageSize: 10 }}
          scroll={{ x: isMobile ? 400 : undefined }}
        />
      </Card>
    </div>
  );
};

export default StaffManagement;
