import React from 'react';

const CourseCard = ({ course }) => {
    const { course_fee, course_length, description, title, video_thumbnail_url
    } = course
    // const course=props.course
    return (
        <div className=" bg-base-100 shadow-sm shadow-primary mx-auto mb-10 text-start p-5 rounded-xl">
            <div className="">
                <h2 className="mb-5">{title}</h2>
                <p>{description.slice(0, 300)}...</p>
                <p>Fees: {course_fee}</p>
                <div className="mt-10">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;