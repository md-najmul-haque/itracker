import React, { useEffect, useState } from 'react';
import FullCalendar, { EventContentArg, EventInput } from '@fullcalendar/react'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEvent from './AddEvent';

const initialData: EventInput[] = [
    {
        title: "Developer Title",
        start: "2022-08-01",
        amount: 100

    },
    {
        title: "End Game",
        start: "2022-08-03",
        amount: 10
    }
]

const Calendar = () => {
  
    const [data, setData] = useState<EventInput[]>(initialData);
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
        setData(old => [...old, event]);
       
    }

    const renderEvent = (e: EventContentArg) => {
        return <>
            <span>{e.event.title} </span>
            <span>{e.event.extendedProps.amount} </span>
        </>
    }
    return <>
       
        {show && <AddEvent handleAdd={handleAdd} handleClose={() => setShow(false)} />}
        
        <div className='mt-20'>
            
            <FullCalendar
            eventContent={renderEvent}
            events={data}
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick = {handleDateClick}
        />
      
    </div>
    </>
};

export default Calendar;