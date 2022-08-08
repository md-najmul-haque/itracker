import React, { useEffect, useState } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
// import { Query, onSnapshot } from '@tanstack/react-query';
const Calendar = () => {
    const [data, setData] = useState<any[]>([]);
    // useEffect(() => {
        // const q = Query(collection(db, 'non_existent'))
        // const unsub = onSnapshot(q, (snap) => {
        //     const array: any[] = snap.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 title: doc.get('title'),
    //                 start: doc.get('start').toDate(),
    //                 allDay: doc.get('allDay')
    //             }
    //         });
    //         setData([...array]);
    //     })
    // },[])
    
    const handleDateClick = (e:DateClickArg) => {
       if(e.jsEvent.altKey) console.log('Alt Click')
    }
    return (
        <div className='mt-20'>
           
            <FullCalendar
                events={data}
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick = {handleDateClick}
            />
          
        </div>
    );
};

export default Calendar;