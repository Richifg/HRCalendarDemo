import React from 'react';
import FullCalendar, { EventSourceFunc, EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import CalendarAPI from '../../../services/CalendarAPI';

import initEvents from './initEvents';
import './Calendar.scss';

const eventSource: EventSourceFunc = function({ startStr, endStr }, sucessCb, failureCb) {
    CalendarAPI.getEvents(startStr, endStr).then(({ success, data, error }) => {
        if (success) sucessCb(data);
        else (failureCb({ message: error }));   
    });
}

interface CalendarProps {
    onEventClick?(eventArg: EventClickArg): void;
}

const Calendar = ({ onEventClick }: CalendarProps): React.ReactElement => (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={eventSource}
        initialEvents={initEvents}
        eventClick={onEventClick}
        headerToolbar={{ start: 'today', center: 'title', end: 'prev next' }}
    />
); 

export default Calendar;