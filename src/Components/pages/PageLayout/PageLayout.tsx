import React from 'react';
import { Layout, Menu, Typography, Button  } from 'antd';
import { CalendarFilled, PlusSquareFilled, LogoutOutlined, SettingFilled } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';

import './PageLayout.scss';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const routes = [
    { label: 'Calendar', key: 'calendar', icon: <CalendarFilled /> },
    { label: 'New Event', key: 'new-event', icon: <PlusSquareFilled /> },
    { label: 'Settings', key: 'settings', icon: <SettingFilled />  },
]

const PageLayout = (): React.ReactElement => {
    const navigate = useNavigate();

    const onMenuClick = ({ key }: { key: string}) => {
        navigate(key);
    }

  return ( 
    <Layout id="page-layout">
        <Header>
            <div className="logo" />
            <Title className="title">HR Web</Title>
            <Button onClick={() => navigate('/')}><LogoutOutlined/></Button>
        </Header>
        <Layout>
            <Sider width={150}>
                <Menu
                    mode="inline"
                    items={routes}
                    onClick={onMenuClick}
                    defaultSelectedKeys={['calendar']} 
                />
                </Sider>
                <Layout className="content-layout">
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
        <Footer/>
    </Layout>
  );
};

export default PageLayout;
