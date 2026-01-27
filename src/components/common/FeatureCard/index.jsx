import React from "react";
import styles from "./FeatureCard.module.css";

/**
 * FeatureCard - Component hiển thị tính năng/dịch vụ
 * @param {Object} props
 * @param {string} props.title - Tên tính năng
 * @param {string} props.description - Mô tả
 * @param {React.ReactNode} props.icon - Icon component hoặc SVG
 * @param {string} props.iconBgColor - Màu nền icon (optional)
 */
const FeatureCard = ({
  title,
  description,
  icon,
  iconBgColor = "#f0fdf4",
}) => {
  return (
    <div className={styles.card}>
      {/* Icon */}
      <div
        className={styles.iconWrapper}
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
