import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div className='mt-24 mx-20'>
            <h1 className='text-5xl uppercase text-center'>Pricing</h1>
            <p className='text-2xl text-center mt-5'>Get the power, control, and customization you need to manage <br /> your team’s and organization’s projects.</p>
            <div className='grid lg:grid-cols-3 gap-12'>
                {/*  Basic  pricing*/}
                <div className='Basic my-8'>
                    <h1>Basic</h1>
                    <p>For individuals or teams just getting started <br /> with project management.</p>
                    <p>US$0</p>
                   <p> <small>Free forever</small></p>
                    <p className=''>Purchase Now</p>
                </div>
                {/* Premium */}
                <div className='Premium my-8'>
                    <h1>Premium</h1>
                    <p>For individuals or teams just getting started <br /> with project management.</p>
                    <p>US$0</p>
                   <p> <small>Free forever</small></p>
                    <p className=''>Purchase Now</p>
                </div>
                {/* Business */}
                <div className='Business my-8'>
                    <h1>Business</h1>
                    <p>For individuals or teams just getting started <br /> with project management.</p>
                    <p>US$0</p>
                   <p> <small>Free forever</small></p>
                    <p className=''>Purchase Now</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;