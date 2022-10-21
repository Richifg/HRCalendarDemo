import React from 'react';
import { Modal, Typography, Space } from 'antd';
import moment from 'moment';

import { EventDisplayInfo } from '../../../interfaces';

import './HalloweenModal.css';

const { Title, Text } = Typography;

interface HalloweenModalProps {
    eventInfo?: EventDisplayInfo,
    isOpen?: boolean,
    onClose?(): void,
}

const HalloweenModal = ({ eventInfo, isOpen, onClose }: HalloweenModalProps): React.ReactElement => (
    <Modal open={isOpen} onOk={onClose} onCancel={onClose} className="halloween-modal">
        {eventInfo && (
            <Space direction="vertical" align="center">
                <Title>{eventInfo.title}</Title>
                <Text>{eventInfo.startDate?.toString()}</Text>
                <Text>{eventInfo.endDate?.toString()}</Text>
            </Space>
        )}
    </Modal>
);

export default HalloweenModal;