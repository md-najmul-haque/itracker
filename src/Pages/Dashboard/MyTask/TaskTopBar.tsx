import React from 'react';
import { Link } from 'react-router-dom';
type MyComponentProps = React.PropsWithChildren<{}>;
const TaskTopBar = ({ children, ...other}: MyComponentProps) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    {/* <div className="flex-none lg:hidden">
                    <label for="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> */}
    
                    <div className="flex-none">
                    <div className="avatar mb-8">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        <ul className="menu menu-horizontal text-sm ml-18">
                            <li><Link className="focus:text-red-600 focus:text-decoration:underline  bg-transparent" to="/dashboard/myTask/addTask">Add Ishue</Link></li>
                            <li><Link className="focus:text-red-600  bg-transparent" to="/dashboard/myTask/currentIssue">Current Ishue</Link></li>

                        </ul>
                    </div>
                </div>

                {children}
            </div>
            {/* <div className="drawer-side">
            <label for="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-56 bg-base-100">

                <li><NavLink className="rounded-lg" to="tests/Personal">Personal details</NavLink></li>
            </ul>

        </div> */}
        </div>
    );
};

export default TaskTopBar;