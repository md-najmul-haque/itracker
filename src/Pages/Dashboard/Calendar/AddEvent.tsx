import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react';

const Event = () => {
    return (
        <Dialog open={true}>
            <DialogTitle>Add Event</DialogTitle>
            <div>
                <form>
                    <DialogContent>
                        <TextField placeholder='Title'></TextField>
                        <TextField placeholder='Description'></TextField>
                    </DialogContent>
                    <DialogActions>
                        <button>Add</button>
                        <button>Cancel</button>
                    </DialogActions>
                </form>
            </div>
        </Dialog>
    );
};

export default Event;