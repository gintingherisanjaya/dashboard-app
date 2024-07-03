import React from 'react';
import {Layout, theme, Row, Col } from 'antd';
import './App.css';
import ServicesCards from './particles/ServicesCards'

const { Header, Content} = Layout;
const urls = [
  'https://www.ptpn4apps.id/ptpn4_teh/public/',
  'https://mims-foss.holding-perkebunan.com/',
  'https://www.instagram.com/ptpn4_regional2/',
  'https://ant.design/components/icon',
  'https://www.wikipedia.org/'
]

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="full-screen-layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
        className='.ant-layout-header'
      >
        
      </Header>
        <Layout style={{ margin: '10px', paddingTop: '20px' }} >
          <Content
            style={{
              padding: 10,
              margin: 40,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Row gutter={[24, 24]}>
              { urls.map(url => (
                <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                  <ServicesCards url={url} />
                </Col>
              ) ) }
            </Row>
          </Content>
        </Layout>
    </Layout>
  );
}

export default App;
