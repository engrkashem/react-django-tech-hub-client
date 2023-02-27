import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Shared/NavBar/NavBar';

const CourseLayout = () => {
    return (
        <div className='overflow-y-scroll'>
            <NavBar></NavBar>
            <div className='mt-20 overflow-y-scroll'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;