export type EventType = 'allday' | 'startEnd' | 'noEnd';

export interface Event {
    type: EventType;
    title: string;
    start: string;
    end?: string;
}

export interface EventStartEnd extends Event {
    type: 'startEnd';
    end: string;
}

// no need create separete interfaces for the other two event types as they extend the base event perfectly

