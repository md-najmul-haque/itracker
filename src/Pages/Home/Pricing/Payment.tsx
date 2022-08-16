import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe
    ('pk_test_51LX2rXAsoePut0SR2vxGKb0dMi1GgRCMdO80vWltUmNjI8w1W33gmgDUKtLMSWnEdZy06v5buGhWyTQLTGrZiBx6000CXgP9K1');

const Payment = () => {
    return (
        <div className='mt-24'>
            <div>
                <div className="card w-96 bg-accent text-neutral-content mx-auto">
                    <div className="card-body items-center teext-center">
                        <h2 className="card-title">Total Pric</h2>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent mx-auto my-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm/>
                    </Elements>
                </div>
            </div>


            </div>
        </div>
    );
};

export default Payment;