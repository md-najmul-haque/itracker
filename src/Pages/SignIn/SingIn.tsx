import React from 'react';
import { Avatar, Button, Checkbox, Chip, Divider, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Label } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    email: string;
    password: string;
}

const SingIn = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => { console.log(data); }

    const paperStyle = {
        padding: 20,
        height: '65vh',
        width: 280,
        margin: '80px auto'

    }
    const avatarStyle = {
        backgroundColor: '#00ADB5',
        margin: '5 auto'
    }

    const btnStyle = {
        margin: '10px auto'
    }

    const socialButtonStyle = {
        margin: '5px auto'
    }

    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle} ><LockOutlinedIcon /></Avatar>
                    <h2 style={{ textAlign: 'center' }}>Sign In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}

                        <TextField label="Enter Your Email ID" variant="standard" fullWidth {...register("email", { required: true, maxLength: 2 })} />
                        <TextField label="Enter Your Password" variant="standard" fullWidth {...register("password", { pattern: /^[A-Za-z]+$/i })} />

                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                        />
                        <Button type='submit' variant="contained" color="primary" fullWidth style={btnStyle}>Sign In</Button>
                        <input type="submit" value='Sing In' />

                    </form>


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

    );
};

export default SingIn;