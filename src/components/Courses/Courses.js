import CourseCard from './CourseCard';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const { dbUser } = useContext(AuthContext)
    // console.log(dbUser)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/course/')
            .then(response => {
                setCourses(response.data.course)
            })
            .catch(error => console.log(error));
    }, []);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/enroll/')
            .then(res => res.json())
            .then(data => {
                // console.log(data?.enroll)
            })
    }, [])


    return (
        <div className=' flex gap-2 pb-10'>
            <div className=' hidden lg:block p-4 w-1/3 bg-base-100 border-r border-blue-100'>
                <h6 className=' text-2xl font-bold mb-5'>Your Courses</h6>
                <div className=' flex flex-col gap-4'>
                    <img className=' rounded-lg' src='' alt="" />
                    <button className='btn btn-primary'>Continue</button>
                </div>
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
