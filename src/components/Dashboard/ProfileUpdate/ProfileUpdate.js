import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';


const ProfileUpdate = () => {
    const { updateUserProfile } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();
    const { dbUser } = useContext(AuthContext)
    // console.log(dbUser)

    const handleEdit = (data) => {

        const { photo, profession, skills } = data
        // const photo = data?.photo;
        const userInfo = {
            photoURL: photo
        }

        // update user in django
        const updatedInfo = {
            email: dbUser?.email,
            photo_url: photo,
            profession: profession,
            skill_set: skills,
            userName: dbUser?.userName
        }

        // const url = `http://127.0.0.1:8000/user/`
        const url = `https://naimur.pythonanywhere.com/user/`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        }).then(res => res.json()).then(data => {
            // console.log(data.userName)
            reset()
        })

        // update user profile to firebase
        updateUserProfile(userInfo)
            .then(res => {
                // console.log(res, 'line 18')
            })
            .catch(err => {
                // console.log(err, 'line 21')

            });
    }

    return (
        <div className=' lg:w-1/2 mx-auto lg:p-10 shadow-sm shadow-primary py-5' >
            <h1 className=' text-3xl font-bold text-primary'>Edit profile</h1>
            <form className='my-5' onSubmit={handleSubmit(handleEdit)}>
                <div className="form-control w-full max-w-xs mx-auto">
                    {/* Photo url */}
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" {...register("photo", {
                        required: {
                            value: true,
                            message: 'Photo URL is required'
                        }
                    })}
                        placeholder='Your photo URL' />
                    {/* Profession */}
                    <label className="label">
                        <span className="label-text">Prefession</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Profession"
                        className="input input-bordered w-full max-w-xs"
                        {...register("profession")}
                    />
                    {/* Skills */}
                    <label className="label">
                        <span className="label-text">Skills</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Skills Set"
                        className="input input-bordered w-full max-w-xs"
                        {...register("skills")}
                    />


                    <input
                        type="submit" className="btn btn-outline btn-primary w-full max-w-xs my-5" />

                </div>
            </form>

        </div>
    );
};

export default ProfileUpdate;