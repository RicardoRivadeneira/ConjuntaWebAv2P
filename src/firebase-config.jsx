// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEgI-BJ5sM19stFtFtQvS4WwIo4oNrIU4",
  authDomain: "p2parcial.firebaseapp.com",
  projectId: "p2parcial",
  storageBucket: "p2parcial.appspot.com",
  messagingSenderId: "679178906258",
  appId: "1:679178906258:web:967d9762504b38533f944b",
  measurementId: "G-38WDCH3K1B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
