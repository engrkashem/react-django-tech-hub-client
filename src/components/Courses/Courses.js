import CourseCard from './CourseCard';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import CourseSideCard from './CourseSideCard';
import { useNavigate } from 'react-router-dom';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isEnrollChanged, setIsEnrollChanged] = useState(false)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const navigate = useNavigate()
    const { dbUser } = useContext(AuthContext)
    // console.log(dbUser)
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/enroll/${dbUser?.id}/`)
            .then(res => res.json())
            .then(data => {
                setEnrolledCourses(data?.enroll)
            })
    }, [isEnrollChanged, dbUser])


    useEffect(() => {
        fetch('http://127.0.0.1:8000/course/')
            .then(res => res.json())
            .then(data => {
                // const unEnrolledCourses = data?.data?.filter(c => {
                //     const allUnEnrolledCourses = enrolledCourses.some(enrolled => enrolled.course.id === c.id);
                //     return allUnEnrolledCourses;
                // });
                let unEnrolledCourses = data.filter(c1 => !enrolledCourses.some(c2 => c2.course.id === c1.id))
                setCourses(unEnrolledCourses);
            })

    }, [isEnrollChanged, enrolledCourses]);


    return (
        <div className=' flex gap-2 pb-10'>
            <div className=' hidden lg:block p-4 w-1/3 bg-base-100 border-r border-blue-100'>
                <div className='flex-center justify-between items-center mb-5'>
                    <button
                        onClick={() => navigate(`/course/create-course`)} className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md'>
                        Create New Course
                    </button>
                </div>
                <h6 className=' text-2xl  font-bold mb-10'>Your Courses</h6>
                {
                    enrolledCourses?.map(course => <CourseSideCard
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