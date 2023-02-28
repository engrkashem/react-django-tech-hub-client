import { useLoaderData } from 'react-router-dom';
import React from 'react';
// import axios from 'axios';

const CourseDetail = () => {
    const course = useLoaderData()
    console.log(course.course)

    const { title, course_length, instructor, course_fee, description } = course.course;


    return (
        <div>
            {/* <h1>Course details for {courseId}</h1> */}
            <h2>Title: {title}</h2>
            <p>Course length: {course_length}</p>
            <p>Instructor: {instructor.userName}</p>
            <p>Course fee: {course_fee}</p>
            <p>Description: {description}</p>
        </div>
    );
};


export default CourseDetail;