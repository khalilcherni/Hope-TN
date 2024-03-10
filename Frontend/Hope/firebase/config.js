import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJQnY0FyUhbeQeNO_nH1lxGANalixCX9w",
  authDomain: "hope-tn.firebaseapp.com",
  databaseURL: "https://hope-tn-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hope-tn",
  storageBucket: "hope-tn.appspot.com",
  messagingSenderId: "721595971607",
  appId: "1:721595971607:web:d707768eae897b76b9c452",
  measurementId: "G-HPSR1J9NE9"
};
// Initialize Firebase app
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);