import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn250HiaPR6k2RXG4g5PypDlMCW1UZDnY",
  authDomain: "labibb-a1ecc.firebaseapp.com",
  projectId: "labibb-a1ecc",
  storageBucket: "labibb-a1ecc.appspot.com",
  messagingSenderId: "188901640312",
  appId: "1:188901640312:web:076aa7bb995eee513f458d",

};
// Initialize Firebase app
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);