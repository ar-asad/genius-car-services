// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCkMfBhCDWR-w1NJoqwLKF7RQyTpZcoT4",
    authDomain: "genius-car-services-d5e94.firebaseapp.com",
    projectId: "genius-car-services-d5e94",
    storageBucket: "genius-car-services-d5e94.appspot.com",
    messagingSenderId: "693121145870",
    appId: "1:693121145870:web:e7145b97f55278aa31305f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;