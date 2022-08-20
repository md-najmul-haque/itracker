import React from 'react';
import './Pricing.css'
import { BsCheck2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Pricing = () => {
    return (
        <div className='my-24 lg:mx-80 mx-5'>
            <h1 className='text-5xl uppercase text-center'>Pricing</h1>
            <p className='text-2xl text-center mt-5 mb-12'>Get the power, control, and customization you need to manage <br /> your team’s and organization’s projects.</p>
            <div className='grid lg:grid-cols-2 gap-12'>
                {/*  Basic  pricing*/}
                <div className='Basic my-8'>
                    <div className='ml-3'>
                        <h1 className='title'>Basic</h1>
                        <p className='headding'>For individuals or teams just getting started with project management.</p>
                        <p className='text-5xl mt-5'>US$0</p>
                        <p className='mt-4'> <small>Free forever</small></p>
                        <p className='button1'>Purchase Now</p>
                        <div className='mt-12'>
                            <p className='text-xl font-medium'>Manage tasks and personal to-dos:</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Unlimited tasks</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Unlimited projects</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Unlimited messages</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Calendar view</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Assignee and due dates</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Project Overview</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/>Collaborate with up to 15 teammates</p>
                        </div>
                    </div>
                </div>
                {/* Premium */}
                <div className='Premium my-8'>
                    <div className='ml-3'>
                        <h1 className='title'>Premium</h1>
                        <p className='headding'>For individuals or teams just getting started with project management.</p>
                        <p className='text-5xl mt-5 mb-16'>US$20.66</p>
                        <p className='button2'><Link to="/payment">Purchase Now</Link></p>
                    </div>
                    <div className='mt-12'>
                            <p className='text-xl font-medium'>Track team projects with features and resources like:</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Unlimited tasks</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Unlimited projects</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Unlimited messages</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Calendar view</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Assignee and due dates</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/> Project Overview</p>
                            <p className='my-3 text-lg flex items-center'><BsCheck2 className='mr-3'/>Collaborate with up to 15 teammates</p>
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default Pricing;