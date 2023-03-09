import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import { AuthContext } from "../../contexts/AuthProvider";

const ApplyJob = ({ apply }) => {
    const { register, handleSubmit } = useForm();
    // const { user } = useContext(AuthContext);
    const handleApply = (data) => {

        console.log(data, 'Data')
        // data.creator = Number(data.creator)
        const url = `http://127.0.0.1:8000/application/`;
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(url, request).then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('Your application is submitted successfully')
                window.location.reload(true)
            })
    }
    // console.log(apply, "application")

    return (
        <div className="lg:p-5">
            <h1 className="font-bold text-3xl text-primary my-5">Apply for job</h1>
            <form className="form-control mx-auto w-4/5" onSubmit={handleSubmit(handleApply)}>
                <label className="label mt-2">
                    <span className="label-text" >Name:</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Name"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                />

                <label className="label mt-2">
                    <span className="label-text" >Resume Link</span>
                </label>
                <input className="input input-bordered input-primary w-full" placeholder="Resume link"
                    {...register("resume", {
                        required: {
                            value: true,
                            message: 'This field is required'
                        }
                    })}
                >
                </input>

                <input className="input input-bordered input-primary w-full hidden" defaultValue={apply?.id}
                    {...register("job", {
                        required: {
                            value: true,
                            message: 'This field is required',

                        }
                    })}
                >
                </input>


                <button type="submit" className="btn btn-primary text-white mt-5">Apply</button>

            </form>
        </div>
    )

}


export default ApplyJob;