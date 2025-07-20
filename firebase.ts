// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // if you use Firestore
import { getDatabase } from "firebase/database"; // if you use Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDMoJfWZatkXeIdqniFQ-XbW0iCqlq3TvE",
  authDomain: "ghost-incidents-bot.firebaseapp.com",
  projectId: "ghost-incidents-bot",
  storageBucket: "ghost-incidents-bot.firebasestorage.app",
  messagingSenderId: "421137956780",
  appId: "1:421137956780:web:b3d7ba24a03ae663804409",
  measurementId: "G-1GXWKYCPTF"
};

const app = initializeApp(firebaseConfig);

// Use whichever database you want:
const firestore = getFirestore(app);      // Firestore
const realtimeDb = getDatabase(app);      // Realtime Database

export { app, firestore, realtimeDb };
