import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonial = () => {
    return (
        <div>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa natus sit odit eum? Fugiat sed quaerat eius itaque saepe nesciunt officiis, labore voluptates iusto veritatis in vero temporibus rem ad officia facere accusamus eos ducimus, ipsam tempore blanditiis expedita. Labore.</p>
                    </div>
                </div></SwiperSlide>
    
      ...
    </Swiper>
        </div>
    );
};

export default Testimonial;