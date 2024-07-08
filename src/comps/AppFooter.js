import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
      © 2024 Team IT PT Perkebunan IV Regional II. All rights reserved.
    </Footer>
  );
};

export default AppFooter;
