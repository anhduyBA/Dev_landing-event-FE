import React from "react";
import { Button } from "antd";
import { RocketOutlined, PhoneOutlined } from "@ant-design/icons";
import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Sẵn sàng định nghĩa lại
          <br />
          <span className={styles.highlight}>chiến lược chuyển đổi?</span>
        </h2>
        <p className={styles.subtitle}>
          Tham gia cùng 2,000+ marketer và developer đang mở rộng tác động
          <br />
          của họ với TemplateStation ngay hôm nay.
        </p>
        <div className={styles.buttons}>
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            className={styles.primaryBtn}
          >
            Bắt Đầu Miễn Phí
          </Button>
          <Button
            size="large"
            icon={<PhoneOutlined />}
            className={styles.secondaryBtn}
          >
            Liên Hệ Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
