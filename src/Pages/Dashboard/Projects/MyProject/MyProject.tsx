import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


const MyProject = () => {
    const [id, setId] = useState([])

    return (
        <div >
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar">
                        <div className="flex-none">
                            <ul className="menu menu-horizontal text-sm ml-18">
                                <li><Link className="focus:text-red-600 focus:text-decoration:underline  bg-transparent" to="/dashboard/myProject/overview">Overview</Link></li>
                                <li><Link className="focus:text-red-600 focus:text-decoration:underline  bg-transparent" to="/dashboard/myProject/projectCalendar">Calendar</Link></li>
                                <li><Link className="focus:text-red-600 focus:text-decoration:underline  bg-transparent" to={`/dashboard/myProject/list/${id}`}>List</Link></li>
                                <li><Link className="focus:text-red-600  bg-transparent" to="/dashboard/myProject/summary">Summary</Link></li>
                                <li><Link className="focus:text-red-600  bg-transparent" to="/dashboard/myProject/messages">Messages</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Outlet />
                </div>
                {/* <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-100">

            <li><NavLink className="rounded-lg" to="tests/Personal">Personal details</NavLink></li>
        </ul>

    </div> */}
            </div>

        </div>
    );
};

export default MyProject;