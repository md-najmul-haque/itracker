import React from 'react';
import { Avatar, Button, Checkbox, Chip, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Label } from '@mui/icons-material';


const SingIn = () => {

    const paperStyle = {
        padding: 20,
        height: '65vh',
        width: 280,
        margin: '80px auto'

    }
    const avatarStyle = {
        backgroundColor: '#00ADB5',
    }

    const btnStyle = {
        margin: '10px auto'
    }

    const socialButtonStyle = {
        margin: '5px auto'
    }
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid alignContent="center">
                        <Avatar style={avatarStyle} ><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                        <TextField id="standard-basic" label="Enter Your Email ID" variant="standard" fullWidth required />
                        <TextField id="standard-basic" label="Enter Your Password" variant="standard" fullWidth required />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                        />
                        <Button type='submit' variant="contained" color="primary" fullWidth style={btnStyle}>Sign In</Button>
                        <Typography>
                            Forgot Password?
                            <Link href="#" underline="hover" color='#0000EE' marginBottom={3} >
                                {'Reset Now'}
                            </Link>
                        </Typography>
                        <Typography>
                            Don't have an account?
                            <Link href="#" underline="hover">
                                {'Sign Up'}
                            </Link>
                        </Typography>
                        <Divider>
                            <Chip label="or" />
                        </Divider>
                        <Button type='submit' variant="outlined" color="primary" fullWidth style={socialButtonStyle}>Sign In with Google</Button>
                        <Button type='submit' variant="outlined" color="primary" fullWidth style={socialButtonStyle}>Sign In with Github</Button>
                        <Button type='submit' variant="outlined" color="primary" fullWidth style={socialButtonStyle}>Sign In with Facebook</Button>

                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
};

export default SingIn;