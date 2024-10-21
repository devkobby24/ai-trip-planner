// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CONFIG_API_KEY,
  authDomain: "trip-planner-c8e4e.firebaseapp.com",
  projectId: "trip-planner-c8e4e",
  storageBucket: "trip-planner-c8e4e.appspot.com",
  messagingSenderId: "336579545712",
  appId: "1:336579545712:web:e5a8f2e990f94d31f642b5",
  measurementId: "G-DGZYEN66QX"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
// const analytics = getAnalytics(app);