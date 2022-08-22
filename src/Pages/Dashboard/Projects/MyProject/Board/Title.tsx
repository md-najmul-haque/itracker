import TaskCard from './TaskCard';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

type TitleProps = {
    title: string,
}

const Title = ({ title }: TitleProps) => {

    const [open, setOpen] = useState(false)

    return (

        <div className=''>
            {
                open ?
                    (<div className=''>
                        <input className='bg-secondary-focus border-none py-1 w-full' onBlur={() => setOpen(!open)} value={'To Do'} />
                    </div>) :
                    (<div className='flex justify-between items-center px-1'>
                        <h2 className='pr-5 font-bold text-xl' onClick={() => { setOpen(!open) }}>{title}</h2>
                        <BsThreeDotsVertical />
                    </div>)
            }


        </div>
    );
};

export default Title;