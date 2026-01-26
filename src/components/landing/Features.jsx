import React from "react";
import FeatureCard from "../common/FeatureCard";
import { featuresData } from "../../mock/landing";
import styles from "./Features.module.css";

function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Dịch Vụ Hệ Sinh Thái</h2>
          <p className={styles.subtitle}>
            Chúng tôi cung cấp cơ sở hạ tầng kỹ thuật và hỗ trợ đầy đủ giúp chiến
            dịch marketing của bạn hoạt động 24/7 không bị gián đoạn.
          </p>
        </div>

        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconBgColor={feature.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
