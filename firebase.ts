// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_Leeh-1yITmbdIdTZK2TxNIcuLzpBW4",
  authDomain: "skorai.firebaseapp.com",
  projectId: "skorai",
  storageBucket: "skorai.firebasestorage.app",
  messagingSenderId: "717790875171",
  appId: "1:717790875171:web:3f8f0fd3a5d7235e882b96",
  measurementId: "G-2Y95YNS25L",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firestore always works (client + server)
export const db = getFirestore(app);

// Analytics (browser only, wrapped safely)
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
