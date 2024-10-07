  // Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCaY3zLtv7mXOu4AmZ5zUZhBz1cOVKgSFs",
  authDomain: "testing-fa414.firebaseapp.com",
  projectId: "testing-fa414",
  storageBucket: "testing-fa414.appspot.com",
  messagingSenderId: "780337723672",
  appId: "1:780337723672:web:754149babf252c54d5866d",
  measurementId: "G-7TZEZQT7DE"
};

// Initialize Firebase
const app       = initializeApp(firebaseConfig);
const db        = getFirestore(app);
const storage   = getStorage(app);
const auth      = getAuth(app);
const analytics = getAnalytics(app);

export { analytics, auth, db, storage }; // export default app;
