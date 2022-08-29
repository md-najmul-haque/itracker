import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SearchAll from '../SearchAll/SearchAll';
import BookData from '../../Shared/SearchAll/Data.json'


const NavDashBoard = () => {
    const { pathname } = useLocation()
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }


    const menuItem =
        <>
            <div className='mr-5 right-28 hidden lg:block'>
                <SearchAll placeholder="what do you think.?" data={BookData} />
            </div>

            {
                user ? <>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`${user?.photoURL}`} alt='user-img' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 w-52">
                            <li><Link to='/dashboard/admin'>Admin Console</Link></li>
                            <li><Link to='/viewProfile'>View Profile</Link></li>
                            <li><Link to='/updateProfile'>Update Profile</Link></li>
                            <li><Link onClick={() => signOut(auth)} to='/'>Sign Out</Link></li>
                        </ul>
                    </div>
                </> : ''
            }

        </>

    return (

        <div className='navbar text-accent top-10 mt-1 font-semibold'>
            <div className='container mx-auto'>
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

                <div className="navbar-end md:hidden flex">
                    {pathname.includes('dashboard') && <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                    </label>}

                </div>
            </div>

        </div >
    );
}


export default NavDashBoard;