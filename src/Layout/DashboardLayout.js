import React from 'react';
import { Outlet } from 'react-router-dom';
import DashSide from '../components/Dashboard/Dashboard/DashSide';
import NavBar from '../components/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <div >
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-side-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center overflow-y-scroll">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-side-bar" className="drawer-overlay"></label>

                    <div className='menu p-4 w-80 bg-base-100 border-r border-blue-100'>
                        <DashSide></DashSide>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;