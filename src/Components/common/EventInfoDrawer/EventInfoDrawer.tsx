import React, { useState } from 'react';
import { 
    Drawer,
    DatePicker,
    TimePicker,
    Typography,
    Checkbox,
    Row,
    Button,
    Input,
} from 'antd';

import { EventDisplayInfo } from '../../../interfaces';
import './EventInfoDrawer.scss';

const { Title, Text, Link } = Typography;
const { TextArea } = Input;


interface EventInfoDrawerProps {
    isOpen?: boolean;
    eventInfo?: EventDisplayInfo;
    onClose?(): void;
}

const EventInfoDrawer = ({ isOpen=false, eventInfo, onClose }: EventInfoDrawerProps): React.ReactElement =>  {

    const alert = () => {
        window.alert('Event edditing not available');
    }

    return (
        <Drawer 
            open={isOpen} 
            onClose={onClose} 
            title="Event information"
            getContainer={false}
            style={{ position: 'absolute' }}
            className="event-info-drawer"
        >
            {eventInfo && (
                    <>
                        <Title level={1}>{eventInfo.title}</Title>
                        {eventInfo.startDate && (
                            <>
                                <Text className="event-property">Start Date</Text>
                                <Row>
                                    <DatePicker value={eventInfo.startDate} onChange={alert}/>
                                    {eventInfo.startTime && <TimePicker value={eventInfo.startTime} onChange={alert} />}
                                </Row> 
                            </>
                        )}
                        {eventInfo.endDate && (
                            <>
                                
                                <Text className="event-property">End Date</Text>
                                <Row>
                                    <DatePicker value={eventInfo.endDate} onChange={alert} />
                                    {eventInfo.endTime && <TimePicker value={eventInfo.endTime} onChange={alert} />}
                                </Row> 
                            </>
                        )}
                        <Row>
                            <Checkbox className="event-property" checked={eventInfo.allDay} onChange={alert}>All Day</Checkbox>
                        </Row>
                        <Row>
                            <Checkbox className="event-property" checked={eventInfo.repeating} onChange={alert}>Repeating</Checkbox>
                        </Row>                
                        <Row>
                            <Text className="event-property">URL &nbsp;</Text>
                            {eventInfo.url === ''
                                ? <Text className="none">none</Text> 
                                : <Link href={eventInfo.url} target="_blank">{eventInfo.url}</Link>
                            }
                        </Row>
                        <Row>
                            <Text className="event-property">Description</Text>
                            <TextArea rows={4} onChange={alert} />
                        </Row>
                        <Button onClick={alert} className="update-button">Update</Button>
                    </>
                )
            }
        </Drawer>
    )
}

export default EventInfoDrawer;
