import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { RiUserStarLine } from 'react-icons/ri';

type DashboardSideBarProps = React.PropsWithChildren<{}>;


// type DashboardSideBarProps = {
//     project: {
//         projectName: string,
//         projectDescription: string,
//         email: string,
//         startingDate: string,
//         endData: string
//     },
//     children: React.PropsWithChildren<{}>
// }

const DashboardSideBar = ({ children }: DashboardSideBarProps) => {


    return (
        <div className="drawer drawer-mobile bg-white">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side ">
                <label form="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-accent text-base-content">
                    <h1 className='mb-4 text-center text-white font-bold text-2xl'>ITRACKER</h1>
                    {/*   Sidebar content here */}
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to='/dashboard'> <AiFillHome />HOME</Link>
                    </li>

                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/repoting"><MdOutlineTaskAlt /> Repoting</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/add-reviews"><RiUserStarLine /> Add Reviews</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/calendar"><AiFillProject />Calendar</Link>
                    </li>
                    <li className=' hover:bg-slate-600 transition-all rounded-lg'>
                        <Link className='bg-transparent text-white' to="/dashboard/project"><AiFillProject />Projects</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideBar;