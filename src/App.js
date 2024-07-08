import React from 'react'
import {Layout, theme } from 'antd'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AppHeader from './comps/AppHeader'
import AppFooter from './comps/AppFooter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const { Content} = Layout;

function App() {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
    <Layout style={{ minHeight: '100vh' }} >
      <AppHeader />
        <Layout style={{ margin: '0px', paddingTop: '20px', background: 'linear-gradient(to right, green, yellow, orange)' }} >
            <Content
              style={{
                margin: 10,
                minHeight: 280,
                borderRadius: borderRadiusLG,
              }}
            >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                </Routes>
              
            </Content>
        </Layout>
      <AppFooter />
    </Layout>
    </Router>
  );
}

export default App;
