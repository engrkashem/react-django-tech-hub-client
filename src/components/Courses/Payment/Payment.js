import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    const course = useLoaderData()
    const { id, course_fee, title, course_length, instructor } = course
    // console.log(course)
    return (
        <div>
            <div>
                <h6 className=' text-2xl'>Pay BDT
                    <span className=' font-bold'> {course_fee} </span> for <span className=' font-bold'>{title}</span> Course</h6>
                <p className=' text-xl'>Course length: <span>{course_length}</span></p>
                <p className=' text-xl'>Instructor: <span>{instructor.userName}</span></p>
            </div>

            <div className=' my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        key={id}
                        course_fee={course_fee}
                    ></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;