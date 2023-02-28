import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const CourseCard = ({ course }) => {
    const [enrollmentStatus, setEnrollmentStatus] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const navigate = useNavigate()
    const { id, title, video_thumbnail_url, course_length, instructor, course_fee, description } = course;

    useEffect(() => {
        const storageEnrollment = localStorage.getItem(`enrollment-${course.id}`);
        if (storageEnrollment) {
            setIsEnrolled(true);
            // setEnrollmentStatus('You are already enrolled in this course');
        } else {
            axios.get(`http://127.0.0.1:8000/enroll/course=${course.id}`)
                .then(response => {
                    if (response.data.length > 0) {
                        setIsEnrolled(true);
                        // setEnrollmentStatus('You are already enrolled in this course');
                        localStorage.setItem(`enrollment-${course.id}`, true);
                    } else {
                        setIsEnrolled(false);
                        setEnrollmentStatus(null);
                    }
                })
                .catch(error => console.error(error));
        }
    }, [instructor.id, course.id]);

    const handleEnroll = () => {
        axios.post('http://127.0.0.1:8000/enroll/', {
            course: course.id,
            student: instructor.id,
        })
            .then(response => {
                setIsEnrolled(true);
                setEnrollmentStatus(response.data.message);
                localStorage.setItem(`enrollment-${course.id}`, true);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl mx-auto grid grid-cols-2 gap-5 my-5 p-5">

            <div className=" h-full flex flex-col gap-3 items-start">
                <h2 className=" text-3xl font-bold">{title}</h2>
                <p className='text-justify'><span className='font-semibold'>Description:</span> <span>{description.slice(0, 100)}...</span></p>
                <p>
                    <span className='font-semibold'>Course length:</span> <span>{course_length}</span></p>
                <p>
                    <span className='font-semibold'>Instructor Name: </span>
                    <span>{instructor.userName}</span> </p>
                <p>
                    <span className='font-semibold'>Course fees:</span> <span><span className=' text-xl font-bold text-primary'>{course_fee}</span> TK</span></p>
            </div>
            <div className="w-4/3 flex flex-col gap-5 items-end">
                <img className=' rounded-lg w-80 h-52' src={video_thumbnail_url} alt="thumbnail" />
                {isEnrolled ? (
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate(`/course/${id}`)}>
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
            </div>

            {enrollmentStatus && <p>{enrollmentStatus}</p>}
        </div>
    );
};
export default CourseCard;