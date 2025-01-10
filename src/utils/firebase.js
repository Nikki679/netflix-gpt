// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflixgpt-5757f.firebaseapp.com",
  projectId: "netflixgpt-5757f",
  storageBucket: "netflixgpt-5757f.firebasestorage.app",
  messagingSenderId: "440803360178",
  appId: "1:440803360178:web:318b249ea33d462626b8ab",
  measurementId: "G-V9H5TCC1MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
