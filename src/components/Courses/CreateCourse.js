import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
// import { useHistory } from "react-router-dom";

const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [courseFee, setCourseFee] = useState(0);
    const [courseLength, setCourseLength] = useState("");
    const [videoThumbnailUrl, setVideoThumbnailUrl] = useState("");
    const [videoPlaylistUrl, setVideoPlaylistUrl] = useState("");
    const { dbUser } = useContext(AuthContext);
    const navigate = useNavigate()
    // const history = useHistory();
    // console.log(dbUser)

    const handleSubmit = (nData) => {
        nData.preventDefault();
        const newCourse = {
            title: title,
            description: description,
            course_fee: courseFee,
            course_length: courseLength,
            video_thumbnail_url: videoThumbnailUrl,
            video_playlist_url: videoPlaylistUrl,
            enroll_status: false,
            instructor: dbUser?.id,
        };
        fetch("http://127.0.0.1:8000/course/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCourse),
        })
            .then(() => {
                toast.success('Course is created.')
                navigate('/course')
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="px-10 py-5">
            <h2 className="text-2xl font-bold">Create a New Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="w-full max-w-md mx-auto">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        placeholder="Enter a Course Title"
                        value={title}
                        onChange={(nData) => setTitle(nData.target.value)}
                        required
                    />
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        placeholder="Enter description"
                        value={description}
                        onChange={(nData) => setDescription(nData.target.value)}
                        required
                    />
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/2 md:pr-2">
                            <label htmlFor="courseFee" className="block text-gray-700 font-bold mb-2">
                                Course Fee
                            </label>
                            <input
                                type="number"
                                id="courseFee"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                                placeholder="Enter Course Fee(BDT)"
                                value={courseFee}
                                onChange={(nData) => setCourseFee(nData.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-2">
                            <label htmlFor="courseLength" className="block text-gray-700 font-bold mb-2">
                                Course Length
                            </label>
                            <input
                                type="text"
                                id="courseLength"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                                placeholder="Enter Course Length"
                                value={courseLength}
                                onChange={(nData) => setCourseLength(nData.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="videoThumbnailUrl" className="block text-gray-700 font-bold mb-2">
                        Video Thumbnail URL
                    </label>
                    <input
                        type="text"
                        id="videoThumbnailUrl"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        placeholder="Enter Video Thumbnail URL"
                        value={videoThumbnailUrl}
                        onChange={(nData) => setVideoThumbnailUrl(nData.target.value)}
                        required
                    />
                    <label htmlFor="videoPlaylistUrl" className="block text-gray-700 font-bold mb-2">
                        Video Playlist URL
                    </label>
                    <input
                        type="text"
                        id="videoPlaylistUrl"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        placeholder="Enter Video Playlist URL"
                        value={videoPlaylistUrl}
                        onChange={(nData) => setVideoPlaylistUrl(nData.target.value)}
                        required
                    />
                </div>

                <button type="submit" className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md'>
                    Create Course
                </button>
            </form>
        </div>
    );
};

export default CreateCourse;