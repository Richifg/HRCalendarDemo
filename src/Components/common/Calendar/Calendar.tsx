import React, { useState } from 'react';
import FullCalendar, { EventSourceFunc } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import CalendarAPI from '../../../services/CalendarAPI';
import { getEventDisplayInfo } from '../../../utils';
import { EventDisplayInfo } from '../../../interfaces';
import EventInfoDrawer from '../EventInfoDrawer/EventInfoDrawer';
import './Calendar.css';

const events: EventSourceFunc = function({ startStr, endStr }, sucessCb, failureCb) {
    CalendarAPI.getEvents(startStr, endStr).then(({ success, data, error }) => {
        if (success) sucessCb(data);
        else (failureCb({ message: error }));
    });
}

const Calendar = (): React.ReactElement => {
    const [selectedEventInfo, setSelectedEventInfo] = useState<EventDisplayInfo>();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={events}
                eventClick={(eventArg) => {
                    setSelectedEventInfo(getEventDisplayInfo(eventArg.event))
                    setIsOpen(true);
                    eventArg.jsEvent.preventDefault();
                }}
            />
            <EventInfoDrawer 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                eventInfo={selectedEventInfo} 
            />
        </div>

    ); 
};

export default Calendar;