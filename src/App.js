import React from 'react'
import {Layout, theme, Row, Col } from 'antd'
import './App.css'
import ServicesCards from './particles/ServicesCards'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const { /* Header,*/ Content} = Layout;
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
    url: 'https://www.ptpn4apps.id:8080/doctrace/pks', 
    src: '/img/doctrace.png',
    style: {
      width: '100%',
      height: 'auto',
    }
  }
]

function App() {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      {/* <Header style={{ display: 'flex', alignItems: 'center', }} > </Header> */}
        <Layout style={{ margin: '0px', paddingTop: '20px', background: 'linear-gradient(to right, green, yellow, orange)' }} >
            <Content
              style={{
                margin: 10,
                minHeight: 280,
                // background: 'linear-gradient(to left, green, yellow, orange)',
                borderRadius: borderRadiusLG,
              }}
            >
              <Row gutter={[24, 24]}>
                <TransitionGroup component={null}>
                    { urls.map((url, index) => (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="card-animation"
                        appear
                      >
                        <Col xs={24} sm={24} md={8} lg={6} xl={6} key={index} style={{ transitionDelay: `${index * 100}ms` }} >
                          <ServicesCards url={url} />
                        </Col>
                      </CSSTransition>
                    ) ) }
                  </TransitionGroup>
              </Row>
            </Content>
        </Layout>
    </Layout>
  );
}

export default App;
