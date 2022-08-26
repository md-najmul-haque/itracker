import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { TbMessages } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';

const Communication = () => {

    return (
        <section className='px-12 bg-white py-10 dark:bg-black dark:text-white'>
            <div className='py-8 text-center'>
                <h1 className='font-bold text-3xl py-3'>Communication</h1>
                <p className='py-6 font-medium'>Tie your communication to teams, projects, or tasks to give your team clarity about where work stands.</p>
            </div>
            <div className="lg:w-3/5 mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 dark:text-white">
                <div className="shadow-md rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent">
                    <p className='text-3xl py-5 text-primary'><FaRegComment className='text-primary' /></p>
                    <h1 className='text-2xl'>Task comments</h1>
                    <p className='py-6'>Comment directly on a task to clarify exactly what needs to be done, and @-mention teammates or other tasks or projects so everything stays connected.</p>
                </div>
                <div className="shadow-md rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent">
                    <p className='text-3xl py-5 text-primary'><MdNotificationsNone className='text-primary' /></p>
                    <h1 className='text-2xl'>Followers</h1>
                    <p className='py-6'>Add teammates as followers so they can stay in the loop with work on the task and receive relevant notifications with task updates.</p>
                </div>
                <div className="shadow-md rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent">
                    <p className='text-3xl py-5 text-primary'><MdOutlineNotificationsActive className='text-primary' /></p>
                    <h1 className='text-2xl'>Status</h1>
                    <p className='py-6'>This feature distills data from iTracker into charts and other highlights—for an easy way to tell a visual story about progress.</p>
                </div>
                <div className="shadow-md rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent">
                    <p className='text-3xl py-5 text-primary'><TbDeviceMobileMessage className='text-primary' /></p>
                    <h1 className='text-2xl'>Messaging</h1>
                    <p className='py-6'>Send private messages in iTracker to people, projects, and teams.</p>
                </div>
                <div className="shadow-md rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent">
                    <p className='text-3xl py-5 text-primary'><TbMessages className='text-primary' /></p>
                    <h1 className='text-2xl'>Project conversations</h1>
                    <p className='py-6'>Discuss a project’s progress to keep the momentum going.</p>
                </div>
                <div className="shadow-md rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent">
                    <p className='text-3xl py-5 text-primary'><AiOutlineMessage className='text-primary' /></p>
                    <h1 className='text-2xl'>Team conversations</h1>
                    <p className='py-6'>Create a space for all team conversations and announcements.</p>
                </div>
            </div>
        </section>
    );
};

export default Communication;