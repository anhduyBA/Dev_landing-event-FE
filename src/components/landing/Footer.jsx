import React, { useState } from 'react'
import styles from './Footer.module.css'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>T</div>
              <span className={styles.logoText}>TemplateStation</span>
            </div>
            <p className={styles.description}>
              Thực quyết cho các thương hiệu mạnh mẽ và các giải pháp tương tác cơ sở hạng lên mạch.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} title="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 5a9.5 9.5 0 0 0-9-5.5c4.75 2.25 9-0.75 11-5-2.25 1.5-5.25 1.5-7 0"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Sản Phẩm</h4>
            <ul className={styles.links}>
              <li><a href="#templates">Templates</a></li>
              <li><a href="#games">Marketing Games</a></li>
              <li><a href="#pricing">Bảng Giá</a></li>
              <li><a href="#features">Phát Hành</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Hỗ Trợ</h4>
            <ul className={styles.links}>
              <li><a href="#docs">Tài Liệu</a></li>
              <li><a href="#guides">Trung Tâm Tư Giúp</a></li>
              <li><a href="#status">Trạng Thái</a></li>
              <li><a href="#api">API Reference</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kết Nối</h4>
            <p className={styles.columnDesc}>
              Nhận template mới nhất và insights vào hộp thư của bạn.
            </p>
            <form onSubmit={handleSubscribe} className={styles.newsletter}>
              <input 
                type="email" 
                placeholder="Địa chỉ email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.subscribeBtn}>Đăng Ký Nhận Tin</button>
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
  )
}

export default Footer
