import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
}

const AddReviews = () => {

const [user, loading, error] = useAuthState(auth)

const { register, handleSubmit, reset } = useForm();


    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const stars = Array(5).fill(0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    const handleClick = (value: any) => {
        setRating(value);
    }
    const handleMouseOver = (newHoverValue: any) => {
        setHoverValue(newHoverValue);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }
    if(loading) {
        return <Loading/>
    }

    const onSubmit = (data: any) => {
       const email = user?.email;
       const photoURL = user?.photoURL;
       const displayName = user?.displayName;
       const review = { ...data, rating, email, photoURL, displayName}
       console.log(review);

       fetch("http://localhost:5000/add-review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review)
       })
       .then((res) => {
        res.json()
        if(res.status === 200){
          
          toast(`You Are Adding ${rating} Reviews`)
        }
       })
       .then((data) => {
        // console.log(data)

       })
       reset()
    }
    return (
        <div className='w-full p-10 lg:w-1/2 mx-auto'>
     add reviews
     
        <form onSubmit={handleSubmit(onSubmit)} className='card-body pb-0'>
        <div className="avatar mx-auto flex-col items-center gap-3">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={`${user?.photoURL ? user?.photoURL : 'https://i.pravatar.cc/300'}`} alt={`${user?.displayName}`}  />
          </div>
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        </div>

        <div className="flex flex-row justify-center">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || rating) > index ? colors.orange : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>

          <textarea 
          {...register("review", { required: false, maxLength:  500 })}
          className="textarea textarea-primary h-40 my-3 w-full"

          placeholder="Please Your Feedback..."
          ></textarea>
          <input type="submit" className='btn btn-primary' value='Add Review' disabled={!rating} />
        </form>

        </div>
    );
};

export default AddReviews;