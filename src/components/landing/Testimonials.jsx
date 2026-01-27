import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import TestimonialCard from "../common/TestimonialCard";
import { testimonialsData } from "../../mock/landing";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Câu Chuyện Khách Hàng</h2>
            <p className={styles.subtitle}>
              Lắng nghe từ các đối tác đang xây dựng tương lai với
              TemplateStation.
            </p>
          </div>
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev}>
              <LeftOutlined />
            </button>
            <button className={styles.navBtn} onClick={next}>
              <RightOutlined />
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              title={testimonial.title}
              text={testimonial.text}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
