import React from 'react';
import { Outlet} from 'react-router-dom';
import Calendar from './Calendar/Calendar';
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
