import React, { useState } from "react";
import { Layout, Menu, Avatar, Button, Badge, Drawer } from "antd";
import {
  ThunderboltOutlined,
  AppstoreOutlined,
  TeamOutlined,
  InboxOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { ROUTES, ROUTE_TITLES } from "../routes/routes";
import { useAuth } from "../hooks/useAuth.jsx";

const { Sider, Header, Content } = Layout;

const ManagerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items configuration
  const menuItems = [
    {
      key: ROUTES.MANAGER.DASHBOARD,
      icon: <AppstoreOutlined />,
      label: ROUTE_TITLES[ROUTES.MANAGER.DASHBOARD],
    },
    {
      key: ROUTES.MANAGER.STAFF,
      icon: <TeamOutlined />,
      label: ROUTE_TITLES[ROUTES.MANAGER.STAFF],
    },
    {
      key: ROUTES.MANAGER.INVENTORY,
      icon: <InboxOutlined />,
      label: ROUTE_TITLES[ROUTES.MANAGER.INVENTORY],
    },
    {
      key: ROUTES.MANAGER.SETTINGS,
      icon: <SettingOutlined />,
      label: ROUTE_TITLES[ROUTES.MANAGER.SETTINGS],
    },
  ];

  // Get current page title
  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(
      (item) => item.key === location.pathname,
    );
    return currentItem?.label || ROUTE_TITLES[ROUTES.MANAGER.DASHBOARD];
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
        <Link to={ROUTES.MANAGER.DASHBOARD} className="sidebar-logo">
          <div className="logo-icon">
            <ThunderboltOutlined />
          </div>
          {(!collapsed || isMobile) && (
            <span className="logo-text">TemplateStation</span>
          )}
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
          className="manager-menu"
        />
      </div>

      {/* User Section */}
      <div className="sidebar-footer">
        <div className="user-info">
          <Avatar size={40} className="user-avatar">
            {collapsed && !isMobile ? "M" : "M"}
          </Avatar>
          {(!collapsed || isMobile) && (
            <div className="user-details">
              <span className="user-name">Manager 001</span>
              <span className="user-email">manager@gmail.com</span>
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
    <Layout className="manager-layout">
      {/* Desktop Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={260}
        collapsedWidth={80}
        className="manager-sider desktop-sider"
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
      <Layout className="manager-main">
        {/* Header */}
        <Header className="manager-header">
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
        <Content className="manager-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManagerLayout;
