import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState<any>([]);

    useEffect(() => {
      fetch('http://localhost:5000/showReview')
      .then((res) => res.json())
      .then(data => setReviews(data))
    }, []);

    return [reviews]
}


export default useReviews;