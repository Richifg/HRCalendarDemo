import React, { useState } from 'react';
import { Calendar, HalloweenModal, EventInfoDrawer } from '../../common';
import { EventDisplayInfo } from '../../../interfaces';
import { getEventDisplayInfo } from '../../../utils';


const CalendarPage = (): React.ReactElement => {
    const [selectedEventInfo, setSelectedEventInfo] = useState<EventDisplayInfo>();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Calendar 
                onEventClick={eventArg => {
                    setSelectedEventInfo(getEventDisplayInfo(eventArg.event));
                    if (eventArg.event.id === 'halloween') setIsModalOpen(true);
                    else setIsDrawerOpen(true);
                    eventArg.jsEvent.preventDefault(); // to stop events with url from redirecting
                }}
            />
            <EventInfoDrawer 
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                eventInfo={selectedEventInfo}
            />
            <HalloweenModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventInfo={selectedEventInfo}
            />
        </>
    );
}

export default CalendarPage;
