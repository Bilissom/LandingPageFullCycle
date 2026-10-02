// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0z-VeRIDWea8duvVfyJYUJEmW_POLzws",
  authDomain: "fullcycle-86722.firebaseapp.com",
  projectId: "fullcycle-86722",
  storageBucket: "fullcycle-86722.firebasestorage.app",
  messagingSenderId: "461802246354",
  appId: "1:461802246354:web:da19fe9fe3996e92ab1d0b",
  measurementId: "G-TLBGKWP9C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
