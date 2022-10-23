import React, { ReactElement } from 'react';
import { Typography } from 'antd';

import unavailable from '../../../assets/unavailable.svg';

import './UnavailablePage.scss';

const { Title } = Typography;

const UnavailablePage = (): ReactElement => (
    <div className="unavailable-page">
        <Title className="title">Currently Unavailable</Title>
        <img src={unavailable} />
    </div>
);

export default UnavailablePage;