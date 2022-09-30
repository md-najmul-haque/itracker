import { FC } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  onePersonReview: any;
}
const Reviews: FC<Props> = ({ onePersonReview }) => {

  const { displayName, photoURL, rating, review } = onePersonReview;
  return (
    <div className="">
      <div className="card card-compact bg-white w-72 h-96 shadow-xl flex py-10 items-center mx-16 md:mx-28 lg:mx-0">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL} alt={displayName} />
          </div>
        </div>
        <h2 className="card-title text-center my-5 dark:text-black">{displayName}</h2>
        <div className="flex flex-col items-center justify-center gap-4  dark:text-black">
          <p className={`text-center px-5 pt-3 h-[120px]`} >
            {review}
          </p>
          <div className="flex">
            {rating >= 1 ? (
              <FaStar className="text-orange-400" />
            ) : (
              <FaStar className="text-orange-200" />
            )}
            {rating >= 2 ? (
              <FaStar className="text-orange-400" />
            ) : (
              <FaStar className="text-orange-200" />
            )}
            {rating >= 3 ? (
              <FaStar className="text-orange-400" />
            ) : (
              <FaStar className="text-orange-200" />
            )}
            {rating >= 4 ? (
              <FaStar className="text-orange-400" />
            ) : (
              <FaStar className="text-orange-200" />
            )}
            {rating >= 5 ? (
              <FaStar className="text-orange-400" />
            ) : (
              <FaStar className="text-orange-200" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;