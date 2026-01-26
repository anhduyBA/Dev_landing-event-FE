import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const StaffNotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh', // Chiều cao tối thiểu để căn giữa đẹp trong khung Content
      background: '#fff',
      borderRadius: '8px'
    }}>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, chức năng này không tồn tại hoặc bạn không có quyền truy cập."
        extra={
          <Button type="primary" onClick={() => navigate('/staff/templates')}>
            Quay về Dashboard
          </Button>
        }
      />
    </div>
  );
};

export default StaffNotFound;