import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";


const ViewProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm();

if(loading){
    return <Loading />
}

if(user){

    // fetching user data for updateProfile

}



    return (
        <form 
        className="my-36 bg-base-200 flex-col flex items-center py-11"
        >
            <div className='card flex-shrink-0 shadow-2xl bg-base-100 w-3/4 lg:w-2/3 justify-center items-center'>
            <div className='flex items-center bg-slate-200 w-full'>
            <div className='avatar p-5 pr-0 w-1/4'>
                <div className='w-36 mask mask-hexagon'>
                    {/* <img src="" alt="" /> here will be user info images */}
                </div>
            </div>
            
            <div>
                {/* <h1 className='text-4xl font-bold'></h1> here will be user info displayName */}

                {/* <p></p> here will be user info email */}
            </div>
            </div>
            

            {/* Additional Info */}
            <div className='overflow-x-auto w-full'>

                <div className='w-full flex flex-row'>
                    <div className='px-5 lg:px-10 w-1/6 lg:w-2/12 py-5'>
                        <div className='font-bold'>Address</div>
                        <div className='text-sm opacity-50'>City</div>
                    </div>
                    <div className='px-10 py-5 w-5/6 lg:w-10/12'>
                        
                    </div>
                </div>

            </div>
            </div>
        </form>
    );
};

export default ViewProfile;