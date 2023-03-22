import React from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
// import mail from "../../../images/mail.svg";
// import placeholder from "../../../images/placeholder.svg";
init(process.env.REACT_APP_PUBLIC_KEY);

console.log(process.env.REACT_APP_PUBLIC_KEY)
const Contact = () => {
    // const [result, setResult] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const sendEmail = (data, e) => {
        console.log(data)
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    if (result.status === 200) {
                        e.target.reset();
                        // setResult("Thank you for contacting me. You will get reply soon.");
                        toast.success('Email is sent successfully.')
                    }
                },
                (error) => {
                    console.log(error.text);
                    // setResult(error.text)
                    toast.error('Email was not sent due to unexpected condition.')
                }
            );
    };
    return (
        <div className="pt-20">
            <h1 className="text-3xl font-bold">Contact</h1>
            <form onSubmit={handleSubmit(sendEmail)}
                className='w-11/12 lg:w-3/4 mx-auto'>

                {/* Blog heading */}
                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Your Name:</span>
                    </label>
                    <input
                        type={"text"}
                        placeholder="Write Your Name"
                        className="input input-bordered input-primary w-full max-w-md text-sm"
                        {...register("from_name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.blog_heading?.type === 'required' && <span className="label-text-alt text-red-700">{errors.blog_heading.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Your Email:</span>
                    </label>
                    <input
                        type={"email"}
                        placeholder="Write Your Email"
                        className="input input-bordered input-primary w-full max-w-md text-sm"
                        {...register("user_email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.blog_heading?.type === 'required' && <span className="label-text-alt text-red-700">{errors.blog_heading.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text">Your message:</span>
                    </label>
                    <textarea
                        type={"text"}
                        placeholder="Write Your Blog here"
                        className="textarea textarea-primary w-full max-w-md  text-sm h-48"
                        {...register("message", {
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

                <input className='btn btn-outline btn-primary w-full max-w-md mt-10' type="submit" placeholder="Send Email" />
            </form>
        </div>
    );
};

export default Contact;