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
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}

      pagination={{ clickable: true }}
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
                       New employees can look at the Creative Requests <br /> board, and immediately understand what  the <br /> entire  marketing team is working on without having to ask.</p>
                        </div>
                        <q>Kerry Hoffman // Head of Global Project Management & Ops, Marketing, ClassPass</q>
                        
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img className='imgSize' src="https://i.ibb.co/px9x2gP/alexander-hipp-i-EEBWg-Y-6l-A-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>
                       I cannot stress how important it is to have all of <br /> our information in one central place.  We  use  Asana <br /> to capture all of our  documents,   notes, and  next steps so  we keep consistency.</p>
                            
                        </div>
                        <div className='text2'><q>Ashlee George // Associate Director at Impact Justice</q></div>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img className='imgSize' src="https://i.ibb.co/VVxDKvr/christopher-campbell-r-DEOVt-E7v-Os-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>We wouldn’t have such a great connection  with <br /> different departments if it weren’t  for Asana. I can <br /> interact with engineers directly and establish  working <br /> relationships,and that collaboration has been extremely valuable.</p>
                            
                        </div>
                        <div className='text2'><q>Kyler Rose // Marketing Services Manager</q></div>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="slider">
                    <div className="firstSlider">
                        <img className='imgSize' src="https://i.ibb.co/zmSGHPR/taras-shypka-QEg-HL8-NN7n-M-unsplash-removebg-preview.png" alt="" />
                        
                    </div>
                   
                   
                    <div>
                        <h4><hr />
                            <img src={logsvg} alt="" />
                        </h4>
                    <div className='text'>
                       
                       <p>
                       With Asana, we save an estimated 50 hours <br />  per week that used to  be  spent answering email and attending check-in meetings.</p>
                            
                        </div>
                        <div className='text2'><q>Jamie Chappell // Creative Director</q></div>
                  </div>
                </div></SwiperSlide>
    
      ...
    </Swiper>
        </div>
    );
};

export default Testimonial;