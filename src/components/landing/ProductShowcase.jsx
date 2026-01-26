import React from "react";
import { useNavigate } from "react-router-dom";
import TemplateCard from "../common/TemplateCard";
import { templatesData } from "../../mock/landing";
import styles from "./ProductShowcase.module.css";

function ProductShowcase() {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    // TODO: Navigate to template detail page
    console.log("View template:", id);
    // navigate(`/templates/${id}`);
  };

  return (
    <section className={styles.showcase} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Template Cao Cấp</h2>
            <p className={styles.subtitle}>
              Các landing page được chế tác tỉ mỉ, tối ưu hóa cho chuyển đổi và
              trải nghiệm người dùng tốt nhất.
            </p>
          </div>
          <a href="#" className={styles.viewMore}>
            Khám Phá Toàn Bộ →
          </a>
        </div>

        <div className={styles.grid}>
          {templatesData.map((template) => (
            <TemplateCard
              key={template.id}
              id={template.id}
              category={template.category}
              rating={template.rating}
              title={template.title}
              description={template.description}
              tags={template.tags}
              price={template.price}
              bgColor={template.bgColor}
              badge={template.badge}
              image={template.image}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
