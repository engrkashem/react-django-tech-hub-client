import React from 'react';

const CourseCard = ({ course }) => {
    // const course=props.course
    return (
        <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">{course.course_name}</h2>
                <p>{course.course_details.slice(30)}...</p>
                <p>Instructor Name: <span>{course.instructor}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;