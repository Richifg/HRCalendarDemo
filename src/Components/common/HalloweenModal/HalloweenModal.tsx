import React from 'react';
import { Modal, Typography } from 'antd';
import moment from 'moment';

import { EventDisplayInfo } from '../../../interfaces';

import background from '../../../assets/background.svg';
import foreground from '../../../assets/foreground.svg';
import hand from '../../../assets/hand.svg';
import tree from '../../../assets/tree.svg';
import pumpkin from '../../../assets/pumpkin.svg';
import pumpkinInside from '../../../assets/pumpkinInside.svg';
import bat from '../../../assets/bat.svg';
 
import './HalloweenModal.scss';

const { Title, Text } = Typography;

interface HalloweenModalProps {
    eventInfo?: EventDisplayInfo,
    isOpen?: boolean,
    onClose?(): void,
}

const HalloweenModal = ({ eventInfo, isOpen, onClose }: HalloweenModalProps): React.ReactElement => (
    <Modal 
        open={isOpen}
        onOk={onClose}
        onCancel={onClose}
        className="halloween-modal"
    >
        {eventInfo && (
            <>
                <img src={background} className="asset background" />

                <span className="text-content">
                    <Title className="modal-title">{eventInfo.title}</Title>
                    <Text className="modal-subtitle">When?</Text>
                    <Text className="modal-text">{`${moment(eventInfo.startDate).format('MMMM Do')}, ${moment(eventInfo.startTime,'HH:mm:ss').format('h:mm', )}-${moment(eventInfo.endTime, 'HH:mm:ss').format('h:mm')}`}</Text>
                    <Text className="modal-subtitle">Where?</Text>
                    <Text className="modal-text">Hexagon office</Text>
                </span>

                <img src={tree} className="asset tree tree-1" />
                <img src={tree} className="asset tree tree-2" />
                <img src={foreground} className="asset foreground" />
                <img src={hand} className="asset hand hand-1" />
                <img src={hand} className="asset hand hand-2" />
                <span className="pumpkin-container">
                    <img src={pumpkinInside} className="asset pumpkin-inside" />
                    <span className="asset pumpkin-light" />
                    <img src={pumpkin} className="asset pumpkin" />
                </span>
                <img src={bat} className="asset bat bat-1" />
                <img src={bat} className="asset bat bat-2" />
                <img src={bat} className="asset bat bat-3" />
                <img src={bat} className="asset bat bat-4" />
            </>
        )}
    </Modal>
);

export default HalloweenModal;