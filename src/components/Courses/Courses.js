import CourseCard from './CourseCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/course/')
            .then(response => {
                setCourses(response.data.course)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className=' flex gap-2 pb-10'>
            <div className=' hidden lg:block p-4 w-1/3 bg-base-100 border-r border-blue-100'>
                <p>side</p>
            </div>
            <div className='nim-h-screen w-full grid grid-cols-1 gap-5 px-5 lg:px-20 pt-' style={{ height: '100vh' }}>
                {
                    courses?.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;
