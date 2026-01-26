import React from 'react'
import styles from './Features.module.css'

function Features() {
  const features = [
    {
      title: 'Triển Khai Cloud',
      description: 'Hosting hiệu suất cao được đầu chỉnh nâng cao các template của chúng tôi với phần phối CDN toàn cầu để động.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2c6.627 0 12 3.134 12 7s-5.373 7-12 7S0 12.866 0 9s5.373-7 12-7z"></path>
          <path d="M0 9v4c0 3.866 5.373 7 12 7s12-3.134 12-7V9"></path>
          <path d="M0 13v4c0 3.866 5.373 7 12 7s12-3.134 12-7v-4"></path>
          <path d="M10 15l2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: 'Phân Tích Thời Gian Thực',
      description: 'Phân tích sâu hành vi khách truy cập với heatmap tích hợp và pipeline theo dõi chuyên đổi.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="21" x2="21" y2="21"></line>
          <line x1="3" y1="3" x2="3" y2="21"></line>
          <rect x="7" y="10" width="4" height="11"></rect>
          <rect x="15" y="4" width="4" height="17"></rect>
        </svg>
      )
    },
    {
      title: 'Bảo Mật Doanh Nghiệp',
      description: 'SSL bảo vệ toàn bộ, bảo vệ DDoS và công cụ tuân thủ GDPR sẵn sàng lập ngay lập cho mỗi trang web.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          <circle cx="12" cy="16" r="1"></circle>
        </svg>
      )
    }
  ]

  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Dịch Vụ Hệ Sinh Thái</h2>
          <p className={styles.subtitle}>
            Chúng tôi cung cấp các số hạng đăng ký thuật vô hạn để chịu trách nhiệm hiệu suất dịch marketing của bạn hoạt động 24/7 không bị gián đoạn.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
