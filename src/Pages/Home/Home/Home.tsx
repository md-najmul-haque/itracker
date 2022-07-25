import React from 'react';
// import IndexSlider from '../../Home/components/slider/IndexSlider';
import VideoSection from '../components/VideoSection';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import ProcessManagement from '../ProcessManagement/ProcessManagement';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Bugsearch />
            <Teamwork />
            {/* <IndexSlider /> */}
            <VideoSection />
            <ProcessManagement />
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;