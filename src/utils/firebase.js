// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2W5O9mFQsqMhMviue_S3ElD8UfaugzOk",
  authDomain: "netflixgpt-c081d.firebaseapp.com",
  projectId: "netflixgpt-c081d",
  storageBucket: "netflixgpt-c081d.appspot.com",
  messagingSenderId: "430676378206",
  appId: "1:430676378206:web:6b1fdad5a4293c2866eacf",
  measurementId: "G-0KJ1LV7VKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
