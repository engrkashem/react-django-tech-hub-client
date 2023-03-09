import React from 'react';
import { useLoaderData } from 'react-router-dom';
import blogPic from '../../../../assets/blogs/blogProfile.png';
import BlogBottomNavigation from '../../../Shared/BlogBottomNavigation/BlogBottomNavigation';

const BlogDetails = () => {
    // const navigate = useNavigate()
    const blog = useLoaderData()
    const { id, blog_heading, blog_body, post_time, img_url, blog_creator } = blog
    // console.log(blog)
    return (
        <div>
            <div className=' mb-5 py-5 lg:mt-40 px-5 lg:px-20'>
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
                <div className=' text-start my-5'>
                    <div className="avatar w-80 lg:w-96 h-52 mb-10 mx-auto">
                        <div className="w-full h-full rounded">
                            <img src={img_url} alt='' />
                        </div>
                    </div>
                    <div className=' text-start col-span-2 cursor-pointer'>
                        <h3 className=' text-4xl font-bold mb-5'>{blog_heading}</h3>
                        <p className='whitespace-pre-wrap'>{blog_body}</p>
                    </div>

                </div>
                <BlogBottomNavigation
                    key={id}
                    blog={blog}
                ></BlogBottomNavigation>
            </div>
        </div>
    );
};

export default BlogDetails;