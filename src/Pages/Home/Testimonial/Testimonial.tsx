import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './Testimonial.css'

import { Pagination } from "swiper";
import useReviews from "../../../hooks/useReviews";
import Reviews from "./Reviews";





const Testimonial = () => {

  const [reviews] = useReviews()
  
// console.log(reviews)


  return (
    <div className="mb-0 lg:mb-28 background bg-[#0d0e10]">
    <h1 className="text-center text-4xl text-white testimonialHeading p-3">Our Testimonial</h1>
      <div>



        <Swiper


          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          sga-mxnf-bab

        >

      
      
   
         <SwiperSlide>
          <div >
          {


       

        
        //    reviews?.result?.map(({review}: any) => {
        //       <Reviews 
        //       key={review._id}
        //       onePersonReview={review}
        //       />
       
        // })
       
    
          } 
          </div>
         </SwiperSlide>

  {/* <Reviews/> */}
     <SwiperSlide>
   
     </SwiperSlide>
         

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;