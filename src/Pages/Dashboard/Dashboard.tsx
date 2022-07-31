import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideBar from './DashboardSideBar';

const Dashboard = () => {
    return (
        <div>
            <DashboardSideBar>
                <Outlet></Outlet>
            </DashboardSideBar>

        </div>
    );
};

export default Dashboard;
