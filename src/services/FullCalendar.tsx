
import { Event } from '../interfaces';
import { getAPIFormatedDate } from '../utils';

const baseUrl = 'https://fullcalendar.io/api/demo-feeds/events.json?overloadday&timeZone=UTC';

const fullCalendarAPI = {
    getEvents: (start: Date, end: Date): Promise<{ success: boolean, data: Event[], error: string }> =>
        fetch(`${baseUrl}&start=${getAPIFormatedDate(start)}&end=${getAPIFormatedDate(end)}`)
            .then((res) => {
                if (res.status !== 200) return { success: false, error: res.statusText, data: [] }
                return res.json().then((data) => ({ success: true, data, error: '' }))
            })
            .catch((err) => ({
                success: false, data: [], error: err.toString()
            })),
};

export default fullCalendarAPI;
