import React, { useState } from 'react';
import { Table, Card, Button, Modal, Tag, Avatar, Tooltip } from 'antd';
import { UserOutlined, HistoryOutlined } from '@ant-design/icons';

const CustomerManager = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Mock Data Khách hàng
  const customers = [
    { id: 1, name: 'Nguyễn Văn A', email: 'vana@gmail.com', phone: '0901234567', totalSpent: 1500000, rank: 'Gold' },
    { id: 2, name: 'Trần Thị B', email: 'thib@gmail.com', phone: '0912345678', totalSpent: 500000, rank: 'Silver' },
  ];

  // Mock Data Lịch sử mua hàng
  const purchaseHistory = [
    { id: 'ORD001', date: '2025-01-15', template: 'Landing Event Pro', amount: 500000 },
    { id: 'ORD005', date: '2025-02-10', template: 'Beauty Shop Theme', amount: 750000 },
  ];

  const columns = [
    { 
      title: 'Khách hàng', 
      key: 'name', 
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }} />
          <div>
            <div style={{ fontWeight: 'bold' }}>{record.name}</div>
            <div style={{ fontSize: '12px', color: '#888' }}>{record.email}</div>
          </div>
        </div>
      )
    },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
    { 
      title: 'Hạng thành viên', 
      dataIndex: 'rank', 
      key: 'rank',
      render: (rank) => <Tag color={rank === 'Gold' ? 'gold' : 'blue'}>{rank}</Tag>
    },
    { 
      title: 'Tổng chi tiêu', 
      dataIndex: 'totalSpent', 
      key: 'totalSpent',
      render: (val) => <b>{val.toLocaleString()} đ</b>
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Tooltip title="Xem lịch sử mua hàng">
          <Button 
            icon={<HistoryOutlined />} 
            onClick={() => { setSelectedCustomer(record); setIsHistoryVisible(true); }}
          >
            Lịch sử
          </Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <Card title="Danh Sách Khách Hàng">
      <Table columns={columns} dataSource={customers} rowKey="id" />

      {/* MODAL LỊCH SỬ MUA HÀNG */}
      <Modal 
        title={`Lịch sử mua hàng - ${selectedCustomer?.name}`} 
        open={isHistoryVisible} 
        onCancel={() => setIsHistoryVisible(false)}
        footer={null}
        width={700}
      >
        <Table 
          dataSource={purchaseHistory} 
          rowKey="id"
          pagination={false}
          columns={[
            { title: 'Mã đơn', dataIndex: 'id' },
            { title: 'Ngày mua', dataIndex: 'date' },
            { title: 'Sản phẩm', dataIndex: 'template' },
            { title: 'Giá tiền', dataIndex: 'amount', render: (val) => `${val.toLocaleString()} đ` },
          ]} 
        />
      </Modal>
    </Card>
  );
};

export default CustomerManager;