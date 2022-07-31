import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskTopBar from './TaskTopBar';

const Task = () => {
    return (
        <div>
            <TaskTopBar>
                <Outlet></Outlet>
            </TaskTopBar>
        </div>
    );
};

export default Task;