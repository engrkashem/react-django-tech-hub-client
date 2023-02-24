import React from 'react';

const CourseCard = ({ course }) => {
    // const course=props.course
    const { title, video_thumbnail_url, course_length, instructor, course_fee, description } = course
    return (

        <div className="card w-3/4 bg-base-100 shadow-xl mx-auto grid grid-cols-2 gap-5">
            <h2 className="card-title col-span-2 text-3xl">{title}</h2>
            <figure className="w-52 h-40 col-span-1">
                <img src={video_thumbnail_url} alt="thumbnail" />
            </figure>
            <div className="card-body col-span-1 h-2">
                <p>Course length: <span>{course_length}</span></p>
                <p>Instructor Name: <span>{instructor.instructor}</span> </p>
                <p>Course fees: <span>{course_fee} TK</span></p>

                <div className="card-actions justify-end">

                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
            <p>{description.slice(0, 100)}...</p>
        </div>
    );
};

export default CourseCard;