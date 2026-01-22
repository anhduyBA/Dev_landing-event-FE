import React, { useState } from "react";
import { Input, Button, Checkbox, Form, Row, Col } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  BankOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [userType, setUserType] = useState("personal"); // 'personal' | 'business'
  const [loading, setLoading] = useState(false);

  const isPersonal = userType === "personal";

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      console.log("Register data:", { ...values, accountType: userType });
      // TODO: Call API register here
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reset form when switching user type
  const handleUserTypeChange = (type) => {
    setUserType(type);
    form.resetFields();
  };

  // Validation rules
  const nameRules = [
    {
      required: true,
      message: isPersonal
        ? "Vui lòng nhập họ và tên!"
        : "Vui lòng nhập tên người đại diện!",
    },
  ];

  const companyNameRules = [
    { required: true, message: "Vui lòng nhập tên công ty!" },
  ];

  const taxCodeRules = [
    { required: true, message: "Vui lòng nhập mã số thuế!" },
    { pattern: /^[0-9]{10,13}$/, message: "Mã số thuế phải có 10-13 chữ số!" },
  ];

  const emailRules = [
    { required: true, message: "Vui lòng nhập email!" },
    { type: "email", message: "Email không hợp lệ!" },
  ];

  const passwordRules = [
    { required: true, message: "Vui lòng nhập mật khẩu!" },
    { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
  ];

  const confirmPasswordRules = [
    { required: true, message: "Vui lòng xác nhận mật khẩu!" },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
      },
    }),
  ];

  const agreementRules = [
    {
      validator: (_, value) =>
        value
          ? Promise.resolve()
          : Promise.reject(new Error("Bạn cần đồng ý với điều khoản dịch vụ!")),
    },
  ];

  return (
    <div className="login-form register-form">
      <div className="form-header">
        <h1 className="form-title">Tạo tài khoản</h1>
        <p className="form-subtitle">
          Gia nhập cộng đồng sáng tạo và chuyên nghiệp.
        </p>
      </div>

      {/* User Type Toggle */}
      <div className="user-type-toggle">
        <button
          type="button"
          className={`toggle-btn ${isPersonal ? "active" : ""}`}
          onClick={() => handleUserTypeChange("personal")}
        >
          <UserOutlined className="toggle-icon" />
          <span>Cá nhân</span>
        </button>
        <button
          type="button"
          className={`toggle-btn ${!isPersonal ? "active" : ""}`}
          onClick={() => handleUserTypeChange("business")}
        >
          <BankOutlined className="toggle-icon" />
          <span>Doanh nghiệp</span>
        </button>
      </div>

      <Form
        form={form}
        onFinish={handleRegister}
        className="form-content"
        layout="vertical"
        requiredMark={false}
      >
        {/* Personal: Họ và tên */}
        {isPersonal && (
          <Form.Item
            name="fullName"
            label={<span className="input-label-upper">HỌ VÀ TÊN</span>}
            rules={nameRules}
          >
            <Input
              size="large"
              placeholder="Nguyễn Văn A"
              prefix={<UserOutlined className="input-icon" />}
              className="form-input"
            />
          </Form.Item>
        )}

        {/* Business: Người đại diện */}
        {!isPersonal && (
          <>
            <Form.Item
              name="representativeName"
              label={<span className="input-label-upper">NGƯỜI ĐẠI DIỆN</span>}
              rules={nameRules}
            >
              <Input
                size="large"
                placeholder="Trần Văn A"
                prefix={<UserOutlined className="input-icon" />}
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="companyName"
              label={<span className="input-label-upper">TÊN CÔNG TY</span>}
              rules={companyNameRules}
            >
              <Input
                size="large"
                placeholder="Công ty TNHH Giải pháp Công nghệ"
                prefix={<BankOutlined className="input-icon" />}
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="taxCode"
              label={<span className="input-label-upper">MÃ SỐ THUẾ</span>}
              rules={taxCodeRules}
            >
              <Input
                size="large"
                placeholder="0123456789"
                prefix={<FileTextOutlined className="input-icon" />}
                className="form-input"
              />
            </Form.Item>
          </>
        )}

        {/* Email */}
        <Form.Item
          name="email"
          label={<span className="input-label-upper">EMAIL</span>}
          rules={emailRules}
        >
          <Input
            size="large"
            placeholder="example@email.com"
            prefix={<MailOutlined className="input-icon" />}
            className="form-input"
          />
        </Form.Item>

        {/* Password Row */}
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="password"
              label={<span className="input-label-upper">MẬT KHẨU</span>}
              rules={passwordRules}
            >
              <Input.Password
                size="large"
                placeholder="••••••••"
                prefix={<LockOutlined className="input-icon" />}
                className="form-input"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="confirmPassword"
              label={<span className="input-label-upper">XÁC NHẬN</span>}
              rules={confirmPasswordRules}
            >
              <Input.Password
                size="large"
                placeholder="••••••••"
                prefix={<LockOutlined className="input-icon" />}
                className="form-input"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Agreement Checkbox */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={agreementRules}
          className="agreement-item"
        >
          <Checkbox className="agreement-checkbox">
            <span className="agreement-text">
              {isPersonal
                ? "Bằng cách đăng ký, tôi đồng ý với "
                : "Tôi đồng ý với "}
              <a href="#" className="agreement-link">
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a href="#" className="agreement-link">
                Chính sách quyền riêng tư
              </a>
              {isPersonal && " của TemplateStation."}
            </span>
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={loading}
            className="register-button"
          >
            {isPersonal ? "Đăng ký Cá nhân" : "Đăng ký Doanh nghiệp"}
          </Button>
        </Form.Item>

        {/* Login Link */}
        <div className="login-link">
          <span>Bạn đã có tài khoản? </span>
          <Link to="/login" className="login-link-text">
            Đăng nhập ngay <span className="arrow">→</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
