import React from 'react';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';

const Home = () => {

    return (
        <div>
            <Banner />
            <Teamwork />
            <Bugsearch />
            <Testimonial />
            <FAQ/>
        </div>
    );
};

export default Home;