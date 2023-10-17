// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbClx57t7MXIf7cdxJ6SS5gXO4qSOGIzQ",
  authDomain: "m2i-formation-9f4a4.firebaseapp.com",
  databaseURL:
    "https://m2i-formation-9f4a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "m2i-formation-9f4a4",
  storageBucket: "m2i-formation-9f4a4.appspot.com",
  messagingSenderId: "456468264086",
  appId: "1:456468264086:web:4c7d501c8789722292feb7",
  measurementId: "G-HR6BVF4W5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const DATABASE_URL = firebaseConfig.databaseURL;
export const RECIPE_URL = DATABASE_URL + "/recipe";

export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;
