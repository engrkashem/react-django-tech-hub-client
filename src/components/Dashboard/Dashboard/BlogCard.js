import React from 'react';
import ksmPic from '../../../assets/profile/arifPic.png';

const BlogCard = ({ blog }) => {
    const { blog_heading, blog_body, post_time, post_update_time, img_url, blog_creator, liked } = blog
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
                <p className=' text-slate-400 text-xs'>{post_time.split('T')[0]}</p>
                <p className=' text-slate-400 text-xs'>Members Only</p>
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
            <div className=' flex'>
                <div>
                    <p>Productivity</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;