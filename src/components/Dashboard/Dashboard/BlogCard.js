import React from 'react';
import ksmPic from '../../../assets/profile/arifPic.png';

const BlogCard = ({ blog }) => {
    const { blog_heading, blog_body, post_time, topic, img_url, blog_creator, liked } = blog
    console.log(blog_body.slice(0, 11))
    return (
        <div className=' border-b border-blue-100 mb-5 p-5'>
            <div className='flex items-center gap-2'>
                <div className="avatar ">
                    <div className="w-12 rounded-full">
                        <img src={ksmPic} alt='' />
                    </div>
                </div>
                <h5>{blog_creator.userName}</h5>
                <p className=' text-slate-400 text-sm'>{post_time.split('T')[0]}</p>
                <p className=' text-slate-400 text-sm'>Members Only</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-3 items-center'>
                <div className=' text-start col-span-2'>
                    <h3 className=' text-3xl font-bold mb-2'>{blog_heading}</h3>
                    <p>{blog_body.slice(0, 330)}....</p>
                </div>
                <div className="avatar">
                    <div className="w-full h-36 rounded">
                        <img src={img_url} alt='' />
                    </div>
                </div>
            </div>
            <div className=' lg:flex items-center justify-between '>
                <div className='flex items-center text-slate-500 gap-3'>
                    <button className=' btn-active btn-ghost rounded-full px-2 text-sm'>{topic}</button>
                    <button className=' text-sm'>10 min read</button>
                    <button className=' text-sm'>Selected for you</button>
                </div>
                <div className='flex gap-3 text-slate-500 text-sm my-5'>
                    <button className=' tooltip' data-tip="Save">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </button>
                    <button className='tooltip' data-tip="Show less like this">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;