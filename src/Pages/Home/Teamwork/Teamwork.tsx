import React from 'react';
import { Box,   Container, Typography } from "@mui/material";

import CardMedia from '@mui/material/CardMedia';


const Teamwork = () => {
    return (
        <Container fixed>
      <Box sx={{ my: 5 }}>
        <Typography align="center" variant="h5" sx={{fontWeight:"bold"}}>
          Work on code alongside project work
        </Typography>
        <Typography align="center" component="p" variant="h6" sx={{pt:3}}>
          With Backlog, you can keep bug and issue tracking under one roof.
          Developers can <br /> easily collaborate on and release code, tracking each step via pull-requests right in <br /> issues. Git and Subversion
          repositories keep teams connected through it all.
        </Typography>
      </Box>
     <CardMedia
     sx={{my:"5"}}
     component="video"
     muted
     loop
     autoPlay
     height="450"
     src='https://backlog.com/app/themes/backlog-child/assets/video/homepage/codemgmt-web-1280.mp4'
     >
     </CardMedia>
    </Container>
    );
};

export default Teamwork;