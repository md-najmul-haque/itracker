import Banner from '../../components/Home/Banner/Banner';
import BugSearch from '../../components/Home/BugSearch/BugSearch';
import FAQ from '../../components/Home/FAQ/FAQ';
import IssueManagement from '../../components/Home/IssueManagement/IssueManagement';
import Teamwork from '../../components/Home/Teamwork/Teamwork';
import Testimonial from '../../components/Home/Testimonial/Testimonial';
import TrustedCompany from '../../components/Home/TrustedCompany/TrustedCompany';
import SocialShare from '../../components/Shared/SocialShare/SocialShare';


const Home = () => {

    return (
        <div className='dark:bg-black'>
            <Banner />
            <SocialShare />
            <Teamwork />
            <IssueManagement />
            <BugSearch />
            <Testimonial />
            <TrustedCompany />
            <FAQ />
        </div>
    );
};

export default Home;