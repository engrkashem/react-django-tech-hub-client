import React, { useContext, useEffect, useState } from "react";
// import { useQuery } from "react-query";

import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../contexts/AuthProvider";


const Description = ({ id, update, apply }) => {

    const [isJob, setJob] = useState('');
    const { user } = useContext(AuthContext);
    useEffect(() => {
        // let url = `http://127.0.0.1:8000/job/${id}/`;
        let url = `https://naimur.pythonanywhere.com/job/${id}/`;
        fetch(url).then(res => res.json()).then(data => {

            setJob(data)
            // console.log(data)
        })
    }, [id])

    const [isApplication, setApplication] = useState(false)
    useEffect(() => {
        // let url = `http://127.0.0.1:8000/application/${id}/`;
        let url = `https://naimur.pythonanywhere.com/application/${id}/`;
        fetch(url).then(res => res.json()).then(data => {

            setApplication(data)
            // console.log(data)
        })
    }, [id])

    // console.log(isApplication);

    const handleDelete = (id) => {
        // const url = `http://127.0.0.1:8000/job/${id}/`;
        const url = `https://naimur.pythonanywhere.com/job/${id}/`;
        const request = {
            method: 'DELETE',
        }
        fetch(url, request).then(res => res.json())
            .then(data => {
                // console.log(data)
                window.location.reload(true)
            })

    }

    const handleUpdate = data => {
        update(data)
    }

    const handleApply = data => {
        apply(data)
    }

    return (
        <div className="">

            <div className="flex gap-3 justify-between ">
                {/* <img className="rounded-full " src={isJob.creator?.photo_url} /> */}
                {/* <img className="rounded-full w-12 h-12" alt="phofile pic" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.befunky.com%2Ffeatures%2Fphoto-editor%2F&psig=AOvVaw1gBYLQW1-uLytrQaoy7qbZ&ust=1677608077780000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCK452ntv0CFQAAAAAdAAAAABAn" /> */}

                <div className="ms-4">
                    <h3 className="font-bold text-lg text-left">{isJob.company}</h3>
                    <h4 className="text-left text-sm"><MapPinIcon className="w-3.5 h-3.5 align-middle inline-block" /> {isJob.location}</h4>

                    <span className="text-left text-sm block align-middle">
                        <BriefcaseIcon className="w-3.5 h-3.5 mr-2 inline-block" />
                        {isJob.job_type}</span>

                </div>
                {
                    user.email === isJob.creator?.email ?
                        <div className="">
                            <button className="btn btn-primary text-white" onClick={() => handleUpdate(isJob)}>
                                Update
                            </button>
                            <button className="btn bg-red-600 border-0 text-white mx-4" onClick={() => handleDelete(isJob.id)}>
                                Delete
                            </button>
                        </div>
                        :
                        <button className="btn btn-primary text-white" onClick={() => handleApply(isJob)}>
                            Apply Now
                        </button>
                }

            </div>
            <div className="divider"></div>
            <div className="">
                <h2 className="text-2xl font-bold">{isJob.title}</h2>
                <h3 className="">{isJob.location}</h3>
            </div>
            <div className="text-left mt-16 ">
                <h3 className="text-lg font-bold">Job Details:</h3>

                <p className="whitespace-pre-wrap">
                    {isJob.content}
                </p>


                <h3 className="text-lg font-bold mt-5">Requirements:</h3>
                <text className="">{isJob.skill_requirements}</text>

                <h3 className="text-lg font-bold mt-5">About Company:</h3>
                <p className="">{isJob.about_company}</p>
            </div>
            <div className="border border-gray-200 p-4 flex mt-10 rounded shadow content-end">
                <img src={isJob.creator?.photo_url} alt="User" className="w-12 h-12 rounded-full" />
                <div className="mx-2">
                    <h3 className="font-bold text-lg text-left">{isJob.creator?.userName}</h3>
                    <h4 className="">{isJob.creator?.user_role}</h4>
                </div>
            </div>
            {
                user.email === isJob.creator?.email &&
                <div>
                    <div className="divider"></div>
                    <h3 className="text-lg font-bold mt-5">Applications Received:</h3>
                    {
                        isApplication[0] ?
                            isApplication.map(application =>
                                <div className="shadow border border-gray-200 rounded p-5 my-2 text-left">
                                    <h2 className="font-bold text-xl">{application?.name}</h2>
                                    <a href={application?.resume} className="text-blue-600 visited:text-purple-600" target="_blank" >Resume Link</a>
                                </div>

                            ) :
                            <span>No Applications Found</span>


                    }
                </div>
            }
        </div>
    )
}

export default Description;