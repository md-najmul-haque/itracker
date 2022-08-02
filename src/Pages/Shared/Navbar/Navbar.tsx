import React from 'react';
import { Link, useLocation } from 'react-router-dom';


  

const Navbar = () => {
    
    const menuItem =
        <>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/feature'>Features</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/signin'>Sign In</Link></li>
            <li><Link to='/signup'>Get Started</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
        </>
    
    const { pathname } = useLocation();
    console.log(pathname)
    
    return (

        <div className="navbar bg-primary mx-auto sticky top-0 z-50">
            <div className='container mx-auto'>
                {pathname.includes('dashboard') && <label form="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden drawer-side">
                    <svg style={{color:'blue'}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                </label>}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">iTracker</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
