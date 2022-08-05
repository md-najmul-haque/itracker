import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import ContactUs from '../../ContactUs/ContactUs';

const ProcessMangements = () => {
    return (
        <div >
            <div className='grid lg:grid-cols-2 gap-8 lg:mx-12 mx-8'>
                <div className='lg:mt-28 mt-12'>
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton style={{backgroundColor:"#2B4865",color:"white"}}>
                                    Project Overview
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{backgroundColor:"#3d4451",color:"white"}}>
                                <p>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{backgroundColor:"#2B4865",color:"white"}}>
                                    Add Issue
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{backgroundColor:"#3d4451",color:"white"}}>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{backgroundColor:"#2B4865",color:"white"}}>
                                    Set Deadline
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{backgroundColor:"#3d4451",color:"white"}}>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{backgroundColor:"#2B4865",color:"white"}}>
                                    Track Issue
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{backgroundColor:"#3d4451",color:"white"}}>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <ContactUs />
                </div>
            </div>
        </div>
    );
};

export default ProcessMangements;