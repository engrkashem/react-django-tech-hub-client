import React from 'react';
import projectPic from '../../assets/about/projectPic.jpg';

const AboutProject = ({ navigate }) => {
    return (
        <div className="card min-h-screen shadow-sm shadow-primary">
            <div className="card-body flex flex-col justify-between">
                <div >
                    <h2 className=" text-4xl font-bold">About Projects</h2>
                    <img className="mask mask-squircle mt-8 h-1/2 mx-auto" src={projectPic} alt='' />
                    <ul className=' text-start lg:pl-28 mt-16 font-semibold list-disc'>
                        <li>Read the Tech Blog</li>
                        <li>Seek help from experts directly</li>
                        <li>Learn at no Cost</li>
                        <li>Premium Courses Available</li>
                    </ul>
                </div>
                <div className="card-actions justify-center mt-12">
                    <button onClick={() => navigate('/project-details')} className="btn btn-outline btn-primary px-12 rounded-full">View Project Details</button>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;