import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const LoadingSpinner: React.FC = () => {
  return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />} />
  );
};
