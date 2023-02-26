import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogPic from '../../../../assets/blogs/blogProfile.png';
import BlogBottomNavigation from '../../../Shared/BlogBottomNavigation/BlogBottomNavigation';

const BlogCard = ({ blog, refetch }) => {
    const { id, blog_heading, blog_body, post_time, img_url, blog_creator } = blog
    // console.log(blog_body.slice(0, 11))
    const navigate = useNavigate()
    return (
        <div className=' border-b border-blue-100 mb-5 p-5'>
            <div className='flex items-center gap-2'>
                <div className="avatar ">
                    <div className="w-12 rounded-full">
                        <img src={blogPic} alt='' />
                    </div>
                </div>
                <h5>{blog_creator.userName}</h5>
                <p className=' text-slate-400 text-sm'>{post_time.split('T')[0]}</p>
                <p className=' text-slate-400 text-sm'>Members Only</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-3 items-center'>
                <div onClick={() => navigate(`/dashboard/blog-detail/${id}`)} className=' text-start col-span-2 cursor-pointer'>
                    <h3 className=' text-3xl font-bold mb-2'>{blog_heading}</h3>
                    <p>{blog_body.slice(0, 330)}....</p>
                </div>
                <div className="avatar">
                    <div className="w-full h-36 rounded">
                        <img src={img_url} alt='' />
                    </div>
                </div>
            </div>
            <BlogBottomNavigation
                key={id}
                blog={blog}
                refetch={refetch}
            ></BlogBottomNavigation>
        </div>
    );
};

export default BlogCard;