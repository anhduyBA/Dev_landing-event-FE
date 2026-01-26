import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>● MARKETPLACE CHO TĂNG THƯƠNG</div>
          <h1 className={styles.title}>
            Mở rộng tầm <span className={styles.highlight}>ảnh hưởng</span> số.
          </h1>
          <p className={styles.subtitle}>
            TemplateStation cung cấp các template hàng đầu và game marketing tương tác để chuyển đổi chiến lược số của bạn chỉ trong vài phút.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Bắt Đầu Ngay →</button>
            <button className={styles.secondaryBtn}>Xem Demo</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.avatars}>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}>+2</div>
            </div>
            <p>Được tin dùng bởi các đội marketing toàn cầu</p>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.imagePlaceholder}>
            <img src="https://via.placeholder.com/400x450?text=Design+Tools" alt="Design tools interface" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
