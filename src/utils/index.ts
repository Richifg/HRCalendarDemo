import moment from 'moment';
import { Event, EventDisplayInfo } from '../interfaces';
import { EventApi } from '@fullcalendar/react'

export function getClassnamedEvents(events: Event[]): Event[] {
    return events.map((e) => {
        const className = 
            !!e.end ? 'specific-event' // no end time
                : e.start.split('T')[1] ? 'one-hour-event' // start has hour
                : 'all-day-event';
        
        return { ...e, className };
    });
}


export function getEventDisplayInfo(event: EventApi): EventDisplayInfo {
    const displayInfo: EventDisplayInfo = { 
        title: event.title,
        allDay: event.allDay,
        repeating: !!event.groupId,
        url: event.url,
    }
    if (event.start) {
        const splitStart = event.startStr.split('T');
        displayInfo.startDate = moment(splitStart[0]);
        if (splitStart[1]) {
            displayInfo.startTime = moment(splitStart[1], 'HH:mm:ss');
        }
    }
    if (event.end) {
        const splitEnd = event.endStr.split('T');
        displayInfo.endDate = moment(splitEnd[0]);
        if (splitEnd[1]) displayInfo.endTime = moment(splitEnd[1], 'HH:mm:ss');
    } else if (displayInfo.startTime && displayInfo.startDate) {
        displayInfo.endDate = moment(displayInfo.startDate.toString()).add(1, 'hours');
        displayInfo.endTime = moment(displayInfo.startTime.toString()).add(1, 'hours');
    }
    return displayInfo;
}
