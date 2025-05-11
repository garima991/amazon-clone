// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjfTE2wBe-1XvyZIp1KYskHX3TDz6yS9s",
  authDomain: "clone-12498.firebaseapp.com",
  projectId: "clone-12498",
  storageBucket: "clone-12498.firebasestorage.app",
  messagingSenderId: "881745669133",
  appId: "1:881745669133:web:0ca2c77de7426262c17944",
  measurementId: "G-8FLPRYB9HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export {app, auth, analytics};