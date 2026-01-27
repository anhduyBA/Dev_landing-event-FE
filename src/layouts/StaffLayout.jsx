import React, { useState } from "react";
import { Layout, Menu, Avatar, Button, Badge, Drawer } from "antd";
import {
  ThunderboltOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  GiftOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
  BellOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { ROUTES, ROUTE_TITLES } from "../routes/routes";
import { useAuth } from "../hooks/useAuth.jsx";
import "../styles/staff.css";
import "../styles/staff-pages.css";

const { Sider, Header, Content } = Layout;

const StaffLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items configuration
  const menuItems = [
    {
      key: ROUTES.STAFF.TEMPLATES,
      icon: <AppstoreOutlined />,
      label: ROUTE_TITLES[ROUTES.STAFF.TEMPLATES] || "Quản lý Template",
    },
    {
      key: ROUTES.STAFF.ORDERS,
      icon: <ShoppingCartOutlined />,
      label: ROUTE_TITLES[ROUTES.STAFF.ORDERS] || "Quản lý Đơn hàng",
    },
    {
      key: ROUTES.STAFF.CUSTOMERS,
      icon: <UserOutlined />,
      label: ROUTE_TITLES[ROUTES.STAFF.CUSTOMERS] || "Quản lý Khách hàng",
    },
    {
      key: ROUTES.STAFF.PROMOTIONS,
      icon: <GiftOutlined />,
      label: ROUTE_TITLES[ROUTES.STAFF.PROMOTIONS] || "Quản lý Khuyến mãi",
    },
    {
      key: ROUTES.STAFF.SUPPORT,
      icon: <CustomerServiceOutlined />,
      label: ROUTE_TITLES[ROUTES.STAFF.SUPPORT] || "Hỗ trợ Khách hàng",
    },
  ];

  // Get current page title
  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(
      (item) => item.key === location.pathname,
    );
    return currentItem?.label || "Staff Portal";
  };

  // Handle menu click
  const handleMenuClick = ({ key }) => {
    navigate(key);
    setMobileMenuOpen(false);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate(ROUTES.AUTH.LOGIN);
  };

  // Sidebar content (reusable for both desktop and mobile)
  const SidebarContent = ({ isMobile = false }) => (
    <div className="sidebar-wrapper">
      {/* Logo Section */}
      <div className="sidebar-header">
        <Link to={ROUTES.STAFF.TEMPLATES} className="sidebar-logo">
          <div className="logo-icon">
            <ThunderboltOutlined />
          </div>
          {(!collapsed || isMobile) && <span className="logo-text">Staff</span>}
        </Link>
        {isMobile && (
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-close-btn"
          />
        )}
      </div>

      {/* Menu Section */}
      <div className="sidebar-menu">
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          className="staff-menu"
        />
      </div>

      {/* User Section */}
      <div className="sidebar-footer">
        <div className="user-info">
          <Avatar size={40} className="user-avatar">
            {collapsed && !isMobile ? "S" : "S"}
          </Avatar>
          {(!collapsed || isMobile) && (
            <div className="user-details">
              <span className="user-name">Staff 001</span>
              <span className="user-email">staff@gmail.com</span>
            </div>
          )}
        </div>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          className="logout-btn"
          block={!collapsed || isMobile}
        >
          {(!collapsed || isMobile) && "Đăng xuất"}
        </Button>
      </div>
    </div>
  );

  return (
    <Layout className="staff-layout">
      {/* Desktop Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={260}
        collapsedWidth={80}
        className="staff-sider desktop-sider"
        trigger={null}
      >
        <SidebarContent />
      </Sider>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="mobile-drawer"
        width={280}
        closable={false}
        styles={{ body: { padding: 0 } }}
      >
        <SidebarContent isMobile />
      </Drawer>

      {/* Main Layout */}
      <Layout className="staff-main">
        {/* Header */}
        <Header className="staff-header">
          <div className="header-left">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
            />
            <h1 className="page-title">{getCurrentPageTitle()}</h1>
          </div>
          <div className="header-right">
            <Badge count={3} size="small">
              <Button
                type="text"
                icon={<BellOutlined />}
                className="notification-btn"
              />
            </Badge>
          </div>
        </Header>

        {/* Content */}
        <Content className="staff-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default StaffLayout;
