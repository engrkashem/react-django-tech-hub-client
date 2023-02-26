import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



const CourseCard = ({ course }) => {
    const [enrollmentStatus, setEnrollmentStatus] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const navigate = useNavigate()
    const { title, video_thumbnail_url, course_length, instructor, course_fee, description } = course;

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/enroll/course=${course.id}`)
            .then(response => {
                if (response.data.length > 0) {
                    setIsEnrolled(true);
                    setEnrollmentStatus('You are already enrolled in this course');
                } else {
                    setIsEnrolled(false);
                    setEnrollmentStatus(null);
                }
            })
            .catch(error => console.error(error));
    }, [instructor.id, course.id]);

    console.log('isEnrolled:', isEnrolled);
    console.log('enrollmentStatus:', enrollmentStatus);


    const handleEnroll = () => {
        axios
            .post('http://127.0.0.1:8000/enroll/', {
                course: course.id,
                student: instructor.id,
            })
            .then(response => {
                setIsEnrolled(true);
                setEnrollmentStatus(response.data.message);
                navigate(`/courses/${course.id}`);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="card w-2/3 bg-base-100 shadow-xl mx-auto grid grid-cols-2 gap-5 m-10 p-5">
            <figure className="w-4/3 col-span-1 pl-10">
                <img src={video_thumbnail_url} alt="thumbnail" />
            </figure>
            <div className="card-body col-span-1 h-2">
                <h2 className="card-title col-span-2 text-3xl pl-20">{title}</h2>
                <p>Course length: <span>{course_length}</span></p>
                <p>Instructor Name: <span>{instructor.userName}</span> </p>
                <p>Course fees: <span>{course_fee} TK</span></p>
            </div>
            <p>{description.slice(0, 100)}...</p>
            {isEnrolled ? (
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        Continue Course
                    </button>
                </div>
            ) : (
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleEnroll}>
                        Enroll Now
                    </button>
                </div>
            )}
            {enrollmentStatus && <p>{enrollmentStatus}</p>}
        </div>
    );
};

export default CourseCard;