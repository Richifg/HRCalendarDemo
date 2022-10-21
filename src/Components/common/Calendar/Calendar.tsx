import React, { useState } from 'react';
import FullCalendar, { EventSourceFunc } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import CalendarAPI from '../../../services/CalendarAPI';
import { getEventDisplayInfo } from '../../../utils';
import { EventDisplayInfo } from '../../../interfaces';
import EventInfoDrawer from '../EventInfoDrawer/EventInfoDrawer';
import HalloweenModal from '../HalloweenModal/HalloweenModal';

import initEvents from './initEvents';
import './Calendar.css';

const eventSource: EventSourceFunc = function({ startStr, endStr }, sucessCb, failureCb) {
    CalendarAPI.getEvents(startStr, endStr).then(({ success, data, error }) => {
        if (success) sucessCb(data);
        else (failureCb({ message: error }));   
    });
}

const Calendar = (): React.ReactElement => {
    const [selectedEventInfo, setSelectedEventInfo] = useState<EventDisplayInfo>();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={eventSource}
                initialEvents={initEvents}
                eventClick={(eventArg) => {
                    setSelectedEventInfo(getEventDisplayInfo(eventArg.event))
                    if (eventArg.event.id === 'halloween') setIsModalOpen(true);
                    else setIsDrawerOpen(true);
                    eventArg.jsEvent.preventDefault(); // to stop url events from redirecting
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
};

export default Calendar;