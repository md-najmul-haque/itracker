import React, { useEffect, useState } from 'react';
import FullCalendar, { EventContentArg, EventInput } from '@fullcalendar/react'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEvent from './AddEvent';

const initialData: EventInput[] = [
    {
        title: "Elephent",
        description: "Your Description ",
        start: "2022-08-01",
        amount: 100

    },
    {
        title: "Cow",
        description: "Your Description",
        start: "2022-08-05",
        amount: 10
    },
    {
        title: "Mango",
        description: "Your Description",
        start: "2022-08-03",
        amount: 100

    },
    {
        title: "Pen",
        description: "Your Description", 
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
                setSelected(e.date);
               setShow(true)
                reset();
            }, .1);
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
        setShow(false);
    }

    const renderEvent = (e: EventContentArg) => {
        return <>
            <div className='text-center bg-sky-600 text-white'>
            <div className='text-2xl'>
            <h3>{e.event.title} </h3> 
           </div> <br />    <br />
            <div className=''>
            <p>{e.event.extendedProps.description} </p>
           </div>
            </div>
        </>
    }
    return <>
       
        {show && <AddEvent handleAdd={handleAdd} handleClose={() => setShow(false)} />}
        
        <div className='mt-20 text-red-400'>
            
            <FullCalendar
            editable={true}
            eventContent={renderEvent}
            events={data}
            plugins={[dayGridPlugin, interactionPlugin]} 
                dateClick={handleDateClick}
      
        />
      
    </div>
    </>
};

export default Calendar;