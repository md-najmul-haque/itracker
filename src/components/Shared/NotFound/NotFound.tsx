import { Link } from "react-router-dom";
import notFound from "../../../assets/notFound/notFound.jpg";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center bg-white">
            <div className="bg-base  flex items-center justify-center mx-4 md:w-2/3">
                <div className="flex flex-col items-center">
                    <img className="px-4 py-2 hidden md:block w-full rounded-lg" src={notFound} alt="" />
                    <img className="md:hidden rounded-lg" src={notFound} alt="" />
                    <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                    <p className="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">No signal here! we cannot find the page you are looking for</p>
                    <Link to='/' className="btn btn-primary text-white mb-4">Go Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
