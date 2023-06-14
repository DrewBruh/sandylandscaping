// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHPPqsfbLKcwPj6dmOiXsJoV9_hBs3ABY",
  authDomain: "website-v1-6c942.firebaseapp.com",
  projectId: "website-v1-6c942",
  storageBucket: "website-v1-6c942.appspot.com",
  messagingSenderId: "37966828638",
  appId: "1:37966828638:web:42deeef98fc75c477010cf",
  measurementId: "G-ELB6VCJQCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
