// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaL77tg6fYYLoaZMfI9m9xonjjhHg-ND4",
  authDomain: "sandylandscaping-2e30c.firebaseapp.com",
  projectId: "sandylandscaping-2e30c",
  storageBucket: "sandylandscaping-2e30c.appspot.com",
  messagingSenderId: "142564956654",
  appId: "1:142564956654:web:cffbb751b3be92297dd6ff",
  measurementId: "G-XF1WRNEFYC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
