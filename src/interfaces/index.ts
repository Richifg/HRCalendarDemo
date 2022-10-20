
export interface APIEvent {
    title: string;
    start: string;
    end?: string;
}
export type EventType = 'allDay' | 'specific' | 'oneHour';

export interface Event extends APIEvent {
    type: EventType; // used on App
    allDay: boolean; // used by FullCalendar
    className: string; // used by FullCalendar
}

export interface EventAllDay extends Event {
    type: 'allDay';
    allDay: true;
}

export interface EventSpecific extends Event {
    type: 'specific';
    end: string;
}

export interface EventOneHour extends Event {
    type: 'oneHour';
}


/*
[
    {
        "title": "All Day Event",
        "start": "2022-10-01"
    },
    {
        "title": "Long Event",
        "start": "2022-10-07",
        "end": "2022-10-10"
    },
    {
        "groupId": "999",
        "title": "Repeating Event",
        "start": "2022-10-09T16:00:00+00:00"
    },
    {
        "groupId": "999",
        "title": "Repeating Event",
        "start": "2022-10-16T16:00:00+00:00"
    },
    {
        "title": "Conference",
        "start": "2022-10-19",
        "end": "2022-10-21"
    },
    {
        "title": "Meeting",
        "start": "2022-10-20T10:30:00+00:00",
        "end": "2022-10-20T12:30:00+00:00"
    },
    {
        "title": "Lunch",
        "start": "2022-10-20T12:00:00+00:00"
    },
    {
        "title": "Birthday Party",
        "start": "2022-10-21T07:00:00+00:00"
    },
    {
        "url": "http:\/\/google.com\/",
        "title": "Click for Google",
        "start": "2022-10-28"
    }
]
*/
