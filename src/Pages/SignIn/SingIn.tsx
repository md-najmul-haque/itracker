import React from 'react';
import { Avatar, Grid, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const SingIn = () => {

    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 280,
        margin: '80px auto'

    }

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Avatar><LockOutlinedIcon /></Avatar>
                    Sign In
                </Paper>
            </Grid>
        </div>
    );
};

export default SingIn;