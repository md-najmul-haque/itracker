import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import TrustedCompany from '../TrustedCompany/TrustedCompany';
import IssueManagement from '../../IssueManagement/IssueManagement';
import SocialShare from '../../Shared/SocialShare/SocialShare';
import ScrollingImage from '../ScrollingImage/ScrollingImage';
import Indecator from './Indecator';
import SearchAll from '../../Shared/SearchAll/SearchAll';

const Home = () => {

    return (
        <div>
            <Indecator />
            <Banner />
            <SocialShare />
            <Teamwork />
            <IssueManagement />
            <Bugsearch />
            <ScrollingImage />
            <Testimonial />
            <TrustedCompany />
            <FAQ />
        </div>
    );
};

export default Home;