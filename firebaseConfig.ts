// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwniANKTnOQ0G6We_dDVo0hlsJ7TLEHxc",
  authDomain: "glossary-7-app.firebaseapp.com",
  projectId: "glossary-7-app",
  storageBucket: "glossary-7-app.appspot.com",
  messagingSenderId: "271861927815",
  appId: "1:271861927815:web:86dc38a0541b8b48d74d22",
  measurementId: "G-3KRX8NYGW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
