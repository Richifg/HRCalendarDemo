import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';

import './LandingPage.scss';

const { Title } = Typography;

const LandingPage = (): ReactElement => {
    const navigate = useNavigate();

    const onEnter = () => {
        navigate('/calendar');
    }

    return ( 
        <div className="landing-page">
            <h1>HR Web</h1>
            <Button onClick={onEnter}>Enter</Button>
        </div>
    );
};

export default LandingPage;