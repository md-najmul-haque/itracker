// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCD_liwqMUZdl4ifzvq53s6G4Uk1x-eVAI",
    authDomain: "itracker-ab3f9.firebaseapp.com",
    projectId: "itracker-ab3f9",
    storageBucket: "itracker-ab3f9.appspot.com",
    messagingSenderId: "584621469245",
    appId: "1:584621469245:web:f5f0bc7f40dc82a3688454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 