import React, { useState } from 'react'
import { Input, Button, Tabs, Divider } from 'antd'
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('personal')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login attempt:', { email, password, type: activeTab })
  }

  const handleSocialLogin = (provider) => {
    console.log('Social login:', provider)
  }

  const tabItems = [
    {
      key: 'personal',
      label: 'Cá nhân',
    },
    {
      key: 'business',
      label: 'Doanh nghiệp',
    },
  ]

  return (
    <div className="login-form">
      <div className="form-header">
        <h1 className="form-title">Đăng nhập</h1>
        <p className="form-subtitle">Truy cập vào tài khoản TemplateStation của bạn</p>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={tabItems}
        className="login-tabs"
      />

      <div className="form-content">
        <div className="input-group">
          <Input
            size="large"
            placeholder="Địa chỉ Email"
            prefix={<UserOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="input-group">
          <Input.Password
            size="large"
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <Button
          type="primary"
          size="large"
          block
          onClick={handleLogin}
          className="login-button"
        >
          Đăng nhập →
        </Button>

        <div className="forgot-password">
          <a href="#" className="forgot-link">Quên mật khẩu?</a>
        </div>

        <Divider className="divider">
          <span className="divider-text">HOẶC TIẾP TỤC VỚI</span>
        </Divider>

        <div className="social-login">
          <Button
            icon={<GoogleOutlined />}
            className="social-button google"
            onClick={() => handleSocialLogin('google')}
          />
          <Button
            icon={<FacebookOutlined />}
            className="social-button facebook"
            onClick={() => handleSocialLogin('facebook')}
          />
          <Button
            icon={<GithubOutlined />}
            className="social-button github"
            onClick={() => handleSocialLogin('github')}
          />
        </div>

        <div className="signup-link">
          <span>Chưa có tài khoản? </span>
          <a href="/register" className="signup-text">Đăng ký ngay</a>
        </div>
      </div>
    </div>
  )
}

export default LoginForm