import React, { useEffect, useState } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEvent from './AddEvent';
const Calendar = () => {
    const [data, setData] = useState<any[]>([]);

    
    const handleDateClick = (dateClickInfo:any) => {
        alert(dateClickInfo.dateStr)
    }
    return <>
        <AddEvent/>
             <div className='mt-20'>
        
        <FullCalendar
            events={data}
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick = {handleDateClick}
        />
      
    </div>
    </>
};

export default Calendar;