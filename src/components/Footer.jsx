import React from 'react';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
/* eslint-disable */
const Footer = () => {
  return (
    // <!-- Footer -->
    <footer class="container-fluid bg-4 text-center">
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
              <Link to="/"> Tread With Friends.</Link> <br /> All Rights Reserved.
          </Typography.Title>
            <Space>
            <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
    </footer>
  );
};

export default Footer;
