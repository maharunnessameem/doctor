// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjjDVhJd4-yqtH51gCelLHzhmGYFLvU5A",
    authDomain: "doctor-4c993.firebaseapp.com",
    projectId: "doctor-4c993",
    storageBucket: "doctor-4c993.appspot.com",
    messagingSenderId: "90671355374",
    appId: "1:90671355374:web:65cf63fa6ec7f5d630eaff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;