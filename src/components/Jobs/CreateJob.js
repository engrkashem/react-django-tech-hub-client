import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from '../../contexts/AuthProvider'

const CreateJob = () => {
    const { register, handleSubmit } = useForm();
    const { dbUser } = useContext(AuthContext);


    const postJob = (data) => {
        data.creator = Number(data.creator)
        // const url = `http://127.0.0.1:8000/job/`;
        const url = `https://naimur.pythonanywhere.com/job/`;
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(url, request).then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('A new Job is created')
                window.location.reload(true)
            })
    }

    return (
        <div className="lg:p-5">
            <h1 className="font-bold text-3xl text-primary my-5">Post Job</h1>
            <form className="form-control mx-auto w-4/5" onSubmit={handleSubmit(postJob)}>
                <label className="label mt-2">
                    <span className="label-text" >Job Title:</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Enter Job Title"
                    {...register("title", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <label className="label mt-2">
                    <span className="label-text" >Company Name:</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Enter Company Name:"
                    {...register("company", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <label className="label mt-2">
                    <span className="label-text">Company Details:</span>
                </label>
                <textarea className="textarea textarea-primary h-32" placeholder="Write your job description here."
                    {...register("about_company", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                ></textarea>

                <label className="label mt-2">
                    <span className="label-text">Job Description:</span>
                </label>
                <textarea className="textarea textarea-primary h-64" placeholder="Write your job description here."
                    {...register("content", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                ></textarea>

                <label className="label mt-2">
                    <span className="label-text" >Job Requirements:</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Enter Job Requirements"
                    {...register("skill_requirements", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <label className="label mt-2">
                    <span className="label-text" >Job Type:</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Example:(Remote, Hybrid, Onsite)"
                    {...register("job_type", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <label className="label mt-2">
                    <span className="label-text" >Job Location:</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Example:(Remote, Hybrid, Onsite)"
                    {...register("location", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <label className="label mt-2">
                    <span className="label-text hidden" >Creator Id:</span>
                </label>
                <input
                    type='number'
                    className="input input-bordered input-primary w-full hidden" placeholder="Id of the creator."
                    defaultValue={dbUser?.id}
                    value={dbUser?.id}
                    {...register("creator", {
                        required: {
                            valueAsNumber: true,

                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <button type="submit" className="btn btn-primary text-white mt-5">Create Job</button>

            </form>
        </div>
    )
}


export default CreateJob;