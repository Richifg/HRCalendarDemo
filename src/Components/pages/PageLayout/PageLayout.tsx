import React from 'react';
import { Layout, Menu  } from 'antd';
import { CalendarFilled, PlusSquareFilled, LogoutOutlined, SettingFilled } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';

import './PageLayout.css';

const { Header, Content, Footer } = Layout;

const routes = [
  { label: 'Calendar', key: 'calendar', icon: <CalendarFilled /> },
  { label: 'New Event', key: 'new-event', icon: <PlusSquareFilled /> },
  { label: 'Settings', key: 'settings', icon: <SettingFilled />  },
  { label: 'Logout', key: '', icon: <LogoutOutlined />}
]

const PageLayout = (): React.ReactElement => {
  const navigate = useNavigate();

  const onMenuClick = ({ key }: { key: string}) => {
    navigate(key);
  }

  return ( 
    <Layout>
        <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={routes}
          onClick={onMenuClick}
        />
      </Header>
      <Content style={{ padding: '0 50px' }} className="content">
          <Outlet />
      </Content>
      <Footer style={{ textAlign: 'end' }}>by Ricardo Fernandez</Footer>
      </Layout>
  );
};

export default PageLayout;
