import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const [registerErr, setRegisterErr] = useState('');

    const { createUser, signInWithGoogle, updateUserProfile, setDbUser } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';

    const handleRegister = (data) => {
        setRegisterErr('');
        const { email, password, confirmPassword, name } = data;
        if (password === confirmPassword) {
            createUser(email, password)
                .then(res => {
                    console.log(res.user);
                    const userInfo = {
                        displayName: name
                    }
                    updateUserProfile(userInfo)
                        .then(() => { })
                        .catch(e => { });

                    const userInfoDb = {
                        userName: name,
                        email: email
                    }
                    fetch(`http://127.0.0.1:8000/user/`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfoDb)
                    }).then(res => res.json()).then(data => {
                        console.log(data)
                        setDbUser(data)
                    })

                    navigate(from, { replace: true });
                })
                .catch(error => {
                    setRegisterErr(error.message);
                });
        }
        else {
            setRegisterErr('Password did not match.')
        }
        console.log(email, password, confirmPassword);
    }

    const handleGoogleLogin = () => {
        setRegisterErr('');
        signInWithGoogle()
            .then((res) => {
                // const user = res.user;
                console.log(res);
                const { displayName, email, photoURL } = res?.user
                const userInfo = {
                    userName: displayName,
                    email: email,
                    photo_url: photoURL
                }
                fetch(`http://127.0.0.1:8000/user/`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    setDbUser(data)
                })
                navigate(from, { replace: true })
            }).catch((error) => {
                setRegisterErr(error.message)
            });
    }

    return (
        <div className=' lg:w-1/2 mx-auto lg:p-10 shadow-sm shadow-primary bg-base-100'>
            <h1 className=' text-3xl font-bold text-primary'>Register</h1>
            <form onSubmit={handleSubmit(handleRegister)} className=''>
                <div className="form-control w-full max-w-xs mx-auto">
                    {/* name */}
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                    </label>

                    {/* Email */}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Enter a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                    </label>

                    {/* Password */}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: 'Password should contain  one upper case, lower case, sepecial character, digit and min length 8.'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                    </label>

                    {/* comfirm password */}
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="ReEnter your password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: 'Password confirmation is required'
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: 'Password should contain  one upper case, lower case, sepecial character, digit and min length 8.'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-700">{errors.confirmPassword.message}</span>}
                        {errors.confirmPassword?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.confirmPassword.message}</span>}
                        {registerErr && <p className=' text-red-500'>{registerErr}</p>}
                    </label>


                    <input
                        type="submit" className="input input-bordered w-full max-w-xs border-primary" onClick={handleGoogleLogin} />
                </div>
            </form>
            <div className="divider w-1/2 mx-auto">OR</div>
            <button className="btn btn-outline btn-primary" onClick={() => handleGoogleLogin()}>Continue with GOOGLE</button>
            <h6 className=' mt-5'>Already a User? Please <button onClick={() => navigate('/login')} className=' text-primary font-semibold'>Login</button></h6>
        </div>
    );
};

export default Register;