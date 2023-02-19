import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext);


    const handleSignout = () => {
        LogOut()
            .then(() => { })
            .catch(e => { })
    }
    const menuItems = <>
        <li><Link to={'/discover'}>Discover</Link></li>
        <li><Link to={'/people'}>People</Link></li>
        <li><Link to={'/courses'}>Courses</Link></li>
        <li><Link to={'/jobs'}> <div className='flex flex-col'><span></span> <span>Jobs</span></div> </Link></li>
        <li><Link to={'/about'}>About</Link></li>
        {
            user ?
                <div className="dropdown dropdown-end dropdown-hover">
                    <div tabIndex={0} className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='' />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button>Item 1</button></li>
                        <li><button onClick={handleSignout} className='w-full'>Sign Out</button></li>
                    </ul>
                </div>
                : <li className='border-2 border-solid border-primary rounded-full'><Link to={'/login'} className=' px-7'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl text-primary">TechHUB</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;