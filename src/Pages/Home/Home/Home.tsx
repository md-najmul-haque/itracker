import React from 'react';
import IndexSlider from '../components/Slider/IndexSlider';
import VideoSection from '../components/VideoSection';


import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import ProcessManagement from '../ProcessManagement/ProcessManagement';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <IndexSlider/>
         <VideoSection/>
            <Bugsearch/>
            <Teamwork/>
            <ProcessManagement/>
           
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;