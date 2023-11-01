// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpIVnpDK7sNmV1qsrv8bIO95luNjkqkyo",
  authDomain: "sprint-sync-9544b.firebaseapp.com",
  projectId: "sprint-sync-9544b",
  storageBucket: "sprint-sync-9544b.appspot.com",
  messagingSenderId: "695672642210",
  appId: "1:695672642210:web:ec228dac0c3c66f0e3d5fb",
  measurementId: "G-R99VCG2QJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const firebaseInitialized = true;