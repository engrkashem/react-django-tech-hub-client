import CourseCard from './CourseCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/course/8/')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setCourses(response.data);
                } else {
                    console.log('Error: response data is not an array');
                }
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className='nim-h-screen w-full grid grid-cols-1  gap-5 ' style={{ height: '100vh' }}>
            {
                courses.map(course => <CourseCard
                    key={course.id}
                    course={course}
                />)
            }
        </div>
    );
};

export default Courses;
