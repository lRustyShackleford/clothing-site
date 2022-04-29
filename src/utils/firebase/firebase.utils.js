import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_woQ3F6kei9OBWk6ayfSyZGII9HTg7xc",
    authDomain: "crwn-clothing-db-76532.firebaseapp.com",
    projectId: "crwn-clothing-db-76532",
    storageBucket: "crwn-clothing-db-76532.appspot.com",
    messagingSenderId: "297136500819",
    appId: "1:297136500819:web:070163cbbf46ecabcf96a6"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
