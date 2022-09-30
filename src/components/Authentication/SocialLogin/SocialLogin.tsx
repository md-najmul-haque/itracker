import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";


const SocialLogin = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

    let errorMessage;

    if (gError || gitError || fbError) {
        return (
            errorMessage = <p className="text-error">Error: {gError?.message} || {gitError?.message} ||{fbError?.message} </p>
        )
    }

    if (gLoading || gitLoading || fbLoading) {
        return <Loading />
    }

    if (gUser || gitUser || fbUser) {

        const createUser = {
            userName: gUser?.user.displayName || gitUser?.user.displayName || fbUser?.user.displayName,
            email: gUser?.user.email || gitUser?.user.email || fbUser?.user.email,
        }

        fetch('https://itracker-server.vercel.app/signup',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(createUser)
            })
            .then(res => res.json())

    }

    return (
        <div>
            <p>{errorMessage}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-primary w-full text-white">Continue with Google</button> <br />
                <button onClick={() => signInWithGithub()} className="btn btn-primary w-full my-2 text-white">Continue with Github</button>
                <button onClick={() => signInWithFacebook()} className="btn btn-primary w-full text-white">Continue with Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;