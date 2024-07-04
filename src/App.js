import React from 'react';
import {Layout, theme, Row, Col } from 'antd';
import './App.css';
import ServicesCards from './particles/ServicesCards'

const { Header, Content} = Layout;
const urls = [
  {
    url: 'https://www.ptpn4apps.id/ptpn4_teh/public/',
    src: '/img/teh.png',
    style: {
      width: '100%',
      height: 'auto',
    }
  }, {
    url: 'https://mims-foss.holding-perkebunan.com/',
    src: '/img/mims.png',
    style: {
      width: '100%',
      height: 'auto',
    }
  }, {
    url: 'https://www.instagram.com/ptpn4_regional2/',
  }, {
    url: 'https://www.pinterest.com/',
  }, {
    url: 'https://ant.design/docs/spec/introduce',
  }, {
    url: 'https://www.youtube.com/',
  }, {
    url: 'https://www.wikipedia.org/'
  }, {
    url: 'https://www.ptpn4apps.id:8080/doctrace/pks'
  }
]

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', }} > </Header>
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
