import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseDetail = ({id}) => {
    const courseId = useParams()
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/course/${id}/`)
            .then(response => {
                setCourse(response.data.course);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    const { title, course_length, instructor, course_fee, description } = course;

    return (
        <div>
            <h1>Course details for {courseId}</h1>
            <h2>Title: {title}</h2>
            <p>Course length: {course_length}</p>
            <p>Instructor: {instructor}</p>
            <p>Course fee: {course_fee}</p>
            <p>Description: {description}</p>
        </div>
    );
};


export default CourseDetail;