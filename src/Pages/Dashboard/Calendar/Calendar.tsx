import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
const Calendar = () => {
    return (
        <div className='mt-20'>
            <h1>Hello calendar</h1>
            <FullCalendar
                  plugins={[ dayGridPlugin ]}
            />
          
        </div>
    );
};

export default Calendar;