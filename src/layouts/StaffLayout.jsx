import React, { useState } from 'react';
import { Layout, Menu, Button, Avatar, Dropdown, theme } from 'antd';
import { 
  AppstoreOutlined, 
  ShoppingOutlined, 
  UserOutlined, 
  GiftOutlined, 
  CustomerServiceOutlined,
  MenuFoldOutlined, 
  MenuUnfoldOutlined, 
  LogoutOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const StaffLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Cấu hình Menu Staff
  const menuItems = [
    {
      key: '/staff/templates',
      icon: <AppstoreOutlined />,
      label: 'Quản lý Template',
    },
    {
      key: '/staff/orders',
      icon: <ShoppingOutlined />,
      label: 'Quản lý Đơn hàng',
    },
    {
      key: '/staff/customers',
      icon: <UserOutlined />,
      label: 'Quản lý Khách hàng',
    },
    {
      key: '/staff/promotions',
      icon: <GiftOutlined />,
      label: 'Quản lý Khuyến mãi',
    },
    {
      key: '/staff/support',
      icon: <CustomerServiceOutlined />,
      label: 'Hỗ trợ Khách hàng',
    },
  ];

  // Menu dropdown cho User
  const userMenu = {
    items: [
      { key: '1', label: 'Thông tin cá nhân', icon: <UserSwitchOutlined /> },
      { type: 'divider' },
      { key: '2', label: 'Đăng xuất', icon: <LogoutOutlined />, danger: true, onClick: () => navigate('/login') },
    ],
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f0f0f0' }}>
           {/* Logo - Hiển thị tắt mở theo trạng thái collapse */}
           <h2 style={{ color: '#1677ff', margin: 0, fontSize: collapsed ? '16px' : '20px', fontWeight: 'bold' }}>
             {collapsed ? 'TS' : 'STAFF PORTAL'}
           </h2>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ borderRight: 0 }}
        />
      </Sider>
      
      <Layout>
        <Header style={{ padding: '0 24px', background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64 }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
             <span style={{ fontWeight: 500 }}>Xin chào, Nhân viên</span>
             <Dropdown menu={userMenu}>
                <Avatar style={{ backgroundColor: '#1677ff', cursor: 'pointer' }} icon={<UserOutlined />} />
             </Dropdown>
          </div>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: 'auto'
          }}
        >
          
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default StaffLayout;