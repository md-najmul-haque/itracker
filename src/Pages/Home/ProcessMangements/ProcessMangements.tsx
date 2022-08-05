import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img1 from '../../../Assets/ProcessManagement/img1.png'
import img2 from '../../../Assets/ProcessManagement/img2.png'
import img3 from '../../../Assets/ProcessManagement/img3.jpg'
import img4 from '../../../Assets/ProcessManagement/img4.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Box } from '@mui/material';
const ProcessMangements = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handealChange = (isExpanded: boolean, panal: string) => {
        setExpanded(isExpanded ? panal : false)
    }
    const [imageUri, setImageUri] = useState(`${img1}`);
    return (
        <div className='p-5 bg-secondary'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1  gap-12 lg:mx-20 md:mx-16 my-12 '>
                <div className='text-container lg:mt-20'>

                    <div>
                        <Accordion expanded={expanded === 'panal1'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal1')} onClick={() => setImageUri(`${img1}`)}>
                            <AccordionSummary sx={{ backgroundColor: "#EEEEEE", color: "black", borderTop: "2px solid Chocolate" }}
                                expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#EEEEEE", color: "black" }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Project Overview</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: "#EEEEEE", color: "#222831" }}>
                                <Typography sx={{ textAlign: "justify" }}>
                                    Get a project overview to at a Glance to track your issue more in effective way. ITracker helps you to save your time.
                                </Typography>
                                <Box>
                                    <Link className='flex justify-end items-center gap-2 text-[#00ADB5] text-xl font-bold  ' to='/test'>Click <BsArrowRight /></Link>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panal2'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal2')} onClick={() => setImageUri(`${img2}`)}>
                            <AccordionSummary sx={{ backgroundColor: "#EEEEEE", color: "#222831", borderTop: "2px solid blue" }}
                                expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#EEEEEE", color: "#222831" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Add Issue</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: "#EEEEEE", color: "#222831" }}>
                                <Typography sx={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <Box>
                                    <Link className='flex justify-end items-center gap-2 text-[#00ADB5] text-xl font-bold  ' to='/test'>Click <BsArrowRight /></Link>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panal3'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal3')} onClick={() => setImageUri(`${img3}`)}>
                            <AccordionSummary sx={{ backgroundColor: "#EEEEEE", color: "#222831", borderTop: "2px solid gray" }}
                                expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#EEEEEE", color: "#222831" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography >Set Deadline</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: "#EEEEEE", color: "#222831" }}>
                                <Typography sx={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <Box>
                                    <Link className='flex justify-end items-center gap-2 text-[#00ADB5] text-xl font-bold  ' to='/test'>Click <BsArrowRight /></Link>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panal4'} onChange={(event, isExpanded) => handealChange(isExpanded, 'panal4')} onClick={() => setImageUri(`${img4}`)}>
                            <AccordionSummary sx={{ backgroundColor: "#EEEEEE", color: "#222831", borderTop: "2px solid BurlyWood" }}
                                expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#EEEEEE", color: "#222831" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography >Track Issue</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: "#EEEEEE", color: "#222831" }}>
                                <Typography sx={{ textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <Box>
                                    <Link className='flex justify-end items-center gap-2 text-[#00ADB5] text-xl font-bold  ' to='/test'>Click <BsArrowRight /></Link>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
                <div>
                    <img className='w-full  h-[400px] rounded-3xl' src={imageUri} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProcessMangements;