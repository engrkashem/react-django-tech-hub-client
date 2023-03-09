import React from 'react';
import devDetailPic from '../../assets/about/devDetailPic.jpg';
import ksmPic from '../../assets/profile/ksmProfilePic.png';
import naimPic from '../../assets/profile/naimPic.png';
import arifPic from '../../assets/profile/arifPic.png';
import ratulPic from '../../assets/profile/ratulProfile.png';
import mezbahPic from '../../assets/profile/mezbahPic.png';
import alaminPic from '../../assets/profile/alaminPic.png';
import { useNavigate } from 'react-router-dom';

const DetailDevelopers = () => {
    const navigate = useNavigate();
    const devInfo = [
        {
            name: 'Mohammad Abul Kashem',
            role: 'Team Leader',
            skills: ['Python', 'React.Js', 'Node.Js', 'Django', 'JavaScript', 'C, C++', 'Data Structure', 'Algorithm', 'MySQL'],
            img: ksmPic,
            majorContribution: {
                frontend: [
                    'Navbar design & routing (conditional rendering)',
                    'Footer.',
                    'Whole Landing Page & navigation.',
                    'Login, Registration with error handling',
                    'Create, Update, Delete, and Show Blogs.',
                    'Like, search blogs.',
                    'Update user profile',
                    'Stripe payment',
                    'About Page, Developers Details, Project Details',
                    'NotFound page',
                    'Custom Active Link',
                    'Message sending and show'
                ],
                backend: [
                    'Model, Serializer, Views Blog app',
                    'Model, PUT, POST of User',
                    'Stripe complete Payment',
                    'Model, Serializer, Views Messaging app'
                ]
            },
            minorContribution: {
                frontend: [
                    'Course Enrollment, Details view, Side Section, Overall Design',
                    'Jobs section design and responsiveness',
                    'Contact page route creating'
                ],
                backend: [
                    'User app Model, PUT, POST CRUD',
                    'Course App assistance'
                ]
            }
        },
        {
            name: 'Naimur Rahman',
            role: 'Team Member',
            skills: ['Python', 'React.Js', 'HTML', 'Django', 'CSS', 'C, C++', 'Data Structure', 'Algorithm'],
            img: naimPic,
            majorContribution: {
                frontend: [
                    'Course Dashboard',
                    'Course Creation',
                    'Enrol Course',
                    'User personalise',
                    'Course Details',
                    'Play Course Videos',
                    'Enrolled and Unenroll Separations',
                    'Integration with  payment'
                ],
                backend: [
                    'Model, Serializer, Views Course app',
                    'Model, Serializer, Views Course Enrol',
                    'CRUD operation'
                ]
            },
            minorContribution: {
                frontend: [
                    'Navbar  & about us design',
                    'Stripe payment'
                ],
                backend: []
            }
        },
        {
            name: 'Shihab Al Ratul',
            role: 'Team Member',
            skills: ['Python', 'React.Js', 'MySQL', 'Django', 'Node.JS', 'C, C++', 'Data Structure', 'Algorithm', 'JavaScript'],
            img: ratulPic,
            majorContribution: {
                frontend: [
                    'Job Portal UI with tailwind',
                    'Job search by skill',
                    'Posting Jobs with backend API',
                    'Filter posted by me',
                    'Job Application system',
                    'Job Portal Functionality  using ReactJS',
                    'Contact page implemented using EmailJS'
                ],
                backend: [
                    'CRUD Operation for Job Portal And Application System Using Django Rest Framework',
                    'Job and Application Model and serializer'
                ]
            },
            minorContribution: {
                frontend: [],
                backend: ['Part of Users Model and Api']
            }
        },
        {
            name: 'Ariful Islam Arif',
            role: 'Team Member',
            skills: ['Python', 'React.Js', 'AWS', 'Django', 'Node.JS', 'C, C++', 'Data Structure', 'Algorithm', 'JavaScript'],
            img: arifPic,
            majorContribution: {
                frontend: [],
                backend: []
            },
            minorContribution: {
                frontend: [],
                backend: []
            }
        },
        {
            name: 'Mohammad Al Amin',
            role: 'Team Member',
            skills: ['Python', 'MySQL', 'HTML', 'Django', 'Node.JS', 'C, C++', 'Data Structure', 'Algorithm', 'Git'],
            img: alaminPic,
            majorContribution: {
                frontend: [],
                backend: []
            },
            minorContribution: {
                frontend: [],
                backend: []
            }
        },
        {
            name: 'Md Mezbah Uddin',
            role: 'Team Member',
            skills: ['Python', 'MySQL', 'HTML', 'Django', 'Node.JS', 'C, C++', 'Data Structure', 'Algorithm', 'Git'],
            img: mezbahPic,
            majorContribution: {
                frontend: [],
                backend: []
            },
            minorContribution: {
                frontend: [],
                backend: []
            }
        }
    ]
    return (
        <div className=' min-h-screen flex flex-col justify-between p-12 bg-base-100'>
            <div >
                <h3 className='text-6xl font-bold text-primary mt-20'>Developers Team</h3>
                <h4 className='text-3xl font-bold mt-5'>The Django Knight</h4>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 shadow-sm shadow-primary w-3/4 mx-auto'>
                    <div className='col-span-2 text-start lg:p-8'>
                        <h5 className='text-4xl font-bold'>Mohammad Abul Kashem</h5>
                        <h6 className='text-2xl italic'>Team Leader</h6>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl'>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Python</li>
                                <li>React.Js</li>
                                <li>Node.Js</li>
                                <li>Django</li>
                            </ul>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>JavaScript</li>
                                <li>C, C++</li>
                                <li>Data Structure</li>
                                <li>Algorithm</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className="mask mask-hexagon-2 h-3/4 " src={ksmPic} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 shadow-sm shadow-primary w-3/4 mx-auto '>
                    <div className='col-span-2 text-start lg:p-8'>
                        <h5 className='text-4xl font-bold'>Naimur Rahman</h5>
                        <h6 className='text-2xl italic'>Team Member</h6>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl'>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Python</li>
                                <li>React.JS</li>
                                <li>HTML</li>
                                <li>Django</li>
                            </ul>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>CSS</li>
                                <li>C, C++</li>
                                <li>Data Structure</li>
                                <li>Algorithm</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className="mask mask-hexagon-2 h-3/4 " src={naimPic} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 shadow-sm shadow-primary w-3/4 mx-auto'>
                    <div className='col-span-2 text-start lg:p-8'>
                        <h5 className='text-4xl font-bold'>Ariful Islam Arif</h5>
                        <h6 className='text-2xl italic'>Team Member</h6>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl'>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Python</li>
                                <li>React.JS</li>
                                <li>AWS</li>
                                <li>Django</li>
                            </ul>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>JavaScript</li>
                                <li>C, C++</li>
                                <li>Data Structure</li>
                                <li>Algorithm</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className="mask mask-hexagon-2 h-3/4 " src={arifPic} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 shadow-sm shadow-primary w-3/4 mx-auto'>
                    <div className='col-span-2 text-start lg:p-8'>
                        <h5 className='text-4xl font-bold'>Shihab Al Ratul</h5>
                        <h6 className='text-2xl italic'>Team Member</h6>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl'>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Python</li>
                                <li>React.JS</li>
                                <li>MySQL</li>
                                <li>Django</li>
                                <li>Node.Js</li>
                            </ul>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>JavaScript</li>
                                <li>C, C++</li>
                                <li>Data Structure</li>
                                <li>Algorithm</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className="mask mask-hexagon-2 h-3/4 " src={ratulPic} alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 shadow-sm shadow-primary w-3/4 mx-auto'>
                    <div className='col-span-2 text-start lg:p-8'>
                        <h5 className='text-4xl font-bold'>Mohammad Al Amin</h5>
                        <h6 className='text-2xl italic'>Team Member</h6>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl'>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Python</li>
                                <li>C++</li>
                                <li>MySQL</li>
                                <li>Django</li>
                                <li>HTML</li>
                            </ul>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Git</li>
                                <li>C</li>
                                <li>Data Structure</li>
                                <li>Algorithm</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className="mask mask-hexagon-2 h-3/4 " src={alaminPic} alt='Alamin' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 shadow-sm shadow-primary w-3/4 mx-auto'>
                    <div className='col-span-2 text-start lg:p-8'>
                        <h5 className='text-4xl font-bold'>Md Mezbah Uddin</h5>
                        <h6 className='text-2xl italic'>Team Member</h6>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl'>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Python</li>
                                <li>C++</li>
                                <li>MySQL</li>
                                <li>Django</li>
                                <li>HTML</li>
                            </ul>
                            <ul className='list-disc mt-5 pl-10'>
                                <li>Git</li>
                                <li>C</li>
                                <li>Data Structure</li>
                                <li>Algorithm</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className="mask mask-hexagon-2 h-3/4 " src={mezbahPic} alt='Alamin' />
                    </div>
                </div>
                <div className='flex justify-between w-3/4 mx-auto'>
                    <button onClick={() => navigate('/about')} className="btn btn-outline btn-primary rounded-full">Back to About</button>
                    <button onClick={() => navigate('/project-details')} className="btn btn-outline btn-primary rounded-full">View Project Details</button>
                </div>
            </div>

            <img src={devDetailPic} alt="" />
        </div>
    );
};

export default DetailDevelopers;