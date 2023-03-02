import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseSideCard = ({ course }) => {
    // console.log(course)
    const navigate = useNavigate()
    return (
        <div>
            <div className=' flex flex-col gap-2  p-2 shadow-sm shadow-blue-200 rounded-lg'>
                <h6 className=' text-xl font-semibold text-start'>{course?.course?.title}</h6>
                <img className=' rounded-lg'
                    src={course.course.video_thumbnail_url} alt="" />
                <button
                    onClick={() => navigate(`/course/${course.course.id}`)} className='btn btn-primary btn-outline w-fit'>Continue</button>
            </div>
        </div>
    );
};

export default CourseSideCard;