import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { ROUTES } from "../routes/routes";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn tìm kiếm không tồn tại."
        extra={
          <Button
            type="primary"
            icon={<HomeOutlined />}
            onClick={() => navigate(ROUTES.HOME)}
            className="home-btn"
          >
            Về trang chủ
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
