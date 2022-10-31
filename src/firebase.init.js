// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdrZ7d5Jz12X7EMFTec5lblO8csX-cyaw",
  authDomain: "ema-john-752d6.firebaseapp.com",
  projectId: "ema-john-752d6",
  storageBucket: "ema-john-752d6.appspot.com",
  messagingSenderId: "143857661940",
  appId: "1:143857661940:web:ce69ecfe12ff9b399deba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;