import Indicator from '../../../components/Shared/Indicator/Indicator';
import Charts from '../Charts/Charts';
import Fixissue from '../Fixissue/Fixissue';
import Iprocesses from '../Iprocesses/Iprocesses';
import Viewrepoting from '../Viewrepoting/Viewrepoting';

const Features = () => {
    return (
        <>
            <Indicator />
            <Iprocesses />
            <Charts />
            <Fixissue />
            <Viewrepoting />
        </>
    );
};

export default Features;