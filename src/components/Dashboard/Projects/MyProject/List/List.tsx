import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Task } from '../../../../../types/task.type';
import Loading from '../../../../Shared/Loading/Loading';
import AddTask from './AddTask';
import AllTask from './AllTask';



const List = () => {
    const [modal, setModal] = useState(false)
    const { id } = useParams()

    const { data: selectedProject, refetch } = useQuery(['selectedProject'], async () =>
        await fetch(`https://dry-eyrie-76820.herokuapp.com/selectedProject/${id}`)
            .then(res => res.json())

    )

    const { data: tasks, isLoading } = useQuery(['tasks'], async () =>
        await fetch(`https://dry-eyrie-76820.herokuapp.com/getTask?projectId=${id}`)
            .then(res => res.json())

    )
    refetch();

    if (isLoading) {
        return <Loading />
    }

    const menuItem =
        <div className='flex items-center'>
            <li>
                <button onClick={() => setModal(true)} className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg btn-secondary hover:bg-secondary-focus focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+ Add Task</button>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                        modal && <AddTask projectId={selectedProject._id} setModal={setModal} />
                    }
                </div>

            </div>

            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="h-16 w-full font-semibold text-left text-sm leading-none text-gray-800">
                            <th className="pl-12">Task Name</th>
                            <th className="pl-12">Task Description</th>
                            <th className="pl-20">Stage</th>
                            <th className="pl-20">Priority</th>
                            <th className="pl-16">Status</th>
                            <th className="pl-20">Due Date</th>
                            <th className="pl-20">Assigned Person</th>
                            <th className="pl-20">Action</th>
                        </tr>
                    </thead>

                    {
                        tasks.map((task: Task) => <AllTask key={task._id} task={task} />)
                    }

                </table>
            </div>
        </div>
    );
};

export default List;