import React from 'react';
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import issue from "../../../Assets/monitoring.gif";

const Bugsearch = () => {

  return (
    <Grid container className='bg-white'>
      <Grid xs={12} sm={12} md={6}>
        <Box sx={{ px: 9, py: 15 }}>
          <Typography variant="h3" sx={{ pt: 5 }}>
            Ship great software with <br /> automated issuetracking
          </Typography>
          <Typography component="p" variant="h6" sx={{ py: 3 }}>
            A simple, fast and scalable bug tracking system that helps you
            manage bugs easily and deliver great products on time.
          </Typography>

        </Box>
      </Grid>
      <Grid xs={12} sm={12} md={6}>
        <Box sx={{ py: 8 }}>
          <CardMedia
            component="img"
            src={issue}
          >
          </CardMedia>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Bugsearch;