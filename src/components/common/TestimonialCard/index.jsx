import React from "react";
import { StarFilled } from "@ant-design/icons";
import styles from "./TestimonialCard.module.css";

/**
 * TestimonialCard - Component hiển thị đánh giá khách hàng
 * @param {Object} props
 * @param {string} props.name - Tên khách hàng
 * @param {string} props.title - Chức danh
 * @param {string} props.text - Nội dung đánh giá
 * @param {number} props.rating - Số sao (1-5)
 * @param {string} props.avatar - URL avatar (optional)
 * @param {boolean} props.isActive - Highlight card
 */
const TestimonialCard = ({
  name,
  title,
  text,
  rating = 5,
  avatar,
  isActive = false,
}) => {
  // Get initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      {/* Rating Stars */}
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <StarFilled
            key={i}
            className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className={styles.text}>"{text}"</p>

      {/* Author Info */}
      <div className={styles.author}>
        {avatar ? (
          <img src={avatar} alt={name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarInitial}>{getInitials(name)}</div>
        )}
        <div className={styles.authorInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
