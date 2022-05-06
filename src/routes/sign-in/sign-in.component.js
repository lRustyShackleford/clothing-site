import SignUpForm from "../../components/sign-up-form/sign-on-form.component";
import { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log('Response user: ', userDocRef);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in with Google PopUp
            </button>
            <SignUpForm />
        </div>
    )
};

export default SignIn;