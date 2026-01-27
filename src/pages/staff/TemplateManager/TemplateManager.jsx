import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { 
  Table, Card, Button, Tabs, Tag, Space, 
  Modal, Form, Input, InputNumber, Select, Upload, message 
} from 'antd';
import { 
  PlusOutlined, EditOutlined, DeleteOutlined, 
  UploadOutlined, CloudUploadOutlined 
} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;

const TemplateManager = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  //  mock data template
  const initialData = [
    { id: 1, name: 'Landing Event Pro', category: 'Sự kiện', price: 500000, status: 'Active' },
    { id: 2, name: 'Beauty Shop Theme', category: 'Mỹ phẩm', price: 750000, status: 'Pending' },
    { id: 3, name: 'Game Marketing', category: 'Game', price: 600000, status: 'Active' },
  ];

  // Cột bảng Template
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 70 },
    { 
      title: 'Tên Template', 
      dataIndex: 'name', 
      key: 'name',
      render: (text) => <b style={{ color: '#1677ff' }}>{text}</b> 
    },
    { title: 'Danh mục', dataIndex: 'category', key: 'category' },
    { 
      title: 'Giá bán', 
      dataIndex: 'price', 
      key: 'price',
      render: (price) => `${price.toLocaleString()} đ`
    },
    { 
      title: 'Trạng thái', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'orange'}>
          {status === 'Active' ? 'Đã duyệt' : 'Chờ duyệt'}
        </Tag>
      ) 
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} size="small">Sửa</Button>
          <Button icon={<DeleteOutlined />} size="small" danger>Xóa</Button>
        </Space>
      ),
    },
  ];

  // Xử lý thêm template 
  const handleAddTemplate = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log('Received values:', values);
      message.success('Thêm template thành công!');
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  return (
    <div className="template-manager">
      <Tabs defaultActiveKey="1" type="card">
        
        {/* TAB 1: danh sách TEMPLATE */}
        <TabPane tab={<span><AppstoreOutlined /> Danh sách Template</span>} key="1">
          <Card 
            title="Kho Giao Diện" 
            extra={
              <Button type="primary" icon={<PlusOutlined />} onClick={handleAddTemplate}>
                Thêm Template Mới
              </Button>
            }
          >
            <Table columns={columns} dataSource={initialData} rowKey="id" pagination={{ pageSize: 5 }} />
          </Card>
        </TabPane>

        {/* TAB 2: UPLOAD DEMO */}
        <TabPane tab={<span><CloudUploadOutlined /> Upload Demo</span>} key="2">
          <Card title="Upload Bản Demo (Source Code)">
            <Form layout="vertical" style={{ maxWidth: 600 }}>
              <Form.Item label="Chọn Template để gắn Demo" name="templateId" required>
                <Select placeholder="Chọn template...">
                  <Option value="1">Landing Event Pro</Option>
                  <Option value="2">Beauty Shop Theme</Option>
                </Select>
              </Form.Item>
              
              <Form.Item label="File Demo (Zip/HTML)" name="demoFile">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon"><UploadOutlined /></p>
                  <p className="ant-upload-text">Kéo thả file hoặc click để upload</p>
                  <p className="ant-upload-hint">Hỗ trợ file .zip, .rar hoặc .html (Tối đa 50MB)</p>
                </Upload.Dragger>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">Tiến hành Upload</Button>
              </Form.Item>
            </Form>
          </Card>
        </TabPane>
      </Tabs>

      {/* thêm/sửa TEMPLATE */}
      <Modal 
        title="Thêm Template Mới" 
        open={isModalVisible} 
        onOk={handleOk} 
        onCancel={() => setIsModalVisible(false)}
        width={700}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Form.Item name="name" label="Tên Template" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="category" label="Danh mục" rules={[{ required: true }]}>
              <Select>
                <Option value="event">Sự kiện</Option>
                <Option value="beauty">Mỹ phẩm</Option>
                <Option value="game">Game</Option>
              </Select>
            </Form.Item>
          </div>
          
          <Form.Item name="price" label="Giá bán (VNĐ)" rules={[{ required: true }]}>
             <InputNumber style={{ width: '100%' }} formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} />
          </Form.Item>
          
          <Form.Item name="thumbnail" label="Ảnh đại diện (Thumbnail)">
            <Upload listType="picture-card">
              <div><PlusOutlined /><div style={{ marginTop: 8 }}>Upload</div></div>
            </Upload>
          </Form.Item>

          <Form.Item name="description" label="Mô tả chi tiết">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};



export default TemplateManager;