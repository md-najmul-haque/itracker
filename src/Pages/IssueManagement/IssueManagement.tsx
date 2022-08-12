import React from 'react';
import './IssueManagement.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";


import img from '../../Assets/features/chart.jpg'
import { Link } from 'react-router-dom';
const IssueManagement = () => {
    return (
        <div className='bg-accent bg-opacity-75 py-16'>
            <div className='grid lg:grid-cols-2 gap-12 container mx-auto'>
                <div className='flex justify-center items-center'>
                    <div className="text-white p-5">
                        <h1 className='uppercase text-4xl mb-8'>Issue management</h1>
                        <p className='text-xl text-justify mr-5'>Record bugs easily, and track them based on desired criteria. Create custom views for your issue tracking software to focus on bugs that are the most time sensitive. See how many bugs have been logged, if they've been resolved, and more with reports.</p>
                        <Link to='/features' className="btn mt-5 text-white px-8 btn-primary">ALL features</Link>
                    </div>
                </div>
                <div>
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper lg:w-[600px] lg:h-[500px] w-[400px] h-[300px]">
                        <SwiperSlide className='swiper-slider'>
                            <img src={img} />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slider'>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slider'>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slider'>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default IssueManagement;