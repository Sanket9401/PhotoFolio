// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo-7Di4xsUBJsg_Awc0Y_gzAG9N6oTIm0",
  authDomain: "jobs-portal-6a168.firebaseapp.com",
  projectId: "jobs-portal-6a168",
  storageBucket: "jobs-portal-6a168.appspot.com",
  messagingSenderId: "590584630723",
  appId: "1:590584630723:web:dd79dbb0ffc43332cbc176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
