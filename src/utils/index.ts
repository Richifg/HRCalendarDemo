import moment from 'moment';
import { Event, EventDisplayInfo } from '../interfaces';
import { EventApi } from '@fullcalendar/react'

moment().utc();

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
        displayInfo.startDate = splitStart[0];
        displayInfo.startTime = splitStart[1];
    }
    if (event.end) {
        const splitEnd = event.endStr.split('T');
        displayInfo.endDate = splitEnd[0]
        displayInfo.endTime = splitEnd[1];
    } else if (displayInfo.startTime && displayInfo.startDate) {
        // default duration of 1 hour for events with start time but no end
        const defaultEnd = moment(event.start).utc().add(1, 'hours').format().toString().split('T');
        displayInfo.endDate = defaultEnd[0];
        displayInfo.endTime = defaultEnd[1];
    }
    return displayInfo;
}
