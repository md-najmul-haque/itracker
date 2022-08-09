import React, { useEffect, useState } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEvent from './AddEvent';




const Calendar = () => {
    const [data, setData] = useState<EventInput[]>();
    const[show, setShow] = useState(false)
   const [selected, setSelected]= useState(new Date())

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
                setSelected(e.date);
               setShow(true)
            }
            reset();
        }
        }

    const handleAdd = (data:any) => {
        const event: EventInput = { start: selected, ...data };
       
    }
    return <>
      {show && <AddEvent handleAdd={handleAdd} handleClose={()=>setShow(false)}/>}
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