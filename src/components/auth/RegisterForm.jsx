// File: src/components/auth/RegisterForm.jsx
import React, { useState } from 'react'
import { Input, Button, Checkbox, Divider, Tabs, message } from 'antd'
import { 
  UserOutlined, 
  MailOutlined, 
  LockOutlined, 
  GoogleOutlined, 
  FacebookOutlined, 
  GithubOutlined,
  BankOutlined // <-- Import thêm icon ngân hàng/công ty
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [activeTab, setActiveTab] = useState('personal') // Mặc định là 'Cá nhân'
  const [loading, setLoading] = useState(false)
  
  // State lưu dữ liệu form
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: false
  })

  // Cấu hình 2 Tab giống trang Login
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

  const handleChange = (e) => {
    // Xử lý lấy dữ liệu khi người dùng gõ phím hoặc tick checkbox
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleRegister = () => {
    // 1. Kiểm tra các trường chung (Email, Password)
    if (!formData.email || !formData.password) {
      return message.error('Vui lòng điền đầy đủ Email và Mật khẩu!')
    }
    
    // 2. Kiểm tra riêng từng Tab
    if (activeTab === 'personal') {
       if (!formData.fullName) return message.error('Vui lòng nhập Họ và tên!')
    } 
    else if (activeTab === 'business') {
       if (!formData.companyName) return message.error('Vui lòng nhập Tên công ty!')
       if (!formData.fullName) return message.error('Vui lòng nhập tên Người đại diện!')
    }

    // 3. Kiểm tra mật khẩu khớp nhau
    if (formData.password !== formData.confirmPassword) {
      return message.error('Mật khẩu nhập lại không khớp!')
    }
    
    // 4. Kiểm tra checkbox điều khoản
    if (!formData.agreement) {
      return message.warning('Bạn cần đồng ý với điều khoản sử dụng!')
    }

    setLoading(true)
    
    // Giả lập gửi dữ liệu đi (Sau này bạn sẽ thay bằng gọi API thật)
    setTimeout(() => {
      console.log('Dữ liệu gửi đi:', { 
        ...formData, 
        accountType: activeTab // Gửi thêm loại tài khoản (personal/business)
      })
      message.success(`Đăng ký tài khoản ${activeTab === 'personal' ? 'Cá nhân' : 'Doanh nghiệp'} thành công!`)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="login-form">
      <div className="form-header">
        <h1 className="form-title">Đăng ký tài khoản</h1>
        <p className="form-subtitle">Tham gia cộng đồng TemplateStation ngay hôm nay</p>
      </div>

      {/* --- PHẦN TABS CHUYỂN ĐỔI --- */}
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab} // Khi bấm tab, cập nhật state activeTab
        items={tabItems}
        className="login-tabs"
      />

      <div className="form-content">
        
        {/* --- LOGIC HIỂN THỊ CÁC TRƯỜNG --- */}
        
        {/* Chỉ hiện ô "Tên công ty" khi đang ở Tab Doanh nghiệp */}
        {activeTab === 'business' && (
          <div className="input-group">
            <Input
              size="large"
              placeholder="Tên công ty / Tổ chức"
              prefix={<BankOutlined />}
              name="companyName"
              className="form-input"
              onChange={handleChange}
            />
          </div>
        )}

        {/* Ô Họ tên (Đổi placeholder tùy theo Tab) */}
        <div className="input-group">
          <Input
            size="large"
            placeholder={activeTab === 'personal' ? "Họ và tên" : "Người đại diện"} 
            prefix={<UserOutlined />}
            name="fullName"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        {/* Các trường chung (Email, Pass) */}
        <div className="input-group">
          <Input
            size="large"
            placeholder="Địa chỉ Email"
            prefix={<MailOutlined />}
            name="email"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <Input.Password
            size="large"
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            name="password"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <Input.Password
            size="large"
            placeholder="Nhập lại mật khẩu"
            prefix={<LockOutlined />}
            name="confirmPassword"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: 24, textAlign: 'left' }}>
          <Checkbox name="agreement" onChange={handleChange}>
            Tôi đồng ý với <a href="#" style={{ color: '#10b981', fontWeight: 500 }}>Điều khoản & Chính sách</a>
          </Checkbox>
        </div>

        <Button
          type="primary"
          size="large"
          block
          loading={loading}
          onClick={handleRegister}
          className="login-button"
        >
          Đăng ký tài khoản
        </Button>

        <div className="signup-link">
          <span>Đã có tài khoản? </span>
          <Link to="/login" className="signup-text">Đăng nhập ngay</Link>
        </div>

        <Divider className="divider">
          <span className="divider-text">HOẶC ĐĂNG KÝ VỚI</span>
        </Divider>

        <div className="social-login">
          <Button icon={<GoogleOutlined />} className="social-button google" />
          <Button icon={<FacebookOutlined />} className="social-button facebook" />
          <Button icon={<GithubOutlined />} className="social-button github" />
        </div>
      </div>
    </div>
  )
}

export default RegisterForm