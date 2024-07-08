import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './AppHeader.css'; // Jika Anda ingin menambahkan CSS kustom
import { useNavigate } from 'react-router-dom'

const { Header } = Layout;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Header className="header">
        <div className="logo">
          <img src="/img/doctrace.png" alt="Company Logo" />
        </div>
        <div className="title">Daftar Aplikasi TI</div>
        <Button type="text" onClick={showDrawer} className="menu-button">
          <MenuOutlined />
        </Button>
      </Header>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical">
          <Menu.Item key="home" onClick={() => navigate('/') } >Home</Menu.Item>
          <Menu.Item key="about" onClick={() => navigate('/about') } >About</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default AppHeader;
