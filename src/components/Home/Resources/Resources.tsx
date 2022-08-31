import React from 'react';
import {GoIssueClosed} from 'react-icons/go';
import {MdConnectWithoutContact} from 'react-icons/md';
import {RiContactsFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <section className='px-12 text-center bg-white py-10'>
            <div  className='py-8'>
                <h1 className='font-bold text-4xl py-3'>Find the resources you need</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 pb-20">
            <div className="border hover:border-2 hover:border-primary rounded-lg px-9 hover:shadow-2xl shadow-gray-300">
            <p className='text-3xl py-5 flex justify-center'><GoIssueClosed className='text-primary'/></p>
                    <h1 className='text-2xl'>Tracking issue</h1>
                    <p className='py-6'>We help to track your issue, add your project and team member in iTracker then create an issue with deadline, then assign your team member do solve this issue.</p>
                </div>
                <div className="border hover:border-2 hover:border-primary rounded-lg px-9 hover:shadow-2xl shadow-gray-300">
                <p className='text-3xl py-5 flex justify-center'><MdConnectWithoutContact className='text-primary'/></p>
                    <h1 className='text-2xl'>Meet our community of passionate experts</h1>
                    <p className='py-6'>Connect with the iTracker Community to get and give assistance, and share stories and best practices.</p>
                </div>
                <div className="border hover:border-2 hover:border-primary rounded-lg px-9 hover:shadow-2xl shadow-gray-300">
                <p className='text-3xl py-5 flex justify-center'><RiContactsFill className='text-primary'/></p>
                    <h1 className='text-2xl'>Stay in the know with content just for you</h1>
                    <p className='py-6'>Information, inspiration, and expert tips, and tricks to help you achieve more.</p>
                </div> 
            </div>
            <h1 className='font-bold text-3xl py-8'>Ready to get started?</h1>
            <Link to='/dashboard' className="btn text-white btn-primary">Try iTracker for free</Link>
        </section>
    );
};

export default Resources;