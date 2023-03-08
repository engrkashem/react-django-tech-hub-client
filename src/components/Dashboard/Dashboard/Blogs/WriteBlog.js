import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const WriteBlog = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { dbUser } = useContext(AuthContext)
    // console.log(dbUser)
    const onSubmit = blog => {
        // console.log(blog)
        blog.topic = blog.topic.toLowerCase()
        const blog_post_url = `http://127.0.0.1:8000/blog/`;
        fetch(blog_post_url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(res => res.json()).then(data => {
            if (data) {
                toast.success('You Blog is Posted Successfully')
                navigate('/dashboard')
            }
            else toast.error('Unauthorized Blog Post')
        })
        // console.log(blog);
    }
    return (
        <div className='w-full font-bold mt-24 overflow-y-scroll'>
            <h4 className='text-4xl mb-10 text-primary'>Post Your Blog </h4>
            <form onSubmit={handleSubmit(onSubmit)}
                className='w-11/12 lg:w-3/4 mx-auto'>
                {/* Blog heading */}
                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Blog Heading</span>
                    </label>
                    <input
                        type={"text"}
                        placeholder="Write Your Blog Heading"
                        className="input input-bordered input-primary w-full max-w-md text-sm"
                        {...register("blog_heading", {
                            required: {
                                value: true,
                                message: 'Heading is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.blog_heading?.type === 'required' && <span className="label-text-alt text-red-700">{errors.blog_heading.message}</span>}
                    </label>
                </div>
                {/* blog body */}
                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Blog</span>
                    </label>
                    <textarea
                        type={"text"}
                        placeholder="Write Your Blog here"
                        className="textarea textarea-primary w-full max-w-md  text-sm h-48"
                        {...register("blog_body", {
                            required: {
                                value: true,
                                message: 'Blog is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.blog_body?.type === 'required' && <span className="label-text-alt text-red-700">{errors.blog_body.message}</span>}
                    </label>
                </div>
                {/* blog related to skill field */}
                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Skill Field/Topic</span>
                    </label>
                    <input
                        type={"text"}
                        placeholder="Write Your Blog Blongs to field"
                        className="input input-bordered input-primary w-full max-w-md  text-sm"
                        {...register("topic", {
                            required: {
                                value: true,
                                message: 'topic is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.topic?.type === 'required' && <span className="label-text-alt text-red-700">{errors.topic.message}</span>}
                    </label>
                </div>

                {/* image URLs */}
                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Provide Image URLs</span>
                    </label>
                    <input
                        type={"text"}
                        placeholder="Write Your Blog Image Urls"
                        className="input input-bordered input-primary w-full max-w-md  text-sm"
                        {...register("img_url", {
                            required: {
                                value: true,
                                message: 'Image Urls is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img_url?.type === 'required' && <span className="label-text-alt text-red-700">{errors.img_url.message}</span>}
                    </label>
                </div>
                {/* blog writer */}
                <div className="form-control w-full max-w-md mx-auto hidden">
                    <label className="label">
                        <span className="label-text">Blog Writer</span>
                    </label>
                    <input
                        type="number"
                        placeholder="example: 1, 9"
                        defaultValue={dbUser?.id || 3}
                        value={dbUser?.id || 3}
                        className="input input-bordered input-primary w-full max-w-md text-sm"
                        {...register("blog_creator")}
                    />
                </div>

                {/* form submit */}
                <input className='btn btn-outline btn-primary w-full max-w-md mt-10' type="submit" />
            </form>
        </div>
    );
};

export default WriteBlog;