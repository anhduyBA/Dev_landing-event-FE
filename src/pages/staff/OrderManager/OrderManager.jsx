import React, { useState } from 'react';
import { Table, Card, Tag, Button, Modal, Select, Steps, Descriptions } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const { Option } = Select;

const OrderManager = () => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    { id: 'ORD001', customer: 'Nguyễn Văn A', date: '2025-10-20', total: 500000, status: 'Paid' },
    { id: 'ORD002', customer: 'Trần Thị B', date: '2025-10-21', total: 750000, status: 'Pending' },
    { id: 'ORD003', customer: 'Lê Văn C', date: '2025-10-22', total: 1200000, status: 'Cancelled' },
  ];

  const columns = [
    { title: 'Mã Đơn', dataIndex: 'id', key: 'id' },
    { title: 'Khách hàng', dataIndex: 'customer', key: 'customer' },
    { title: 'Ngày đặt', dataIndex: 'date', key: 'date' },
    { title: 'Tổng tiền', dataIndex: 'total', render: (val) => `${val.toLocaleString()} đ` },
    { 
      title: 'Trạng thái', 
      dataIndex: 'status', 
      render: (status) => {
        let color = status === 'Paid' ? 'green' : status === 'Pending' ? 'orange' : 'red';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        <Button 
          icon={<EyeOutlined />} 
          size="small" 
          onClick={() => { setSelectedOrder(record); setIsDetailVisible(true); }}
        >
          Chi tiết
        </Button>
      ),
    },
  ];

  return (
    <Card title="Danh Sách Đơn Hàng">
      <Table dataSource={orders} columns={columns} rowKey="id" />

      {/* MODAL CHI TIẾT ĐƠN HÀNG */}
      <Modal 
        title={`Chi tiết đơn hàng ${selectedOrder?.id || ''}`} 
        open={isDetailVisible} 
        onCancel={() => setIsDetailVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsDetailVisible(false)}>Đóng</Button>,
          <Button key="update" type="primary">Cập nhật trạng thái</Button>,
        ]}
        width={800}
      >
        {selectedOrder && (
          <>
            <Steps current={selectedOrder.status === 'Paid' ? 2 : 1} size="small" style={{ marginBottom: 24 }}>
              <Steps.Step title="Đặt hàng" />
              <Steps.Step title="Thanh toán" />
              <Steps.Step title="Hoàn thành" />
            </Steps>
            
            <Descriptions bordered column={2}>
              <Descriptions.Item label="Khách hàng">{selectedOrder.customer}</Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">0901234567</Descriptions.Item>
              <Descriptions.Item label="Sản phẩm">Landing Page Event Pro</Descriptions.Item>
              <Descriptions.Item label="Tổng tiền">{selectedOrder.total.toLocaleString()} đ</Descriptions.Item>
              <Descriptions.Item label="Cập nhật trạng thái" span={2}>
                 <Select defaultValue={selectedOrder.status} style={{ width: 200 }}>
                   <Option value="Paid">Đã thanh toán (Paid)</Option>
                   <Option value="Pending">Chờ xử lý (Pending)</Option>
                   <Option value="Cancelled">Đã hủy (Cancelled)</Option>
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