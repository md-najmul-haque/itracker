import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import logsvg from '../../../assets/testimonial-img/logo-classpass.svg'
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
                        <img className='imgSize' src="https://i.ibb.co/R9sFBNW/tamara-bellis-e-DVQw-VMLMg-U-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Culpa natus sit odit eum? Fugiat sed quaerat eius itaque <br /> saepe nesciunt officiis, labore voluptates iusto veritatis in <br /> vero temporibus rem ad officia facere accusamus eos <br /> ducimus, ipsam tempore blanditiis expedita. Labore.</p>
                            
                        </div>
                        <div className='text2'><blockquote>-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam et voluptatum fugiat aperiam corporis explicabo nostrum ducimus ex.</blockquote></div>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img className='imgSize' src="https://i.ibb.co/R9sFBNW/tamara-bellis-e-DVQw-VMLMg-U-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Culpa natus sit odit eum? Fugiat sed quaerat eius itaque <br /> saepe nesciunt officiis, labore voluptates iusto veritatis in <br /> vero temporibus rem ad officia facere accusamus eos <br /> ducimus, ipsam tempore blanditiis expedita. Labore.</p>
                            
                        </div>
                        <div className='text2'><blockquote>-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam et voluptatum fugiat aperiam corporis explicabo nostrum ducimus ex.</blockquote></div>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img className='imgSize' src="https://i.ibb.co/R9sFBNW/tamara-bellis-e-DVQw-VMLMg-U-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Culpa natus sit odit eum? Fugiat sed quaerat eius itaque <br /> saepe nesciunt officiis, labore voluptates iusto veritatis in <br /> vero temporibus rem ad officia facere accusamus eos <br /> ducimus, ipsam tempore blanditiis expedita. Labore.</p>
                            
                        </div>
                        <div className='text2'><blockquote>-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam et voluptatum fugiat aperiam corporis explicabo nostrum ducimus ex.</blockquote></div>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img className='imgSize' src="https://i.ibb.co/R9sFBNW/tamara-bellis-e-DVQw-VMLMg-U-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Culpa natus sit odit eum? Fugiat sed quaerat eius itaque <br /> saepe nesciunt officiis, labore voluptates iusto veritatis in <br /> vero temporibus rem ad officia facere accusamus eos <br /> ducimus, ipsam tempore blanditiis expedita. Labore.</p>
                            
                        </div>
                        <div className='text2'><blockquote>-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veniam et voluptatum fugiat aperiam corporis explicabo nostrum ducimus ex.</blockquote></div>
                  </div>
                </div></SwiperSlide>
    
      ...
    </Swiper>
        </div>
    );
};

export default Testimonial;