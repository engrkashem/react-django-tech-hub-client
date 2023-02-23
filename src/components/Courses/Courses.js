import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
    const demo = [
        {
            id: 1,
            course_name: 'HTML',
            instructor: 'naim',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'
        },
        {
            id: 2,
            course_name: 'CSS',
            instructor: 'ratul',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        },
        {
            id: 3,
            course_name: 'JS',
            instructor: 'ratul',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        },
        {
            id: 4,
            course_name: 'CSS',
            instructor: 'ratul',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        },
        {
            id: 5,
            course_name: 'CSS',
            instructor: 'ratul',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        },
        {
            id: 6,
            course_name: 'CSS',
            instructor: 'ratul',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        },
        {
            id: 7,
            course_name: 'CSS',
            instructor: 'ratul',
            course_details: 'dgfkghdfkjsghdfkjshgkljdfhgdfkjshgkjdfhgkljdfshgkljsahgkjashag'

        }
    ]
    return (
        <div className='nim-h-screen w-full grid grid-cols-1  gap-5 pt-[350px] lg:pt-[600px] pb-10'>
            {
                demo.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }
            <h1>Testing</h1>
        </div>
    );
};

export default Courses;