import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const menuItem =
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/project'>Features</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
      <li><Link to='/signin'>Sign In</Link></li>
    </>

  return (
    <div className="navbar absolute top-0 z-10">
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
  );
};

export default Navbar;
