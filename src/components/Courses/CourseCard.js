import React from 'react';

const CourseCard = ({ course }) => {
    // const course=props.course
    const { title, video_thumbnail_url, course_length, instructor, course_fee, description } = course
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
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseCard;