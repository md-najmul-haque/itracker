import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';
import {MdOutlineTaskAlt } from 'react-icons/md';
import {FaMoneyCheckAlt } from 'react-icons/fa';
import {AiFillHome } from 'react-icons/ai';
type MyComponentProps = React.PropsWithChildren<{}>;
const DashboardSideBar = ({ children, ...other}: MyComponentProps) => {
    return (
        <div className="drawer drawer-mobile bg-white">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label form="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-[#1e1f21] text-base-content">
                    <h1 className='mb-4 text-center text-white font-bold text-2xl'>ITRACKER</h1>
                    {/*   Sidebar content here */}
                    <li className='lg:ml-5'>
                        <Link className='bg-transparent text-white' to='/dashboard'> <AiFillHome/>HOME</Link>
                    </li>
                    
                    <li className='lg:ml-5'>
                        <Link className='bg-transparent text-white' to="/dashboard/repoting"><MdOutlineTaskAlt/> Repoting</Link>
                    </li>
                    
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideBar;