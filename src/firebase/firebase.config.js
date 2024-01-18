// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAipneznd1h9JQx3WQD15OCKwgu7zYV3SM",
    authDomain: "ema-john-firebase-auth-f5ee1.firebaseapp.com",
    projectId: "ema-john-firebase-auth-f5ee1",
    storageBucket: "ema-john-firebase-auth-f5ee1.appspot.com",
    messagingSenderId: "689810174527",
    appId: "1:689810174527:web:f54bff5a90df3cd4d8fe8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;