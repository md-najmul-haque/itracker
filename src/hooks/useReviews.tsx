import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState<any>([]);

  useEffect(() => {
    fetch('https://itracker-server.vercel.app/showReview')
      .then((res) => res.json())
      .then(data => setReviews(data))
  }, []);

  return [reviews]
}


export default useReviews;