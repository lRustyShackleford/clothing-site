import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopUp();
        console.log(response);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in with Google PopUp
            </button>
        </div>
    )
};

export default SignIn;