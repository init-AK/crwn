import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN5ILpG09OyMsJN5u84WwuS-ZlunozIx0",
    authDomain: "crown-db-3d122.firebaseapp.com",
    projectId: "crown-db-3d122",
    storageBucket: "crown-db-3d122.appspot.com",
    messagingSenderId: "399642593703",
    appId: "1:399642593703:web:62d7fbd6cf6c1f876e4e82"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
