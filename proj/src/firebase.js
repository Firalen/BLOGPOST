// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDFDH1roW887MBs42DuRuunhjAcYUC2Sk",
  authDomain: "deliever-app.firebaseapp.com",
  projectId: "deliever-app",
  storageBucket: "deliever-app.appspot.com",
  messagingSenderId: "623425323769",
  appId: "1:623425323769:web:f15a60fde7cb4e48c69828",
  measurementId: "G-YNWX0MP9Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider=new GoogleAuthProvider();
export const db= getFirestore(app);