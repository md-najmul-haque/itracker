import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import teamwork from '../../../Assets/teamwork.gif';

const Teamwork = () => {

  return (
    <Container fixed>
      <Box sx={{ my: 5 }}>
        <Typography align="center" variant="h5" sx={{ fontWeight: "bold" }}>
          Work on team project work
        </Typography>
        <Typography align="center" component="p" variant="h6" sx={{ pt: 3 }}>
          With Backlog, you can keep bug and issue tracking under one roof.
          Developer can <br /> easily collaborate on and release code, tracking each step via pull-requests right in <br /> issues. Git and Subversion
          repositories keep teams connected through it all.
        </Typography>
      </Box>
      <Box sx={{ width: "75%", mx: "auto" }}>
        <CardMedia
          sx={{ my: "5" }}
          component="img"
          src={teamwork}
        >
        </CardMedia>
      </Box>
    </Container>
  );
};

export default Teamwork;