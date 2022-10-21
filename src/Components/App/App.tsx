import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { CalendarPage, LandingPage, UnavailablePage, PageLayout } from '../pages';
import './App.css';

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path="/" />
          <Route element={<PageLayout />} path="/">
            <Route element={<CalendarPage/>} path="calendar" />
            <Route element={<UnavailablePage/>} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
