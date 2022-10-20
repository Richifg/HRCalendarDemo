import { Event, APIEvent, EventType } from '../interfaces';


// // eventually add time formatting if needed
// export function getAPIFormatedDate(date: Date): string {
//     const year = date.getUTCFullYear();
//     const day = date.getUTCDate();
//     const monthIndex = date.getUTCMonth();
//     const month = monthIndex + 1 > 11 ? 0 : monthIndex + 1;
//     return `${year}-${month}-${day}`;
// }

export function getAppFormatedEvents(events: APIEvent[]): Event[] {
    return events.map((e) => {
        const type: EventType = 
            !!e.end ? 'specific' // no end time
                : e.start.split('T')[1] ? 'oneHour' // start has hour
                : 'allDay';
        
        return {
            ...e,
            type,
            allDay: type === 'allDay',
            className: type.replace(/([A-Z])/g, '-$1').toLocaleLowerCase() + '-event', // camelCase to lower case hyphen separated
        }
    });
}
