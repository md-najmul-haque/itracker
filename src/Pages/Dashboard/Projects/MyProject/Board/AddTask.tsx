import React, { Dispatch, SetStateAction, useState } from 'react';
import AddTaskInput from './AddTaskInput';

const AddTask = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            {
                open ? <AddTaskInput setOpen={setOpen} /> : ''
            }
            <p onClick={() => setOpen(!open)} className='hover:bg-secondary-focus p-1'>+ Add Card</p>
        </div>
    );
};

export default AddTask;