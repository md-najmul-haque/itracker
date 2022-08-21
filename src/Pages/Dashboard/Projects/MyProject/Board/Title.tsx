import TaskCard from './TaskCard';
import { TaskListPros } from './list.type'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';


const Title = () => {

    const [open, setOpen] = useState(false)

    return (

        <div className='max-w-xs ml-5 border-4 border-secondary bg-secondary p-2'>
            {
                open ?
                    (<div className=''>
                        <input className='bg-secondary-focus border-none py-1 w-full' onBlur={() => setOpen(!open)} value={'To Do'} />
                    </div>) :
                    (<div className='flex justify-between items-center px-1'>
                        <h2 className='pr-5' onClick={() => { setOpen(!open) }}>Open</h2>
                        <BsThreeDotsVertical />
                    </div>)
            }


        </div>
    );
};

export default Title;