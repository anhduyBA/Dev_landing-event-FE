import React, { useState } from "react";
import { Card, Form, Input, Button, Switch, Row, Col, Tabs, Alert } from "antd";
import {
  SaveOutlined,
  CreditCardOutlined,
  BellOutlined,
  SettingOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState("payment");
  const [form] = Form.useForm();

  // Tab Thanh toán
  const PaymentTab = () => (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={14}>
        <Card className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon payment">
              <CreditCardOutlined />
            </div>
            <div className="settings-card-info">
              <h3>Cổng thanh toán</h3>
              <p>Quản lý các phương thức thanh toán được chấp nhận</p>
            </div>
          </div>

          <div className="payment-methods">
            <div className="payment-method-item">
              <div className="method-info">
                <div className="method-logo momo">MoMo</div>
                <div className="method-details">
                  <span className="method-name">Ví MoMo</span>
                  <span className="method-desc">Thanh toán qua App MoMo</span>
                </div>
              </div>
              <Switch defaultChecked className="custom-switch" />
            </div>

            <div className="payment-method-item">
              <div className="method-info">
                <div className="method-logo vnpay">VNPAY</div>
                <div className="method-details">
                  <span className="method-name">VNPAY QR</span>
                  <span className="method-desc">Quét mã QR ngân hàng</span>
                </div>
              </div>
              <Switch defaultChecked className="custom-switch" />
            </div>

            <div className="payment-method-item">
              <div className="method-info">
                <div className="method-logo international">
                  <GlobalOutlined />
                </div>
                <div className="method-details">
                  <span className="method-name">Thẻ quốc tế</span>
                  <span className="method-desc">Visa, Mastercard, JCB</span>
                </div>
              </div>
              <Switch defaultChecked className="custom-switch" />
            </div>
          </div>
        </Card>
      </Col>

      <Col xs={24} lg={10}>
        <Card className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon fee">
              <CreditCardOutlined />
            </div>
            <div className="settings-card-info">
              <h3>Thiết lập phí</h3>
            </div>
          </div>

          <Form layout="vertical" className="fee-form">
            <Form.Item
              label={
                <div className="fee-label">
                  <span>Phí sàn (%)</span>
                  <span className="fee-hint">Trên mỗi đơn</span>
                </div>
              }
            >
              <Input defaultValue="10" suffix="%" className="fee-input" />
            </Form.Item>

            <Form.Item
              label={
                <div className="fee-label">
                  <span>Min Payout</span>
                  <span className="fee-hint">Rút tối thiểu</span>
                </div>
              }
            >
              <Input defaultValue="500000" suffix="VND" className="fee-input" />
            </Form.Item>
          </Form>

          <Alert
            type="info"
            icon={<BellOutlined style={{ color: "#14b8a6" }} />}
            message={
              <span style={{ color: "#14b8a6", fontSize: 13 }}>
                Thay đổi phí sẽ chỉ áp dụng cho các đơn hàng mới. Các đơn hàng
                cũ vẫn giữ nguyên mức phí tại thời điểm tạo.
              </span>
            }
            className="fee-alert"
          />
        </Card>
      </Col>
    </Row>
  );

  // Tab Thông báo
  const NotificationTab = () => (
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <Card className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon email">
              <MailOutlined />
            </div>
            <div className="settings-card-info">
              <h3>Cấu hình Email</h3>
              <p>Tùy chỉnh nội dung email gửi tự động</p>
            </div>
          </div>

          <Form layout="vertical" className="email-form">
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item label="EMAIL CHÀO MỪNG">
                  <Input defaultValue="Welcome to TemplateStation!" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="EMAIL QUÊN MẬT KHẨU">
                  <Input defaultValue="Hướng dẫn đặt lại mật khẩu" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="EMAIL ĐƠN HÀNG">
                  <Input defaultValue="Xác nhận đơn hàng #{order_id}" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="EMAIL RÚT TIỀN">
                  <Input defaultValue="Yêu cầu rút tiền đang xử lý" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>

      <Col xs={24}>
        <Card className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon notification">
              <BellOutlined />
            </div>
            <div className="settings-card-info">
              <h3>Kênh thông báo</h3>
              <p>Bật/tắt các kênh liên lạc với người dùng</p>
            </div>
          </div>

          <div className="notification-channels">
            <div className="channel-item">
              <div className="channel-info">
                <span className="channel-name">Email Notification</span>
                <span className="channel-desc">
                  Gửi email cho các hoạt động quan trọng (Đơn hàng, bảo mật)
                </span>
              </div>
              <Switch defaultChecked className="custom-switch" />
            </div>

            <div className="channel-item">
              <div className="channel-info">
                <span className="channel-name">Browser Push</span>
                <span className="channel-desc">
                  Thông báo đẩy trên trình duyệt khi người dùng online
                </span>
              </div>
              <Switch defaultChecked className="custom-switch" />
            </div>

            <div className="channel-item">
              <div className="channel-info">
                <span className="channel-name">Marketing Messages</span>
                <span className="channel-desc">
                  Cho phép gửi tin nhắn quảng cáo, khuyến mãi
                </span>
              </div>
              <Switch defaultChecked className="custom-switch" />
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );

  // Tab Chung
  const GeneralTab = () => (
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <Card className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon general">
              <GlobalOutlined />
            </div>
            <div className="settings-card-info">
              <h3>Thông tin chung</h3>
              <p>Thông tin hiển thị công khai trên website</p>
            </div>
          </div>

          <Form layout="vertical" className="general-form">
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item label="Tên Website">
                  <Input defaultValue="TemplateStation" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Slogan">
                  <Input defaultValue="Digital Creative Market" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Email liên hệ">
                  <Input defaultValue="contact@templatestation.com" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Số điện thoại">
                  <Input defaultValue="+84 900 000 000" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="Địa chỉ">
                  <Input defaultValue="Ho Chi Minh City, Vietnam" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );

  const tabItems = [
    {
      key: "payment",
      label: (
        <span className="tab-label">
          <CreditCardOutlined />
          Thanh toán
        </span>
      ),
      children: <PaymentTab />,
    },
    {
      key: "notification",
      label: (
        <span className="tab-label">
          <BellOutlined />
          Thông báo
        </span>
      ),
      children: <NotificationTab />,
    },
    {
      key: "general",
      label: (
        <span className="tab-label">
          <SettingOutlined />
          Chung
        </span>
      ),
      children: <GeneralTab />,
    },
  ];

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div className="header-info">
          <h1 className="settings-title">Cấu hình hệ thống</h1>
          <p className="settings-description">
            Quản lý thiết lập vận hành và thông số kỹ thuật.
          </p>
        </div>
        <Button type="primary" icon={<SaveOutlined />} className="save-btn">
          Lưu thay đổi
        </Button>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={tabItems}
        className="settings-tabs"
      />
    </div>
  );
};

export default SystemSettings;
