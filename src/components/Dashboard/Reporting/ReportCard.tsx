import React, { useEffect, useState } from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { AiFillRead } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const ReportCard = () => {
    const [user, loading] = useAuthState(auth)
    const [projects, setProjects] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`https://itracker-server.vercel.app/totalProject?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setProjects(data)
                });
        }
    }, [user])

    useEffect(() => {
        fetch("https://itracker-server.vercel.app/getUser")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-2'>
            <div className='hover:border-2 hover:rounded-lg hover:border-slate-500 shadow-md'>
                <div className='text-center py-8'>
                    <p className='mb-5 text-2xl font-bold mx-2'>Completed Tasks</p>
                    <p className='mb-5 font-medium'><Link to='/dashboard/completedTasks'>7</Link></p>
                </div>
            </div>
            <div className='hover:border-2 hover:rounded-lg hover:border-slate-500 shadow-md'>
                <div className='text-center py-8'>
                    <p className='mb-5 text-2xl font-bold'>Incomplete Tasks</p>
                    <p className='mb-5 font-medium'><Link to='/dashboard/incompleteTasks'>7</Link></p>
                </div>
            </div>

            <div className='hover:border-2 hover:rounded-lg hover:border-slate-500 shadow-md'>
                <Link to='/dashboard/totalTasks'>
                    <div className='text-center py-8'>
                        <p className='mb-5 text-2xl font-bold'>Total Tasks</p>
                        <p className='mb-5 font-medium'>{projects.length}</p>
                    </div>


                </Link>
            </div>
            <div className='hover:border-2 hover:rounded-lg hover:border-slate-500 shadow-md'>
                <Link to='/dashboard/totalUser'>
                    <div className='text-center py-8'>
                        <p className='mb-5 text-2xl font-bold'>Total User</p>
                        <p className='mb-5 font-medium'>{users.length}</p>
                    </div>


                </Link>
            </div>
        </div>
    );
};

export default ReportCard;