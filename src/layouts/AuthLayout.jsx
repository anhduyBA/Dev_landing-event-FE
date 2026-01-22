import React from "react";
import {
  LeftOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const AuthLayout = ({ children, variant = "login" }) => {
  const isRegister = variant === "register";

  return (
    <div className="auth-layout">
      {/* Left Panel - Dark Background */}
      <div className="auth-left-panel">
        {/* Decorative Elements */}
        <div className="panel-decorations">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="grid-pattern"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="left-panel-content">
          <div className="brand-section">
            <div className="brand-logo">
              <div className="logo-icon">
                <ThunderboltOutlined className="logo-symbol" />
              </div>
              <span className="brand-name">TemplateStation</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">
                {isRegister
                  ? "THAM GIA KỶ NGUYÊN MỚI"
                  : "GIA NHẬP MẠNG LƯỚI SÁNG TẠO ƯU TÚ"}
              </span>
            </div>
            {isRegister ? (
              <h2 className="hero-title">
                Bắt đầu hành
                <br />
                trình <span className="text-highlight">thương</span>
                <br />
                <span className="text-highlight">mại</span> của bạn ngay
                <br />
                hôm nay.
              </h2>
            ) : (
              <h2 className="hero-title">
                Tiếp tục hành
                <br />
                trình sáng tạo với
                <br />
                các <span className="text-gradient">công cụ tối ưu</span>
                <br />
                <span className="text-gradient">nhất.</span>
              </h2>
            )}

            {/* Feature Cards - Only show on Register */}
            {isRegister && (
              <div className="feature-cards">
                <div className="feature-card">
                  <div className="feature-icon">
                    <CheckCircleOutlined />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">Tài khoản xác thực</h4>
                    <p className="feature-desc">
                      Mọi tài khoản doanh nghiệp đều được kiểm duyệt kỹ lưỡng.
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <AppstoreOutlined />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">Hỗ trợ doanh nghiệp</h4>
                    <p className="feature-desc">
                      Các tính năng đặc thù dành cho quy mô tổ chức và team lớn.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="left-footer">
            <span className="copyright">
              © 2026 TemplateStation Inc.
              {isRegister && " Mọi quyền được bảo lưu."}
            </span>
            {!isRegister && (
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Bảo mật
                </a>
                <a href="#" className="footer-link">
                  Điều khoản
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Form Area */}
      <div className="auth-right-panel">
        <div className="right-panel-wrapper">
          <div className="back-navigation">
            <a href="/" className="back-link">
              <LeftOutlined className="back-icon" />
              <span>Trang chủ</span>
            </a>
          </div>

          <div className="auth-form-container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
