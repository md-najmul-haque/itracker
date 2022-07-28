import React from 'react';
import VideoSection from '../components/VideoSection';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import ProcessManagement from '../ProcessManagement/ProcessManagement';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import ProcessMangements from '../ProcessMangements/ProcessMangements';

const Home = () => {
    return (
        <div>       
            <Banner />
            <Bugsearch/>
            <Teamwork />
            <VideoSection />
          
            <ProcessMangements/>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;