import React from 'react';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import TrustedCompany from '../TrustedCompany/TrustedCompany';
import IssueManagement from '../../IssueManagement/IssueManagement';



const Home = () => {

    return (
        <div>
            <Banner />
            <Teamwork />
            <IssueManagement />
            <Bugsearch />

            <TrustedCompany />
            <FAQ />
        </div>
    );
};

export default Home;