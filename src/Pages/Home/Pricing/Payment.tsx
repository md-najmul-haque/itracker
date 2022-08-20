import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const stripePromise = loadStripe
    ('pk_test_51LX2rXAsoePut0SR2vxGKb0dMi1GgRCMdO80vWltUmNjI8w1W33gmgDUKtLMSWnEdZy06v5buGhWyTQLTGrZiBx6000CXgP9K1');

const Payment = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='mt-32 mb-20'>
            <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent mx-auto my-12 py-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm name={user?.displayName} email={user?.email}/>
                    </Elements>
                </div>
            </div>


            </div>
        </div>
    );
};

export default Payment;