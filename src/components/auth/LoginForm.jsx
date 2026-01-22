import React, { useState } from "react";
import { Input, Button, Divider, Form } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  BankOutlined,
  GoogleOutlined,
  FacebookFilled,
  GithubOutlined,
} from "@ant-design/icons";

const LoginForm = () => {
  const [form] = Form.useForm();
  const [userType, setUserType] = useState("personal"); // 'personal' | 'business'
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      console.log("Login attempt:", { ...values, type: userType });
      // TODO: Call API login here
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log("Social login:", provider);
  };

  const isPersonal = userType === "personal";

  // Validation rules
  const emailRules = [
    { required: true, message: "Vui lòng nhập email!" },
    { type: "email", message: "Email không hợp lệ!" },
  ];

  const passwordRules = [
    { required: true, message: "Vui lòng nhập mật khẩu!" },
    { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
  ];

  return (
    <div className="login-form">
      <div className="form-header">
        <h1 className="form-title">Đăng nhập</h1>
        <p className="form-subtitle">
          Truy cập vào tài khoản TemplateStation của bạn.
        </p>
      </div>

      {/* User Type Toggle */}
      <div className="user-type-toggle">
        <button
          type="button"
          className={`toggle-btn ${isPersonal ? "active" : ""}`}
          onClick={() => setUserType("personal")}
        >
          <UserOutlined className="toggle-icon" />
          <span>Cá nhân</span>
        </button>
        <button
          type="button"
          className={`toggle-btn ${!isPersonal ? "active" : ""}`}
          onClick={() => setUserType("business")}
        >
          <BankOutlined className="toggle-icon" />
          <span>Doanh nghiệp</span>
        </button>
      </div>

      <Form
        form={form}
        onFinish={handleLogin}
        className="form-content"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label={
            <span className="input-label">
              {isPersonal ? "Địa chỉ Email" : "Email doanh nghiệp"}
            </span>
          }
          rules={emailRules}
        >
          <Input
            size="large"
            placeholder={
              isPersonal ? "alex@example.com" : "contact@company.com"
            }
            prefix={<MailOutlined className="input-icon" />}
            className="form-input"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="input-label">Mật khẩu</span>}
          rules={passwordRules}
        >
          <Input.Password
            size="large"
            placeholder="••••••••"
            prefix={<LockOutlined className="input-icon" />}
            className="form-input"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={loading}
            className="login-button"
          >
            Đăng nhập <span className="arrow">→</span>
          </Button>
        </Form.Item>

        <div className="forgot-password">
          <a href="#" className="forgot-link">
            QUÊN MẬT KHẨU ?
          </a>
        </div>

        <Divider className="divider">
          <span className="divider-text">HOẶC TIẾP TỤC VỚI</span>
        </Divider>

        <div className="social-login">
          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin("google")}
            aria-label="Login with Google"
          >
            <GoogleOutlined className="social-icon" />
          </button>
          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin("facebook")}
            aria-label="Login with Facebook"
          >
            <FacebookFilled className="social-icon facebook" />
          </button>
          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin("github")}
            aria-label="Login with GitHub"
          >
            <GithubOutlined className="social-icon" />
          </button>
        </div>

        <div className="signup-link">
          <span>Chưa có tài khoản? </span>
          <a href="/register" className="signup-text">
            Đăng ký ngay
          </a>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
