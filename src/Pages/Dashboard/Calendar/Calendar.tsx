import React, { useEffect, useState } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEvent from './AddEvent';



const Calendar = () => {
    const[show, setShow] = useState(false)
    const [data, setData] = useState<any[]>([]);

    
    // const handleDateClick = (dateClickInfo:any) => {
    //     alert(dateClickInfo.dateStr)
    // }

    let clicks = 0;
    let timer = setTimeout(() => { }, 200);
    let dateClicked = '';
    const reset = () => {
        clicks = 0;
        clearTimeout(timer);
        dateClicked = '';
    }
    const handleDateClick = (e: DateClickArg) => {
        clicks++;
        if (clicks===1) {
            dateClicked = e.dateStr;
            timer = setTimeout(() => {
                alert(`You Click On Single Calendar ${e.dateStr}`)
                reset();
            }, 500);
        } else {
            if (dateClicked === e.dateStr) {
               setShow(true)
            }
            reset();
        }
        }

    return <>
      {show && <AddEvent/>}
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