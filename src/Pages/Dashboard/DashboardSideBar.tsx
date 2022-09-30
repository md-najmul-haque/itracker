import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineTaskAlt, MdVideoCall } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { RiUserStarLine, RiAdminFill } from 'react-icons/ri';

import { useQuery } from '@tanstack/react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Shared/Loading/Loading';


type DashboardSideBarProps = React.PropsWithChildren<{}>;

type Project = {
    projectName: string,
    _id: string
}

const DashboardSideBar = ({ children }: DashboardSideBarProps) => {
    const [user, loading] = useAuthState(auth)
    const userEmail = user?.email;
    const [paymentId, setPaymentId] = useState('')
    const { data: projects, isLoading, error, refetch } = useQuery(['projects'], () =>
        fetch(`https://itracker-server.vercel.app/getProject?userEmail=${userEmail}`)
            .then(res => res.json())
    )
    useEffect(() => {
        if (user) {
            fetch(`https://itracker-server.vercel.app/getUserPayment?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPaymentId(data[0].paymentId)
                });
        }
    }, [user])

    if (loading || isLoading) {
        return <Loading />
    }

    refetch()

    return (

        <div className="drawer drawer-mobile bg-white">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label form="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 bg-accent overflow-y-auto w-60 text-base-content">
                    <h1 className='mb-4 text-center text-white font-bold text-xl'>ITRACKER</h1>
                    {/*   Sidebar content here */}
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to='/'> <AiFillHome />HOME</Link>
                    </li>

                    {
                        paymentId && <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                            <Link className='bg-transparent text-white' to="/dashboard/repoting"><MdOutlineTaskAlt /> Repoting</Link>
                        </li>
                    }
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/add-reviews"><RiUserStarLine /> Add Reviews</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/calendar"><AiFillProject />Calendar</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/admin"><RiAdminFill />Admin</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/meeting"><MdVideoCall />Meeting</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/myTask"><AiFillProject />My Task</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/project"><AiFillProject />Projects</Link>
                    </li>
                    <ul className='mx-auto pt-10'>
                        <h3 className='text-secondary text-xl font-semibold'>My Projects</h3>
                        {
                            projects?.map((project: Project) => <ul>
                                <Link to={`myProject/list/${project._id}`} key={project._id} className='hover:bg-slate-600 transition-all py-1 text-white'>{project.projectName}</Link>
                            </ul>)
                        }

                    </ul>

                </ul>

            </div>

        </div>

    );
};

export default DashboardSideBar;