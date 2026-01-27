import React, { useState } from 'react';
import { Card, Button, Table, Modal, Form, Input, DatePicker, InputNumber, Select, message } from 'antd';
import { PlusOutlined, SendOutlined } from '@ant-design/icons';

const PromotionManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Mock Data Mã giảm giá
  const promotions = [
    { id: 1, code: 'SALE50', discount: 50, type: 'Percent', expiry: '2025-12-31', status: 'Active' },
    { id: 2, code: 'WELCOME', discount: 100000, type: 'Fixed', expiry: '2025-06-30', status: 'Expired' },
  ];

  const columns = [
    { title: 'Mã Code', dataIndex: 'code', key: 'code', render: (text) => <b style={{ color: '#1677ff' }}>{text}</b> },
    { title: 'Mức giảm', dataIndex: 'discount', key: 'discount', render: (val, record) => record.type === 'Percent' ? `${val}%` : `${val.toLocaleString()} đ` },
    { title: 'Hạn sử dụng', dataIndex: 'expiry', key: 'expiry' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
    {
      title: 'Hành động',
      key: 'action',
      render: () => <Button icon={<SendOutlined />} size="small">Gửi Email</Button>
    }
  ];

  const handleCreate = () => {
    form.validateFields().then((values) => {
      message.success(`Đã tạo mã ${values.code} thành công!`);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  return (
    <Card 
      title="Chương trình khuyến mãi" 
      extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>Tạo Mã Mới</Button>}
    >
      <Table columns={columns} dataSource={promotions} rowKey="id" />

      {/* MODAL TẠO MÃ */}
      <Modal title="Tạo Mã Giảm Giá Mới" open={isModalVisible} onOk={handleCreate} onCancel={() => setIsModalVisible(false)}>
        <Form form={form} layout="vertical">
          <Form.Item name="code" label="Mã Code (VD: TET2025)" rules={[{ required: true }]}>
            <Input style={{ textTransform: 'uppercase' }} />
          </Form.Item>
          <div style={{ display: 'flex', gap: 16 }}>
            <Form.Item name="type" label="Loại giảm giá" style={{ flex: 1 }}>
              <Select defaultValue="Percent">
                <Select.Option value="Percent">Phần trăm (%)</Select.Option>
                <Select.Option value="Fixed">Số tiền (VNĐ)</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="discount" label="Giá trị giảm" style={{ flex: 1 }} rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </div>
          <Form.Item name="expiry" label="Ngày hết hạn">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default PromotionManager;