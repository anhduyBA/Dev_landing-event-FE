import React, { useState } from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Thị Mai',
      title: 'Trưởng Phòng Tăng Trưởng, TechFlow',
      text: '"TemplateStation đã thay đổi cách chúng tôi tiếp cận khách hàng hàng triệu nhân công. Các module game thực sự làm tăng tính cách mạng."',
      rating: 5
    },
    {
      id: 2,
      name: 'Trần Văn Hùng',
      title: 'CEO, Enterprise Digital',
      text: '"Tốc độ phát triển tăng lên một cách chảy chứa. Chúng tôi đã có toàn bộ funnel lên sống trong vòng chưa đầy một giờ."',
      rating: 5
    },
    {
      id: 3,
      name: 'Lê Hoàng Anh',
      title: 'Lead Developer, SkyHub',
      text: '"Code sạch nhất tôi từng thấy trong bất kỳ marketplace nào. Các developer của chúng tôi thực sự không công khai ở lối ngu."',
      rating: 4
    }
  ]

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Câu Chuyện Khách Hàng</h2>
            <p className={styles.subtitle}>
              Lắng nghe từ các đối tác đang xây dựng tương lai với TemplateStation.
            </p>
          </div>
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev}>
              ←
            </button>
            <button className={styles.navBtn} onClick={next}>
              →
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.card} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={styles.stars}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <div className={styles.avatarInitial}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.role}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
