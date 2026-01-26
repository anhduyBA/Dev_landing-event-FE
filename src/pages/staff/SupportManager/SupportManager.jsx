import React, { useState } from 'react';
import { Table, Card, Tag, Button, Modal, Input, List, Avatar } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const SupportManager = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null);

  const tickets = [
    { id: 'T001', customer: 'Nguyễn Văn A', issue: 'Lỗi không tải được file', status: 'Open', date: '10 phút trước' },
    { id: 'T002', customer: 'Trần Thị B', issue: 'Cần xuất hóa đơn VAT', status: 'Resolved', date: '2 giờ trước' },
  ];

  const columns = [
    { title: 'Ticket ID', dataIndex: 'id', key: 'id' },
    { title: 'Khách hàng', dataIndex: 'customer', key: 'customer' },
    { title: 'Vấn đề', dataIndex: 'issue', key: 'issue' },
    { 
      title: 'Trạng thái', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => <Tag color={status === 'Open' ? 'red' : 'green'}>{status}</Tag>
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Button 
          type="primary" ghost icon={<MessageOutlined />} 
          onClick={() => { setCurrentTicket(record); setIsChatVisible(true); }}
        >
          Phản hồi
        </Button>
      ),
    },
  ];

  return (
    <Card title="Yêu Cầu Hỗ Trợ">
      <Table columns={columns} dataSource={tickets} rowKey="id" />

      {/* MODAL PHẢN HỒI (CHAT) */}
      <Modal 
        title={`Hỗ trợ: ${currentTicket?.issue} (${currentTicket?.customer})`} 
        open={isChatVisible} 
        onCancel={() => setIsChatVisible(false)}
        footer={null}
      >
        <List itemLayout="horizontal">
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
              title="Khách hàng"
              description="Tôi đã thanh toán nhưng không thấy nút download?"
            />
          </List.Item>
        </List>
        <div style={{ marginTop: 20 }}>
          <TextArea rows={4} placeholder="Nhập nội dung phản hồi..." />
          <Button type="primary" style={{ marginTop: 10, float: 'right' }}>Gửi Phản Hồi</Button>
        </div>
      </Modal>
    </Card>
  );
};

export default SupportManager;