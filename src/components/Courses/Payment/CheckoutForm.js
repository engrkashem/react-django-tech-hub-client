import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import ApiService from '../../../Api';
import { AuthContext } from '../../../contexts/AuthProvider';

const CheckoutForm = ({ course }) => {
    const { id, course_fee } = course
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { dbUser } = useContext(AuthContext)
    // console.log(dbuser)
    const email = dbUser?.email

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            // console.log(error.message)
        }
        else {
            setCardError('')
            // console.log(paymentMethod)
            // console.log(paymentMethod.id)
            ApiService.saveStripeInfo({
                course_fee, email, payment_method_id: paymentMethod.id
            }).then(response => {
                if (response.status === 200) {

                    const enrollInfo = {
                        student: (dbUser?.id || 3),
                        course: id
                    }
                    fetch('http://127.0.0.1:8000/enroll/', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(enrollInfo)
                    }).then(res => res.json()).then(data => {
                        // console.log(data)
                    })

                }
                // console.log(response.data)
                // console.log(response.status)
            }).catch(er => {
                console.log(er)
            })
        }


    }

    return (
        <>
            <form className=' w-96 mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=' btn btn-sm btn-primary mt-10' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;