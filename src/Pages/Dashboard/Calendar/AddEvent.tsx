import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { FC } from 'react';
interface Props{
    handleClose: () => any;
}

const AddEvent:FC<Props> = (Props) => {
    return (
        <Dialog open={true} onClose={Props.handleClose}>
            <DialogTitle>Add Event</DialogTitle>
            <div>
                <form>
                    <DialogContent>
                        <TextField placeholder='Title'></TextField> <br />
                        <TextField placeholder='Description'></TextField>
                    </DialogContent>
                    <DialogActions>
                        <button className='btn'>Add</button>
                        <button className='btn'  onClick={Props.handleClose}>Cancel</button>
                    </DialogActions>
                </form>
            </div>
        </Dialog>
    );
};

export default AddEvent;