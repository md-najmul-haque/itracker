import React, { Dispatch, SetStateAction } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

type AddTaskInputProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const AddTaskInput = ({ setOpen }: AddTaskInputProps) => {
    return (
        <div>
            <textarea className='mb-2 w-full p-1' placeholder='Enter your task description here' />
            <div className='flex items-center'>
                <button onClick={() => setOpen(false)} className='btn-primary btn-sm'>Add Card</button>
                <AiOutlineCloseSquare className='text-2xl' />
            </div>
        </div>

    );
};

export default AddTaskInput;