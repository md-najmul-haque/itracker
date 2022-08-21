import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import TrustedCompany from '../TrustedCompany/TrustedCompany';
import IssueManagement from '../../IssueManagement/IssueManagement';
import SocialShare from '../../Shared/SocialShare/SocialShare';
import SearchAll from '../../Shared/SearchAll/SearchAll';
import BookData from '../../Shared/SearchAll/Data.json'




const Home = () => {

    return (
        <div>
            <Banner />
            <SocialShare/>
            <SearchAll placeholder="what do you think.?" data={BookData}/>
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