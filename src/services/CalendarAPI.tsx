
import { Event } from '../interfaces';
import { getClassnamedEvents } from '../utils';

const baseUrl = 'https://fullcalendar.io/api/demo-feeds/events.json?overloadday&timeZone=UTC';

const fullCalendarAPI = {
    getEvents: (start: string, end: string): Promise<{ success: boolean, data: Event[], error: string }> =>
        fetch(`${baseUrl}&start=${start}&end=${end}`)
            .then((res) => {
                if (res.status !== 200) return { success: false, error: res.statusText, data: [] }
                return res.json().then((data: Event[]) => ({ success: true, data: getClassnamedEvents(data), error: '' }))
            })
            .catch((err) => ({
                success: false, data: [], error: err.toString()
            })),
};

export default fullCalendarAPI;
