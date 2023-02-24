import React from "react";

const JobCard = ({job}) => {
    const {id, title, creator, company, location, created_at} = job
    const creation_date = new Date(created_at)
    const today = new Date()
    const time_diff =  today.getTime() - creation_date.getTime()
    const date_diff = Math.floor(time_diff / (1000*3600*24))
    console.log(date_diff)
    return (
        <div className="border rounded-md my-2 text-left p-5 shadow-md">
            <h1 className="font-bold text-lg">{title}</h1>
            <span className="font-normal text-sm block">{company}</span>
            <span className="font-normal text-xs text-gray-500 block">{location}</span>
            {date_diff ? <span className="font-normal text-xs text-gray-500 block mx-2">Posted {date_diff} day ago</span>
            :
            <span className="font-normal text-xs text-gray-500 block  mt-3">Posted today</span>
        }
            
        </div>
    );
}

export default JobCard;