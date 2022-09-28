// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA42eHJwDBhzwXWLTwKDCF52V7iMpHBMKU",
  authDomain: "gamez-react.firebaseapp.com",
  projectId: "gamez-react",
  storageBucket: "gamez-react.appspot.com",
  messagingSenderId: "120650069224",
  appId: "1:120650069224:web:cc14b2f79a3638eaff855d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;