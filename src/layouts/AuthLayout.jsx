import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-left-panel">
        <div className="brand-section">
          <div className="brand-logo">
            <div className="logo-icon">
              <span className="logo-symbol">⚡</span>
            </div>
            <h1 className="brand-name">TemplateStation</h1>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">GIA NHẬP MẠNG LƯỚI SÁNG TẠO ƯU TÚ</span>
          </div>
          <h2 className="hero-title">
            Tiếp tục hành trình<br />
            sáng tạo với các<br />
            công cụ tối ưu nhất.
          </h2>
        </div>
      </div>
      <div className="auth-right-panel">
        <div className="auth-form-container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout