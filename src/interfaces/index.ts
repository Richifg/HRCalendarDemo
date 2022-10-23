import { Moment } from 'moment';

export type EventType = 'allDay' | 'specific' | 'oneHour';

export interface Event {
    title: string;
    start: string;
    end?: string;
    className?: string;
    allDay?: boolean;
    url?: string;
    id?: string;
}

export interface EventDisplayInfo {
    title: string;
    allDay: boolean,
    repeating: boolean,
    startDate?: string,
    startTime?: string,
    endDate?: string,
    endTime?: string,
    url?: string,
}