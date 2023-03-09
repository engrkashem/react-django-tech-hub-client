import { useLoaderData } from 'react-router-dom';
import React from 'react';
import ReactPlayer from 'react-player';
// import axios from 'axios';


const CourseDetail = () => {
    const course = useLoaderData()
    // console.log(course)

    const { title, instructor, description, video_playlist_url } = course;


    return (
        <div className='w-full lg:w-3/4 px-5 mx-auto mb-20'>
            {/* <h1>Course details for {courseId}</h1> */}
            <div className='lg:flex justify-between my-10 text-2xl'>
                <h2><span className=' font-semibold'>Course Name:</span> {title}</h2>
                <p><span className=' font-semibold'>Instructor Name:</span> {instructor.userName}</p>
            </div>
            <p className=' text-justify mb-10'><span className=' font-semibold'>Description:</span> {description}</p>
            <div className='test flex justify-center w-full'>
                <ReactPlayer url={video_playlist_url} controls />
            </div>
        </div>
    );
};


export default CourseDetail;