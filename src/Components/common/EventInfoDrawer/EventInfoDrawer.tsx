import React, { useState } from 'react';
import { EventApi } from '@fullcalendar/react';
import { 
    Drawer,
    DatePicker,
    TimePicker,
    Typography,
    Checkbox,
    Row,
    Col,
} from 'antd';

import { EventDisplayInfo } from '../../../interfaces';

const { Title, Text, Link } = Typography;


interface EventInfoDrawerProps {
    isOpen?: boolean;
    eventInfo?: EventDisplayInfo;
    onClose?(): void;
}

const EventInfoDrawer = ({ isOpen=false, eventInfo, onClose }: EventInfoDrawerProps): React.ReactElement =>  {

    return (
        <Drawer 
            open={isOpen} 
            onClose={onClose} 
            title="Event information"
            getContainer={false}
            style={{ position: 'absolute' }}
        >
            {eventInfo && (
                    <>
                        <Title level={1}>{eventInfo.title}</Title>
                        {eventInfo.startDate && (
                            <>
                                <Row>
                                    <Col span={24}><Text>Start Date</Text></Col>
                                </Row>
                                <Row>
                                    <Col span={12}><DatePicker value={eventInfo.startDate} /></Col>
                                    {eventInfo.startTime && <Col span={12}><TimePicker value={eventInfo.startTime} /></Col>}
                                </Row> 
                            </>
                        )}
                        {eventInfo.endDate && (
                            <>
                                <Row>
                                    <Col span={24}><Text>End Date</Text></Col>
                                </Row>
                                <Row>
                                    <Col span={12}><DatePicker value={eventInfo.endDate} /></Col>
                                    {eventInfo.endTime && <Col span={12}><TimePicker value={eventInfo.endTime} /></Col>}
                                </Row> 
                            </>
                        )}
                        <Row>
                            <Checkbox checked={eventInfo.allDay}>All Day</Checkbox>
                        </Row>
                        <Row>
                            <Checkbox checked={eventInfo.repeating}>Repeating</Checkbox>
                        </Row>
                        {eventInfo.url && (
                            <Row>
                                <Col span={3}><Text>URL:</Text></Col>
                                <Col span={21}><Link href={eventInfo.url} target="_blank">{eventInfo.url}</Link></Col>
                            </Row>
                        )}
                    </>
                )
            }
        </Drawer>
    )
}

export default EventInfoDrawer;
