import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIssue from './AddIssue';

const List = () => {

    const [modal, setModal] = useState(false)

    const menuItem =
        <div className='flex items-center'>
            <li><Link to='#'>Dummy</Link></li>
            <li>
                <button className="inline-flex sm:ml-3 sm:mt-0 items-start justify-start  focus:outline-none rounded">
                    <label htmlFor="add-issue" onClick={() => setModal(true)} className="text-sm btn-accent px-6 py-2 rounded text-white font-medium">+ Add Issue </label>
                </button>
            </li>
        </div>

    return (
        <div>
            <div className='navbar text-accent sticky z-50'>
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
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Project</Link>
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
    );
};

export default List;