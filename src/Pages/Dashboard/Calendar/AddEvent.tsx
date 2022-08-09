import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props{
    handleClose: () => any;
    handleAdd: (data: any) => any;
}

interface FormInput{
    title: string;
    description: string;
}


const AddEvent: FC<Props> = (Props) => {
    const { register, handleSubmit } = useForm<FormInput>()
    const submitData: SubmitHandler<FormInput> = (data: FormInput) => {
        Props.handleAdd(data);
    }
    return (
        <Dialog open={true} onClose={Props.handleClose}>
            <DialogTitle>Add Event</DialogTitle>
            <div>
                <form onSubmit={handleSubmit(submitData)}>
                    <DialogContent>
                        <TextField placeholder='Title' {...register('title')}></TextField> <br />
                        <TextField placeholder='Description'{...register('description')}></TextField>
                    </DialogContent>
                    <DialogActions>
                        <button type='submit' className='btn'>Add</button>
                        <button className='btn'  onClick={Props.handleClose}>Cancel</button>
                    </DialogActions>
                </form>
            </div>
        </Dialog>
    );
};

export default AddEvent;