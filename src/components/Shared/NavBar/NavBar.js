import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const NavBar = () => {
    const { user, LogOut, setDbUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignout = () => {
        LogOut()
            .then(() => {
                setDbUser(null)
                navigate('/')
            })
            .catch(e => { })
    }
    const menuItems = <>
        {
            user ?
                <React.Fragment>
                    <li><Link to={'/dashboard'}>Blogs</Link></li>
                    <li><Link to={'/course'}>Courses</Link></li>
                    <li><Link to={'/job'} > Jobs </Link></li>
                    <li><Link to={'/job'} > Messaging </Link></li>
                    <li><Link to={'/job'} > Notifications </Link></li>
                    <div className="dropdown dropdown-end dropdown-hover">
                        <div tabIndex={0} className="avatar">
                            <div className="w-10 rounded-full ring ring-primary">
                                <img src={user.photoURL} alt='' />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><small className='font-semibold'>{user.displayName}</small></li>
                            <li><Link to={'/dashboard/update-profile'} className='w-full'>Update Profile</Link></li>
                            <li><button onClick={handleSignout} className='w-full'>Sign Out</button></li>
                        </ul>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <li><Link to={'/discover'}>Discover</Link></li>
                    <li><Link to={'/people'}>People</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/jobs'} className='flex flex-col'> Jobs </Link></li>
                    <li className='border-2 border-solid border-primary rounded-full'><Link to={'/login'} className=' px-7'>Login</Link></li>
                </React.Fragment>

        }

    </>
    return (
        <div className="navbar bg-base-100 border-b border-blue-50 fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-base-100">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl text-primary">TechHUB</Link>
                {user &&
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            <form className="flex items-center">
                                <label htmlFor="voice-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-primary dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="voice-search" className="bg-blue-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg aria-hidden="true" className="w-4 h-4 text-primary dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>

                        </ul>
                    </div>
                }
            </div>
            <div className="navbar-end ">
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-side-bar" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;