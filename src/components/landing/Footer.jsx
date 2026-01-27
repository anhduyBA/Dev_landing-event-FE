import React, { useState } from "react";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SendOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const socialLinks = [
    { icon: <FacebookOutlined />, href: "#", title: "Facebook" },
    { icon: <TwitterOutlined />, href: "#", title: "Twitter" },
    { icon: <InstagramOutlined />, href: "#", title: "Instagram" },
    { icon: <LinkedinOutlined />, href: "#", title: "LinkedIn" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <ThunderboltOutlined />
              </div>
              <span className={styles.logoText}>TemplateStation</span>
            </div>
            <p className={styles.description}>
              Thực quyết cho các thương hiệu mạnh mẽ và các giải pháp tương tác
              cơ sở hạng lên mạch.
            </p>
            <div className={styles.social}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.socialLink}
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Sản Phẩm</h4>
            <ul className={styles.links}>
              <li>
                <a href="#templates">Templates</a>
              </li>
              <li>
                <a href="#games">Marketing Games</a>
              </li>
              <li>
                <a href="#pricing">Bảng Giá</a>
              </li>
              <li>
                <a href="#features">Phát Hành</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Hỗ Trợ</h4>
            <ul className={styles.links}>
              <li>
                <a href="#docs">Tài Liệu</a>
              </li>
              <li>
                <a href="#guides">Trung Tâm Trợ Giúp</a>
              </li>
              <li>
                <a href="#status">Trạng Thái</a>
              </li>
              <li>
                <a href="#api">API Reference</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kết Nối</h4>
            <p className={styles.columnDesc}>
              Nhận template mới nhất và insights vào hộp thư của bạn.
            </p>
            <form onSubmit={handleSubscribe} className={styles.newsletter}>
              <Input
                type="email"
                placeholder="Địa chỉ email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                className={styles.subscribeBtn}
              >
                Đăng Ký Nhận Tin
              </Button>
            </form>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 TemplateStation Inc. Xây dựng cho web hiện đại
          </p>
          <div className={styles.footerLinks}>
            <a href="#privacy">RIÊNG TƯ</a>
            <a href="#terms">ĐIỀU KHOẢN</a>
            <a href="#copyright">BẢN QUYỀN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
