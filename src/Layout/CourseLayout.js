import React from 'react';
import Courses from '../components/Courses/Courses';
import NavBar from '../components/Shared/NavBar/NavBar';

const CourseLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Courses></Courses>
        </div>
    );
};

export default CourseLayout;