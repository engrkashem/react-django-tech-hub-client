import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import ApiService from '../../../Api';
// import { AuthContext } from '../../../contexts/AuthProvider';

const CheckoutForm = ({ course_fee }) => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    // const { dbuser } = useContext(AuthContext)
    // console.log(dbuser)
    const email = 'kashemaust@gmail.com'

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
                console.log(response.data)
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