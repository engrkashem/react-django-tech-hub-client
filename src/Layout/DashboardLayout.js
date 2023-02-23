import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <div >
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-side-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center border-l border-blue-100">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-side-bar" className="drawer-overlay"></label>

                    <div className='menu p-4 w-80 bg-base-100'>
                        <h1>Hello</h1>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;