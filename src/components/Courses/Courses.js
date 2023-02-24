import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CourseCard from './CourseCard';

const Courses = () => {
    const all_course_url = `http://127.0.0.1:8000/course/`;

    const { data: courses = [] } = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetch(all_course_url).then(res => res.json())
    })
    const all_courses = courses.course
    console.log(all_courses)

    return (
        <div className='px-5 lg:px-20 w-full min-h-screen'>
            <div className='mt-10'>
                {
                    all_courses?.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>

        </div>
    );
};

export default Courses;