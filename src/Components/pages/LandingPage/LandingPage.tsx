import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const LandingPage = (): ReactElement => {
    const navigate = useNavigate();

    const onEnter = () => {
        navigate('/calendar');
    }

    return ( 
        <div>
            <h1>Landing Page</h1>
            <Button onClick={onEnter}>Enter</Button>
        </div>
    );
};

export default LandingPage;