import React from 'react'
import styles from './ProductShowcase.module.css'

function ProductShowcase() {
  const products = [
    {
      id: 1,
      category: 'SAAS & STARTUPS',
      rating: '4.9',
      title: 'Nexus SaaS Launch Kit',
      description: 'Hệ sinh hoàn chỉnh cho sản phẩm nhằm hỗ trợ phần mềm phần tương thích dark mode.',
      tags: ['REACT', 'TAILWIND'],
      price: '$49',
      bgColor: '#e8d0c4'
    },
    {
      id: 2,
      category: 'DIGITAL PRODUCTS',
      rating: '5',
      title: 'Minimal E-Book Sales',
      description: 'Layout sạch để tập trung được trách chuyên đổi ấy rồi.',
      tags: ['HTML5', 'CSS3'],
      price: '$29',
      bgColor: '#d4c9b9',
      badge: 'BESTSELLER'
    },
    {
      id: 3,
      category: 'EVENTS',
      rating: '4.8',
      title: 'Summit Event Page',
      description: 'Hội thảo để tạo chủ đề ngành cách gợi cảm được lên giả cụ thể.',
      tags: ['VUE.JS'],
      price: '$39',
      bgColor: '#dcc9bb'
    }
  ]

  return (
    <section className={styles.showcase} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Template Cao Cấp</h2>
            <p className={styles.subtitle}>
              Các landing page được chế tạo để tạo, tối ưu hóa cho mục sơ
              chuyên độ người dùng là đó.
            </p>
          </div>
          <a href="#" className={styles.viewMore}>Khám Phá Toàn Bộ →</a>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundColor: product.bgColor }}>
                {product.badge && <div className={styles.badge}>{product.badge}</div>}
                <div className={styles.rating}>⭐ {product.rating}</div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.categoryTag}>{product.category}</div>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>

                <div className={styles.tags}>
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.footer}>
                  <div>
                    <p className={styles.priceLabel}>GIÁ BÁN</p>
                    <p className={styles.price}>{product.price}</p>
                  </div>
                  <button className={styles.btn}>Chi Tiết →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
