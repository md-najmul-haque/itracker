import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import TrustedCompany from '../TrustedCompany/TrustedCompany';
import IssueManagement from '../../IssueManagement/IssueManagement';
import SocialShare from '../../Shared/SocialShare/SocialShare';
import Indicator from './Indicator';

const Home = () => {

    return (
        <div className='dark:bg-black'>
            <Indicator />
            <Banner />
            <SocialShare />
            <Teamwork />
            <IssueManagement />
            <Bugsearch />
            <Testimonial />
            <TrustedCompany />
            <FAQ />
        </div>
    );
};

export default Home;