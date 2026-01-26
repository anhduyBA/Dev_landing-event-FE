import React from "react";
import { Button, Tag } from "antd";
import { StarFilled, ArrowRightOutlined } from "@ant-design/icons";
import styles from "./TemplateCard.module.css";

/**
 * TemplateCard - Component hiển thị card sản phẩm template
 * @param {Object} props
 * @param {string} props.id - ID sản phẩm
 * @param {string} props.category - Danh mục (SAAS & STARTUPS, DIGITAL PRODUCTS, EVENTS...)
 * @param {number} props.rating - Đánh giá (1-5)
 * @param {string} props.title - Tên template
 * @param {string} props.description - Mô tả ngắn
 * @param {string[]} props.tags - Các tag công nghệ (REACT, TAILWIND, VUE.JS...)
 * @param {string} props.price - Giá bán ($49, $29...)
 * @param {string} props.image - URL hình ảnh (optional)
 * @param {string} props.bgColor - Màu nền placeholder (nếu không có image)
 * @param {string} props.badge - Badge đặc biệt (BESTSELLER, NEW...)
 * @param {function} props.onViewDetails - Callback khi click Chi Tiết
 */
const TemplateCard = ({
  id,
  category,
  rating = 5,
  title,
  description,
  tags = [],
  price,
  image,
  bgColor = "#e8d0c4",
  badge,
  onViewDetails,
}) => {
  const handleClick = () => {
    onViewDetails?.(id);
  };

  return (
    <div className={styles.card}>
      {/* Card Image / Thumbnail */}
      <div
        className={styles.cardImage}
        style={{
          backgroundColor: !image ? bgColor : undefined,
          backgroundImage: image ? `url(${image})` : undefined,
        }}
      >
        {/* Badge */}
        {badge && <span className={styles.badge}>{badge}</span>}

        {/* Rating */}
        <div className={styles.rating}>
          <StarFilled className={styles.starIcon} />
          <span>{rating}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        {/* Category */}
        <span className={styles.category}>{category}</span>

        {/* Title */}
        <h3 className={styles.title}>{title}</h3>

        {/* Description */}
        <p className={styles.description}>{description}</p>

        {/* Tags */}
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <Tag key={idx} className={styles.tag}>
              {tag}
            </Tag>
          ))}
        </div>

        {/* Footer: Price + Button */}
        <div className={styles.footer}>
          <div className={styles.priceWrapper}>
            <span className={styles.priceLabel}>GIÁ BÁN</span>
            <span className={styles.price}>{price}</span>
          </div>
          <Button
            type="primary"
            className={styles.detailBtn}
            onClick={handleClick}
          >
            Chi Tiết <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
