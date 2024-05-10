// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWE5wsjQa3dmXIYOTlXxOQWc9s4w4e6Gg",
  authDomain: "social-app-e4481.firebaseapp.com",
  projectId: "social-app-e4481",
  storageBucket: "social-app-e4481.appspot.com",
  messagingSenderId: "603345149467",
  appId: "1:603345149467:web:b18108381cffe6f868e2be",
  measurementId: "G-TZPQ5RG5WY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
