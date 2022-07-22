import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './ProcessManagement.css'
import img1 from '../../../assets/ProcessManagement/img1.png'
import img2 from '../../../assets/ProcessManagement/img2.png'
import img3 from '../../../assets/ProcessManagement/img3.jpg'
import img4 from '../../../assets/ProcessManagement/img4.png'
const ProcessManagement = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handealChange = (isExpanded: boolean, panal: string) => {
        setExpanded(isExpanded ? panal : false)
    }

    const [imageUri, setImageUri] = useState(`${img1}`);
    return (
        <div className='side-container'>
            <div className='text-container'>
                <h3 className='title'>Automate routine work</h3>
                <div>
                    <Accordion expanded={expanded === 'panal1'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal1')} onClick={() => setImageUri(`${img1}`)}>
                        <AccordionSummary sx={{ backgroundColor: "black", color: "white", borderTop: "2px solid Chocolate" }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "black", color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Project Overview</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "black", color: "white" }}>
                            <Typography sx={{ textAlign: "justify" }}>
                                Get a project overview to at a Glance to track your issue more in effective way. ITracker helps you to save your time.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panal2'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal2')} onClick={() => setImageUri(`${img2}`)}>
                        <AccordionSummary sx={{ backgroundColor: "black", color: "white", borderTop: "2px solid blue" }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "black", color: "white" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Add Issue</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "black", color: "white" }}>
                            <Typography sx={{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panal3'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal3')} onClick={() => setImageUri(`${img3}`)}>
                        <AccordionSummary sx={{ backgroundColor: "black", color: "white", borderTop: "2px solid gray" }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "black", color: "white" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography >Set Deadline</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "black", color: "white" }}>
                            <Typography sx={{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panal4'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal4')} onClick={() => setImageUri(`${img4}`)}>
                        <AccordionSummary sx={{ backgroundColor: "black", color: "white", borderTop: "2px solid BurlyWood", borderBottom: "2px solid DarkGoldenRod" }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "black", color: "white" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography >Track Issue</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: "black", color: "white" }}>
                            <Typography sx={{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
            <div className='image-container'>
                <img src={imageUri} alt="" />
            </div>
        </div>
    );
};

export default ProcessManagement;