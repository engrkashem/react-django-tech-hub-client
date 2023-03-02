import CourseCard from './CourseCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { AuthContext } from '../../contexts/AuthProvider';
import CourseSideCard from './CourseSideCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isEnrollChanged, setIsEnrollChanged] = useState(false)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    // const { dbUser } = useContext(AuthContext)
    // console.log(dbUser)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/course/')
            .then(response => {
                // console.log(response.data)
                const unEnrolledCourses = response?.data?.filter(c => c.enroll_status === false)
                setCourses(unEnrolledCourses)
            })
            .catch(error => console.log(error));
    }, [isEnrollChanged]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/enroll/')
            .then(res => res.json())
            .then(data => {
                setEnrolledCourses(data?.enroll)
            })
    }, [isEnrollChanged])



    return (
        <div className=' flex gap-2 pb-10'>
            <div className=' hidden lg:block p-4 w-1/3 bg-base-100 border-r border-blue-100'>
                <h6 className=' text-2xl font-bold mb-10'>Your Courses</h6>
                {
                    enrolledCourses.map(course => <CourseSideCard
                        key={course.id}
                        course={course}
                    ></CourseSideCard>)
                }

            </div>
            <div className='nim-h-screen w-full grid grid-cols-1 gap-5 px-5 lg:px-20 pt-' style={{ height: '100vh' }}>
                {
                    courses?.map(course => <CourseCard
                        key={course.id}
                        course={course}
                        isEnrollChanged={isEnrollChanged}
                        setIsEnrollChanged={setIsEnrollChanged}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;
