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
                                <li><Link className="focus:text-secondary bg-transparent" to="/dashboard/myProject/overview">Overview</Link></li>
                                <li><Link className="focus:text-secondary bg-transparent" to="/dashboard/myProject/projectCalendar">Calendar</Link></li>
                                <li><Link className="focus:text-secondary bg-transparent" to={`/dashboard/myProject/list/${id}`}>List</Link></li>
                                <li><Link className="focus:text-secondary bg-transparent" to="/dashboard/myProject/summary">Summary</Link></li>
                                <li><Link className="focus:text-secondary bg-transparent" to="/dashboard/myProject/messages">Messages</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default MyProject;