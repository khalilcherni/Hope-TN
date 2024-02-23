import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCn250HiaPR6k2RXG4g5PypDlMCW1UZDnY",
    authDomain: "labibb-a1ecc.firebaseapp.com",
    projectId: "labibb-a1ecc",
    storageBucket: "labibb-a1ecc.appspot.com",
    messagingSenderId: "188901640312",
    appId: "1:188901640312:web:076aa7bb995eee513f458d",
    measurementId: "G-W2TSHK4HL2"
  };

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Get authentication instance
const auth = getAuth(app);

export { app, auth };
