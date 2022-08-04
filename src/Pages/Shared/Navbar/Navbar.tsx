import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import useNav from '../../../hooks/useNav';

const Navbar = () => {
    const { pathname } = useLocation();
    const [user, loading, error] = useAuthState(auth)
    const { navbar } = useNav();

    if (loading) {
        return <Loading />
    }

    if (user) {
        fetch('http://localhost:5000/singup',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
    }


    const menuItem =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/features'>Features</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {
                user ? <li><Link onClick={() => signOut(auth)} to='/'>Sign Out</Link></li> : <>
                    <li><Link to='/signin'>Sign In</Link></li>
                    <li><Link to='/signup'>Get Started</Link></li>
                </>
            }

        </>



    return (

        <div className="navbar bg-white mx-auto sticky top-0 z-50">
            <div className='container mx-auto'>
                {/* {pathname.includes('dashboard') && <label form="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden drawer-side">
                    <svg style={{color:'red'}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                </label>} */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-secondary menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
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
                <div className="navbar-end  md:hidden flex">
                    <label form="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden drawer-side">
                        <svg style={{ color: 'red' }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                    </label>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
