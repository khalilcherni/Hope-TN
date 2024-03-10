import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB8YtlTXq43p7ua31Z-mG_-EBs4K3Wklhs",
  authDomain: "hope-822e6.firebaseapp.com",
  projectId: "hope-822e6",
  storageBucket: "hope-822e6.appspot.com",
  messagingSenderId: "140994890334",
  appId: "1:140994890334:web:012e1815e5a5d97b1782cf",
  measurementId: "G-N5MQ9X5ZNN"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider(); 

export { app, auth, GoogleProvider };