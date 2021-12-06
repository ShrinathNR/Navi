// import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcXYk-psOIRVRulXiRUDNRqcBr4EldERs",
  authDomain: "healthmoniteringsys.firebaseapp.com",
  databaseURL: "https://healthmoniteringsys-default-rtdb.firebaseio.com",
  projectId: "healthmoniteringsys",
  storageBucket: "healthmoniteringsys.appspot.com",
  messagingSenderId: "788009947561",
  appId: "1:788009947561:web:3c5458aec799b6c8d2f4b8",
  measurementId: "G-CKP0YFQNEM"
};

const fire = firebase.intializeApp(firebaseConfig);

const db = fire.databasse.ref();
// const app = initializeApp(firebaseConfig);

// // Get a reference to the database service
// const db = getDatabase(app);

// export default db;
