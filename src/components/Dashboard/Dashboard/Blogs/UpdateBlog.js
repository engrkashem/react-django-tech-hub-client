import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

const UpdateBlog = () => {
    const blog = useLoaderData()
    const navigate = useNavigate()
    const { id, blog_heading, blog_body, blog_creator } = blog

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const creator_id = blog_creator.id
        const updated_blog = {
            blog_heading: data.blog_heading,
            blog_body: data.blog_body,
            blog_creator: creator_id
        }
        fetch(`http://127.0.0.1:8000/blog/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated_blog)
        }).then(res => res.json()).then(credential => {
            if (credential) {
                toast.success('Blog Updated Successfully.')
                navigate('/dashboard/')
            }

        })
        // console.log(data);

    }

    // console.log(blog)
    return (
        <div className='w-full'>
            <div className=' mt-24'>
                <h4 className='text-4xl mb-10 text-primary'>Update Your Blog </h4>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='w-11/12 lg:w-3/4 mx-auto'>
                    {/* Blog heading */}
                    <div className="form-control w-full max-w-md mx-auto">
                        <label className="label">
                            <span className="label-text">Blog Heading</span>
                        </label>
                        <input
                            type={"text"}
                            defaultValue={blog_heading}
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
                            defaultValue={blog_body}
                            className="textarea textarea-primary w-full max-w-md  text-sm h-60"
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

                    {/* form submit */}
                    <input className='btn btn-outline btn-primary w-full max-w-md mt-10' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;