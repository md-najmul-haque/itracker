import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIssue from './AddIssue';


const List = () => {

    const [modal, setModal] = useState(false)

    const menuItem =
        <div className='flex items-center'>
            <li><Link to='#'>Dummy</Link></li>
            <li>
                <button onClick={() => setModal(true)} className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg btn-accent hover:bg-accent-focus focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+ Add Issue</button>
            </li>
        </div>

    return (
        <div>
            <div className='navbar text-accent sticky'>
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