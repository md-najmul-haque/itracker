import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../../Shared/Loading/Loading';
import AddIssue from './AddIssue';
import { Issue } from './issue.type'


const List = () => {

    const [modal, setModal] = useState(false)

    const { id } = useParams()

    const { data: selectedProject, isLoading, refetch } = useQuery(['selectedProject'], () =>
        fetch(`https://dry-eyrie-76820.herokuapp.com/selectedProject/${id}`)
            .then(res => res.json())
    )

    const { data: issues } = useQuery(['issues'], () =>
        fetch('https://dry-eyrie-76820.herokuapp.com/getTask')
            .then(res => res.json())
    )
    refetch();

    if (isLoading) {
        return <Loading />
    }

    const menuItem =
        <div className='flex items-center'>
            <li>
                <button onClick={() => setModal(true)} className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg btn-secondary hover:bg-secondary-focus focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+ Add Issue</button>
            </li>
        </div>

    return (
        <div>
            <div>
                <div className='navbar text-secondary sticky'>
                    <div className='container mx-auto'>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 rounded-box w-52">
                                    {menuItem}
                                </ul>
                            </div>
                            <Link to='/' className="normal-case px-5 py-2 font-medium text-xl">{selectedProject.projectName}</Link>
                        </div>

                        <div className="navbar-end lg:flex">
                            <ul className="menu-horizontal p-0">
                                {menuItem}
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    {
                        modal && <AddIssue setModal={setModal} />
                    }
                </div>

            </div>

            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="h-16 w-full font-semibold text-left text-sm leading-none text-gray-800">
                            <th className="pl-12">Issue Name</th>
                            <th className="pl-12">Issue Description</th>
                            <th className="pl-20">Stage</th>
                            <th className="pl-20">Priority</th>
                            <th className="pl-16">Status</th>
                            <th className="pl-20">Due Date</th>
                            <th className="pl-20">Assigned Person</th>
                            <th className="pl-20">Action</th>
                        </tr>
                    </thead>

                    {issues?.map((issue: Issue) => <>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">{issue.issueName}</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">{issue.description}</p>
                                </td>

                                <td className="pl-20">
                                    <select name='status' className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                                        <option>{issue.stage}</option>
                                        <option>To Do</option>
                                        <option>In Progress</option>
                                        <option>Done</option>
                                    </select>
                                </td>

                                <td className="pl-20">
                                    <select name='status' className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                                        <option>{issue.priority}</option>
                                        <option>Low</option>
                                        <option>Normal</option>
                                        <option>High</option>
                                    </select>
                                </td>

                                <td className="pl-20">
                                    <select name='status' className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                                        <option>{issue.status}</option>
                                        <option>On Track</option>
                                        <option>At Risk</option>
                                        <option>Off Track</option>
                                    </select>
                                </td>

                                <td className="pl-20">
                                    <p className="font-medium">{issue.dueData}</p>
                                    {/* <input
                                        type="date"
                                        className="input font-medium focus:outline-0 focus:border-secondary rounded-sm bg-inherit"
                                        value={issue.dueData}
                                    /> */}
                                </td>

                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" alt='' />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" alt='' />
                                    </div>
                                </td>

                                <td className="pl-20">
                                    <div className="font-medium">
                                        <Link to={`#`} className="btn btn-sm btn-secondary">Edit</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                    }
                </table>
            </div>
        </div>
    );
};

export default List;