import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../components/Home';
import Sidebar from '../../components/WorkSidebar/Sidebar';

const WorkFlow = () => {
    return (
        <div>
            {/* <Home/> */}
            <Sidebar>
      <Outlet></Outlet>  
      </Sidebar>
        </div>
    );
};

export default WorkFlow;