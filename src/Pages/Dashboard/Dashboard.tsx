import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-center text-4xl'>Wellcome Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><a>Dashboard</a></li>          
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;