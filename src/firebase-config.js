import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCICJVEdeIG1mRz37L5NkTWDYPSo39rQf8",
  authDomain: "navi-1a2b1.firebaseapp.com",
  projectId: "navi-1a2b1",
  storageBucket: "navi-1a2b1.appspot.com",
  messagingSenderId: "114191824088",
  appId: "1:114191824088:web:78168a7cdb63d918ca13ad",
  measurementId: "G-GECDPP0Q2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);