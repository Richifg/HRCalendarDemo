import React, { useState } from 'react';
import { getEventDisplayInfo } from '../../../utils';
import { EventDisplayInfo } from '../../../interfaces';
import { Calendar, HalloweenModal, EventInfoDrawer } from '../../common';


const CalendarPage = (): React.ReactElement => {
    const [selectedEventInfo, setSelectedEventInfo] = useState<EventDisplayInfo>();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Calendar 
                onEventClick={eventArg => {
                    setSelectedEventInfo(getEventDisplayInfo(eventArg.event))
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
        </div>
    );
}

export default CalendarPage;
