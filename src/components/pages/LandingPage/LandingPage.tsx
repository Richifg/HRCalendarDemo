import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';

import './LandingPage.scss';

import hexBlue from '../../../assets/hexBlue.svg';
import hexBlueBig from '../../../assets/hexBlueBig.svg';
import hexOrange from '../../../assets/hexOrange.svg';
import hexOrangeFilled from '../../../assets/hexOrangeFilled.svg';


const { Title } = Typography;

const LandingPage = (): ReactElement => {
    const navigate = useNavigate();

    const onEnter = () => {
        navigate('/calendar');
    }

    return ( 
        <div className="landing-page">
            <span className="hex hex-blue" ><img src={hexBlue}/></span>
            <span className="hex hex-blue-2" ><img src={hexBlue}/></span>
            <span className="hex hex-blue-big"><img src={hexBlueBig} /></span>
            <span className="hex hex-orange" ><img src={hexOrange}/></span>
            <span className="hex hex-orange-2"><img src={hexOrange} /></span>
            <span className="hex hex-orange-filled"><img src={hexOrangeFilled} /></span>

            <h1>HR Web</h1>
            <Button onClick={onEnter}>Enter</Button>
        </div>
    );
};

export default LandingPage;