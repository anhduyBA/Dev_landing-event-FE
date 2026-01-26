import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>T</div>
          <span className={styles.logoText}>TemplateStation</span>
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <a href="#templates" className={styles.navLink}>Templates</a>
          <a href="#games" className={styles.navLink}>Games</a>
          <a href="#services" className={styles.navLink}>Dịch Vụ</a>
          <a href="#reviews" className={styles.navLink}>Đánh Giá</a>
        </nav>

        <div className={styles.rightSection}>
          <Link to="/login" className={styles.loginLink}>Đăng Nhập</Link>
          <button className={styles.ctaButton}>Khám Phá Bộ Sưu Tập</button>
        </div>

        <button 
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
