import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2'

interface props {
    name: String | any;
    email: String | any;
}
const CheckoutForm: React.FC<props> = ({ name, email }) => {
    const stripe = useStripe();
    const elements = useElements()
    const [success, setSuccess] = useState<string>('')
    const [prosessing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState<string>('')
    const [clientSecret, setClientSecret] = useState('')
    const price = 20.66;

    useEffect(() => {
        fetch('http://localhost:5000/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)
        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message || '')
        } else {
            setCardError('')
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'congrate!,Your payment is completed',
                showConfirmButton: false,
                timer: 2000
            })
            setSuccess('congrate!,Your payment is completed')

            //store payment data
            const payment = {
                name: name,
                email: email,
                paymentId: paymentIntent.id,
                amount: paymentIntent.amount
            }
            fetch('http://localhost:5000/storePayment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                }
                )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#FFFDE3',
                                '::placeholder': {
                                    color: '#FFFDE3',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                   transactionId?<p className='text-white mt-8'>payment done</p>: <button className='btn btn-success  mt-12 text-lg' type="submit" disabled={!stripe || !clientSecret}>
                        Pay<span className='ml-3'>${price}</span>
                    </button>
                }
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>Your transaction Id <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }

        </>
    );
};

export default CheckoutForm;