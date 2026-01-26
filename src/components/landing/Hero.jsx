import React from "react";
import { Button, Avatar } from "antd";
import {
  ArrowRightOutlined,
  PlayCircleOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>●</span>
            MARKETPLACE CHO TĂNG TRƯỞNG
          </div>

          <h1 className={styles.title}>
            Mở rộng tầm
            <br />
            <span className={styles.highlight}>ảnh hưởng</span> số.
          </h1>

          <p className={styles.subtitle}>
            TemplateStation cung cấp các template hàng đầu và game marketing
            tương tác để chuyển đổi chiến lược số của bạn chỉ trong vài phút.
          </p>

          <div className={styles.buttons}>
            <Button
              type="primary"
              size="large"
              className={styles.primaryBtn}
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Bắt Đầu Ngay
            </Button>
            <Button
              type="text"
              size="large"
              className={styles.secondaryBtn}
              icon={<PlayCircleOutlined />}
            >
              Xem Demo
            </Button>
          </div>

          <div className={styles.stats}>
            <Avatar.Group>
              <Avatar style={{ backgroundColor: "#10b981" }}>A</Avatar>
              <Avatar style={{ backgroundColor: "#6366f1" }}>B</Avatar>
              <Avatar style={{ backgroundColor: "#f59e0b" }}>C</Avatar>
              <Avatar style={{ backgroundColor: "#e5e7eb", color: "#6b7280" }}>
                +2k
              </Avatar>
            </Avatar.Group>
            <p>Được tin dùng bởi các đội marketing toàn cầu</p>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Main Dashboard Image */}
            <div className={styles.dashboardPreview}>
              <div className={styles.dashboardHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.controlDot}></span>
                  <span className={styles.controlDot}></span>
                  <span className={styles.controlDot}></span>
                </div>
              </div>
              <div className={styles.dashboardContent}>
                {/* Placeholder for dashboard UI */}
                <div className={styles.chartArea}></div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingCardHeader}>
                <span className={styles.floatingLabel}>TĂNG TRƯỞNG</span>
                <RiseOutlined className={styles.floatingIcon} />
              </div>
              <div className={styles.floatingValue}>+84.2%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
