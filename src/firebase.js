// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD99f6Rb9fL_u32zC1tJI_S1jV7BO2COXY",
  authDomain: "scratchforge.firebaseapp.com",
  projectId: "scratchforge",
  storageBucket: "scratchforge.firebasestorage.app",
  messagingSenderId: "569932447368",
  appId: "1:569932447368:web:70fa4fb5fb6e296ed2e93d",
  measurementId: "G-0ZKF6B6XTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export auth and database
export const auth = getAuth(app);
export const db = getFirestore(app);
