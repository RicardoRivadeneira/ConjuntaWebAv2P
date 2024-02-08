// src/firabase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEgI-BJ5sM19stFtFtQvS4WwIo4oNrIU4",
  authDomain: "p2parcial.firebaseapp.com",
  databaseURL: "https://p2parcial-default-rtdb.firebaseio.com",
  projectId: "p2parcial",
  storageBucket: "p2parcial.appspot.com",
  messagingSenderId: "679178906258",
  appId: "1:679178906258:web:566528c23a5bed3d3f944b",
  measurementId: "G-JSPNEG4ESW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa los servicios de Firebase
const auth = getAuth(app);
const db = getDatabase(app);
// Inicializa cualquier otro servicio aquí

// Exporta los servicios para usarlos en tu aplicación
export { app, auth, db };
