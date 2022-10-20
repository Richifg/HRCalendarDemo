import React from 'react';
import CalendarAPI from '../../services/CalendarAPI';
import FullCalendar, { EventSourceFunc } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';


const events: EventSourceFunc = function({ startStr, endStr }, sucessCb, failureCb) {
    CalendarAPI.getEvents(startStr, endStr).then(({ success, data, error }) => {
        if (success) sucessCb(data);
        else (failureCb({ message: error }));
    });
}

const Calendar = () => {
    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={events}
        />

    ); 
};

export default Calendar;