import React from 'react';
import { Box,Button,CardMedia,Grid,Typography} from "@mui/material";

const Bugsearch = () => {
    return (
        <Grid container sx={{ backgroundColor:"#f0e6dc"}}>
      <Grid xs={12} sm={12} md={6} sx={{backgroundColor:"#f0e6dc"}}>
        <Box sx={{px:10,py:15}}>
          <Typography variant="h3" sx={{ pt: 5}}>
            Ship great software with <br /> automated Itracking
          </Typography>
          <Typography component="p" variant="h6" sx={{ py: 4, }}>
            A simple, fast and scalable bug tracking system that helps you
            manage bugs easily and deliver great products on time.
          </Typography>
          <Button variant="contained" color="error" >SIGN UP FOR FREE</Button>
        </Box>
      </Grid>
      <Grid xs={12} sm={12} md={6} sx={{backgroundColor:"#f0e6dc"}}>
        <Box>
          <CardMedia
          muted
          loop
          autoPlay
          component="video"
          src="https://www.zohowebstatic.com/sites/default/files/bugtracker/home/bugtracker-header.mp4"
          >
          </CardMedia>
          
        </Box>
      </Grid>
    </Grid>
    );
};

export default Bugsearch;