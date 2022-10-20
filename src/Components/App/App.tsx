import React, { useEffect, useState } from 'react';
import FullCalendar from '../../services/FullCalendar';
import { Event } from '../../interfaces';
import './App.css';

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth();
    FullCalendar.getEvents(new Date(year, month), new Date(year, month + 1))
      .then(({ success, data, error }) => {
        if (success) setEvents(data);
        else setError(error);
        setLoading(false);        
        console.log('setting false loading')
      });

    setLoading(true);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CALENDAR HERE!
        </p>
      </header>
      <main>
        {loading && <p>loading!!!!!!!!!!!!!!!!!!!!!!!</p>}
        {!loading && 
          <ul>
            {events.map(event => (
              <li key={event.title}>
                <p>{event.title}</p>
                <p>{event.type}</p>

              </li>
            ))}
          </ul>
        }
      </main>
    </div>
  );
}

export default App;
