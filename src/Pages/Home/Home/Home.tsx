import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import TrustedCompany from '../TrustedCompany/TrustedCompany';
import IssueManagement from '../../IssueManagement/IssueManagement';
import ScrollingImage from '../ScrollingImage/ScrollingImage';



const Home = () => {

    return (
        <div>
          
            <Banner />
            <Teamwork />
            <IssueManagement />
            <Bugsearch />
            <ScrollingImage/>
            <Testimonial />
            <TrustedCompany />
            <FAQ />
        </div>
    );
};

export default Home;