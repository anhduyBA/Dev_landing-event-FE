import React from 'react'
import styles from './Interactive.module.css'

function Interactive() {
  return (
    <section className={styles.interactive}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>TĂNG CƯƠNG TƯƠNG TẮC</div>
          <h2 className={styles.title}>
            Trải Nghiệm<br />
            <span className={styles.highlight}>Tương Tác</span>
            <br />
            Hấp Dẫn
          </h2>
          <p className={styles.description}>
            Dùng làm khách truy cập nhận chân. Sử dụng các module game hóa của TemplateStation để tìm thấy khách hàng tiềm năng và thực đầy tăng trương lần truyền qua vòng quay giải thưởng và quiz tương tác.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
                </svg>
              </div>
              <div>
                <h4>Cải Dật Tức Thị</h4>
                <p>Triển khai qua snippet đơn giản dưới 2 phút.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path>
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                </svg>
              </div>
              <div>
                <h4>Tùy Chỉnh Hoàn Toàn</h4>
                <p>Đầu chỉnh mầu sắc, font chữ theo thương hiệu.</p>
              </div>
            </div>
          </div>
          <button className={styles.cta}>Tạo Game Đầu Tiên</button>
        </div>

        <div className={styles.visualization}>
          <div className={styles.circle}>
            <div className={styles.badgeCenter}>QUAY</div>
            <div className={styles.badgeRight}>
              <div className={styles.badgeLabel}>KHÁCH TRÚNG</div>
              <div className={styles.badgeValue}>Giảm 50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interactive
