import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { MdTask } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiFillFile } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { FaInbox } from 'react-icons/fa';

const Views = () => {

    return (
        <section className='lg:px-12 sm:px-8 text-center bg-white py-10'>
            <div className='py-8'>
            <h1 className='font-bold text-2xl py-3'>Views and reporting</h1>
            <p className='py-6 font-medium'>Easily know where work stands and see what’s happening across your entire organization with reporting capabilities.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
                <div>
                    <p className='text-3xl py-5 text-primary flex justify-center'><MdSpaceDashboard className='text-primary'/></p>
                    <h1 className='text-2xl'>Dashboards</h1>
                    <p className='py-6'>Get real-time project data in one place. Customize charts to see where work may be blocked or off track.</p>
                </div>
                <div>
                    <p className='text-3xl py-5 flex justify-center'><MdTask className='text-primary'/></p>
                    <h1 className='text-2xl'>My tasks</h1>
                    <p className='py-6'>Your space to organize and prioritize your daily tasks and project work.</p>
                </div>
                <div>
                    <p className='text-3xl py-5 flex justify-center'><FaCalendarAlt className='text-primary'/></p>
                    <h1 className='text-2xl'>Calendar view</h1>
                    <p className='py-6'>See any list of tasks on a Calendar to get a clear view of when work is due.</p>
                </div> 
                <div>
                    <p className='text-3xl py-5 flex justify-center'><AiFillFile className='text-primary'/></p>
                    <h1 className='text-2xl'>Files view</h1>
                    <p className='py-6'>Find the project files you need quickly in a gallery view with all of the project’s attachments.</p>
                </div> 
                <div>
                    <p className='text-3xl py-5 flex justify-center'><AiFillLike className='text-primary'/></p>
                    <h1 className='text-2xl'>Feedback</h1>
                    <p className='py-6'>User can feedback us website</p>
                </div> 
                <div>
                    <p className='text-3xl py-5 flex justify-center'><FaInbox className='text-primary'/></p>
                    <h1 className='text-2xl'>Inbox</h1>
                    <p className='py-6'>Get automatic updates about the projects, conversations, and tasks that matter to you.</p>
                </div> 
            </div>
        </section>
    );
};

export default Views;