import React from 'react'
import styles from './CTA.module.css'

function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Sẵn sàng định nghĩa lại<br />
          <span className={styles.highlight}>chiến lược chuyển đổi?</span>
        </h2>
        <p className={styles.subtitle}>
          Tham gia cùng 2,000+ marketer và developer đang mở rộng tác động<br />
          của họ với TemplateStation ngay hôm nay.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Bắt Đầu Miễn Phí 🚀</button>
          <button className={styles.secondaryBtn}>Liên Hệ Sales</button>
        </div>
      </div>
    </section>
  )
}

export default CTA
