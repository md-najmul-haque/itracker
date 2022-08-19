import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import useNav from '../../../hooks/useNav';
import Indecator from '../../Home/Home/Indecator';

const Navbar = () => {
    const { pathname } = useLocation()
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }

    if (user) {
        // console.log(user)
    }

    const menuItem =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/features'>Features</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            {
                user ? <li><Link to='/dashboard'>Dashboard</Link></li> : ''
            }
            <li><Link to='/about'>About</Link></li>
            {
                user ? <>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`${user?.photoURL}` || 'https://i.ibb.co/1fcM35N/default-User.png'} alt='user-img' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
                            <li>
                                <Link to='/viewProfile' className="justify-between">
                                    View Profile
                                </Link>
                            </li>

                            {/* no need this route */}
                            {/* <li><Link to='/updateProfile'>Update Profile</Link></li> */}
                            <li><Link onClick={() => signOut(auth)} to='/'>Sign Out</Link></li>
                        </ul>
                    </div>
                </> : <>
                    <li><Link to='/signin'>Sign In</Link></li>
                    <li><Link to='/signup'>Get Started</Link></li>
                </>
            }

        </>

    return (

       
        <div>
             <div className='navbar bg-primary text-white sticky  font-semibold top-0 left-0 z-50'>
            <div className='navbar bg-primary text-white fixed font-semibold top-0 left-0 z-50'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-primary menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
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
              
                

                <div className="navbar-end block md:hidden flex">
                    {pathname.includes('dashboard') && <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                    </label>}

                </div>
            </div>
           
            </div >
            <Indecator/>
        </div>
    );
};

export default Navbar;
