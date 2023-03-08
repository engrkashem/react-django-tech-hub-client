import React from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router';

const CourseCard = ({ course, setIsEnrollChanged, isEnrollChanged }) => {
    const navigate = useNavigate()
    // const [enrolled, setEnrolled] = useState(course.enroll_status)
    const { id, title, video_thumbnail_url, course_length, instructor, course_fee, description } = course;

    const handleEnroll = () => {
        navigate(`/course/payment/${id}`)
        /* const updated_info = {
            title,
            description,
            instructor: instructor.id,
            enroll_status: true
        } */
        /* fetch(`http://127.0.0.1:8000/course/${id}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated_info)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // setEnrolled(true)
                setIsEnrollChanged(!isEnrollChanged)
            })
        const enrollInfo = {
            student: 1,
            course: id
        }
        fetch('http://127.0.0.1:8000/enroll/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enrollInfo)
        }).then(res => res.json()).then(data => {
            // console.log(data)
        }) */
    }



    return (
        <div className="card w-full bg-base-100 shadow-xl mx-auto grid grid-cols-2 gap-5 my-5 p-5">

            <div div className=" h-full flex flex-col gap-3 items-start" >
                <h2 className=" text-3xl font-bold">{title}</h2>
                <p className='text-justify'><span className='font-semibold'>Description:</span> <span>{description.slice(0, 100)}...</span></p>
                <p>
                    <span className='font-semibold'>Course length:</span> <span>{course_length}</span></p>
                <p>
                    <span className='font-semibold'>Instructor Name: </span>
                    <span>{instructor.userName}</span> </p>
                <p>
                    <span className='font-semibold'>Course fees:</span> <span><span className=' text-xl font-bold text-primary'>{course_fee}</span> TK</span></p>
            </div >
            <div className="w-4/3 flex flex-col gap-5 items-end">
                <img className=' rounded-lg w-80 h-52' src={video_thumbnail_url} alt="thumbnail" />
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"
                        onClick={handleEnroll}>
                        Enroll Now
                    </button>
                </div>

            </div>

            {/* {enrollmentStatus && <p>{enrollmentStatus}</p>} */}
        </div>
    );
};
export default CourseCard;