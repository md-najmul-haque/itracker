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
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const FAQ = () => {
    const sendEmail = (event: any) => {
        event.preventDefault();

        emailjs.sendForm('service_xmijzyr', 'template_bzs66yy', event.target, 'iWhbHvlGmFbejUeQ9')
            .then((result) => {
                alert("Thanks for the your email");
                
                event.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact'>
            <h1 className='text-center text-3xl font-bold mt-6'>GET IN TOUCh</h1>
            <div className='grid lg:grid-cols-2 gap-12  lg:mx-20  my-16'>
                <div className=' mt-12'>
                    <h1 className='text-2xl font-bold mb-5'>Frequently Asked Questions</h1>

                    <Accordion allowZeroExpanded className='shadow-md'>
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton style={{ backgroundColor: "#F9F5EB", color: "black" }}>
                                What is the best issue tracking software?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{ backgroundColor: "#F9F5EB", color: "black" }}>
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
                                <AccordionItemButton style={{ backgroundColor: "#F9F5EB", color: "black" }}>
                                What are the main features of issue tracking system?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{ backgroundColor: "#F9F5EB", color: "black"}}>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{ backgroundColor: "#F9F5EB", color: "black" }}>
                                What is the usefulness of an issue tracking system?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{ backgroundColor: "#F9F5EB", color: "black"}}>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{ backgroundColor: "#F9F5EB", color: "black" }}>
                                How do you track project issues?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel style={{ backgroundColor: "#F9F5EB", color: "black"}}>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Contact us form */}
                <div className='bg-[#F1F1F1] shadow-md lg:h-[430px]'>
                    <h1 className='mb-3 text-center text-2xl font-bold'>Contuct us</h1>
                    <form onSubmit={sendEmail} className='lg:ml-16 p-5'>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 lg:w-[450px] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="email" name="email" id="floating_email" className="mt-8 block py-2.5 px-0 lg:w-[450px] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email address</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="address" id="floating_email" className="mt-8 block py-2.5 px-0 lg:w-[450px] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Your Address</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea name="message" id="floating_email" className="block py-2.5 px-0 lg:w-[450px] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Your message</label>
                        </div>

                        <div className='text-center lg:mr-24'>
                            <button type="submit" className=" text-white bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default FAQ;