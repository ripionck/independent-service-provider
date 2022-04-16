// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJmxBCB0x9pamqYrbxK1lfj7JlkCtD-G4",
    authDomain: "setup-body-with-workout.firebaseapp.com",
    projectId: "setup-body-with-workout",
    storageBucket: "setup-body-with-workout.appspot.com",
    messagingSenderId: "447968753968",
    appId: "1:447968753968:web:cfcf06afe05153383130f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;