import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './Testimonial.css'
import img1 from '../../../Assets/testimonial-img/img2.jpg'
import img2 from '../../../Assets/testimonial-img/img1.jpg'
import img3 from '../../../Assets/testimonial-img/img3.jpg'
import img4 from '../../../Assets/testimonial-img/img4.jpg'
import img5 from '../../../Assets/testimonial-img/img5.jpg'

// import required modules
import { Pagination } from "swiper";
const Testimonial = () => {
  return (
    <div className="background container mx-auto py-7 max-h-fit bg-secondary">
      <h1 className="text-center text-4xl font-samibold p-3">Our Testimonial</h1>
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


            <div className="bg-secondary ">
              <h1 className="text-4xl">Contact With <br /> Other Members</h1>
              <p className="mt-10">Keep an eye on your team's progress and workload. Get real-time charts and other visual highlights to share status, spot potential problems, and keep work on track.</p>
              <button className="btn mt-5 border-none btn-primary text-white">Contact Now</button>
              <div>

              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>

            <div>
              <img className="img1" src={img2} alt="" />
              <div className="description">
                <p>I cannot stress how important it is to have all of our information in one central place. We use Asana to capture all of our documents, notes, and next.</p>
                <h4 className="font-bold text-2xl">Lipsum</h4>
                <p>Web developer</p>
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div>

                </div>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>

            <div>
              <img className="img1" src={img3} alt="" />
              <div className="description">
                <p>We wouldn’t have such a great connection with different departments if it weren’t for Asana. I can interact with engineers directly and establish</p>
                <h4 className="font-bold text-2xl">kotlin</h4>
                <p>Web developer</p>
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div>

                </div>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>

            <div>
              <img className="img1" src={img4} alt="" />
              <div className="description">
                <p>With i Tracker, we save an estimated 50 hours per week that used to be spent answering email and attending check-in meetings..It's increasing our </p>
                <h4 className="font-bold text-2xl">Tippli tua</h4>
                <p>Web developer</p>
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div>

                </div>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>

            <div>
              <img className="img1" src={img5} alt="" />
              <div className="description">
                <p>In government we have no shortage of challenges, but there are a lot of things we can control. There are processes that we can improve. </p>
                <h4 className="font-bold text-2xl">Abul Kashem</h4>
                <p>Web developer</p>
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div>

                </div>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>

            <div>
              <img className="img1" src={img1} alt="" />
              <div className="description">
                <p>New employees can look at the Creative Requests board, and immediately understand what the entire marketing team is working .</p>
                <h4 className="font-bold text-2xl">Lara Pia</h4>
                <p>Web developer</p>
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div>

                </div>
              </div>
            </div>


          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;