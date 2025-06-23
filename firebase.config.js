// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHuA7f4cJ8-trumFu3LVANDsMekx1y-M",
  authDomain: "chattrix-1ffc0.firebaseapp.com",
  projectId: "chattrix-1ffc0",
  storageBucket: "chattrix-1ffc0.firebasestorage.app",
  messagingSenderId: "546250344059",
  appId: "1:546250344059:web:a0bd74beea4429cde084de",
  measurementId: "G-4293SF6R6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);