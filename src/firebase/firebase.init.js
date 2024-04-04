// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJsmjLFwNHiuUGo7aRjpOJIiNp4rTT-tY",
  authDomain: "react-dragon-auth-21d1b.firebaseapp.com",
  projectId: "react-dragon-auth-21d1b",
  storageBucket: "react-dragon-auth-21d1b.appspot.com",
  messagingSenderId: "917306733393",
  appId: "1:917306733393:web:dfa79a5e2aae0a6501d970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;