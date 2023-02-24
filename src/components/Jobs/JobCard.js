import React from "react";
import { ClockIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
const JobCard = ({ job }) => {
    const { title, company, location, created_at, job_type } = job
    const creation_date = new Date(created_at)
    const today = new Date()
    const time_diff = today.getTime() - creation_date.getTime()
    const date_diff = Math.floor(time_diff / (1000 * 3600 * 24))
    // console.log(date_diff)
    return (
        <div className="border rounded-md mb-10 text-left p-5 shadow-md">
            <div className="flex justify-between">
                <h1 className="font-bold text-lg">{title}</h1>
                <span className="font-normal bg-gray-100 text-xs py-1 pr-2 block shadow border rounded">
                    <BriefcaseIcon className="w-3.5 h-3.5 mx-2 align-top inline-block" />
                    {job_type}</span>
            </div>

            <span className="font-normal text-sm block">{company}</span>
            <span className="font-normal text-xs text-gray-500 block">{location}</span>


            {
                date_diff ? <span className="font-normal text-xs text-gray-500 mt-3 block">
                    <ClockIcon className="w-3.5 h-3.5 mr-1 inline-block align-top"></ClockIcon>
                    Posted {date_diff} day ago</span>
                    :
                    <span className="font-normal text-xs text-gray-500 mt-3 block">
                        <ClockIcon className="w-3.5 h-3.5 mr-1 inline-block align-top"></ClockIcon>
                        Posted today</span>
            }

        </div>
    );
}

export default JobCard;