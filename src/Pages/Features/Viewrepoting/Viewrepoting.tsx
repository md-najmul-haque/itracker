import { RiAdminFill } from 'react-icons/ri';
import { MdTask } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdVideoCall } from 'react-icons/md';
import { AiFillLike,AiFillProject } from 'react-icons/ai';

const Viewrepoting = () => {
    
    return (
        <section className='px-12 text-center bg-white py-10 dark:bg-black dark:text-white'>
            <div className='py-8'>
                <h1 className='font-bold text-3xl py-3'>Others Features</h1>
                <p className='py-6 font-medium'>Easily know where work stands and see what’s happening across your entire organization with reporting capabilities.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 dark:text-white">
                <div className="shadow-lg rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent hover:shadow-gray-500">
                    <p className='text-3xl py-5 flex justify-center'><AiFillProject className='text-primary'/></p>
                    <h1 className='text-2xl'>Projects</h1>
                    <p className='py-6'>A project is a 1-time event with a specific beginning and end date. A few examples of projects are: Disaster recovery efforts. The design of a software program. The construction of a bridge.</p>
                </div>
                <div className="shadow-lg rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent hover:shadow-gray-500">
                    <p className='text-3xl py-5 flex justify-center'><MdTask className='text-primary' /></p>
                    <h1 className='text-2xl'>Add tasks</h1>
                    <p className='py-6'>Your space to organize and prioritize your daily tasks and project work.</p>
                </div>
                <div className="shadow-lg rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent hover:shadow-gray-500">
                    <p className='text-3xl py-5 flex justify-center'><FaCalendarAlt className='text-primary' /></p>
                    <h1 className='text-2xl'>Calendar view</h1>
                    <p className='py-6'>See any list of tasks on a Calendar to get a clear view of when work is due.</p>
                </div>
                <div className="shadow-lg rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent hover:shadow-gray-500">
                    <p className='text-3xl py-5 flex justify-center'><MdVideoCall className='text-primary' /></p>
                    <h1 className='text-2xl'>Meeting view</h1>
                    <p className='py-6'>By definition, a team meeting is a scheduled conversation when employees discuss a particular topic or list of topics.</p>
                </div>
                <div className="shadow-lg rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent hover:shadow-gray-500">
                    <p className='text-3xl py-5 text-primary flex justify-center'><RiAdminFill className='text-primary' /></p>
                    <h1 className='text-2xl'>Admin</h1>
                    <p className='py-6'>The Admin. These users have full access to manage the site including adding, deleting and editing all pages and modules.</p>
                </div>
                <div className="shadow-lg rounded-lg px-9 hover:shadow-2xl shadow-gray-300 dark:bg-accent hover:shadow-gray-500">
                    <p className='text-3xl py-5 flex justify-center'><AiFillLike className='text-primary' /></p>
                    <h1 className='text-2xl'>Feedback</h1>
                    <p className='py-6'>User can feedback us website.Conducting user feedback is especially important for improving your website.</p>
                </div>
            </div>
        </section>
    );
};

export default Viewrepoting;