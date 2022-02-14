import { initializeApp } from "firebase/app";
console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BACKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MASSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// REACT_APP_FIREBASE_API_KEY = AIzaSyAErXQ3iP2QTeLZok21kOCIRvHy6THYBX0
// REACT_APP_FIREBASE_AUTH_DOMAIN = auth-app-9a9f3.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID = auth-app-9a9f3
// REACT_APP_FIREBASE_STORAGE_BACKET = auth-app-9a9f3.appspot.com
// REACT_APP_FIREBASE_MASSEGING_SENDER_ID = 701705049338
// REACT_APP_FIREBASE_APP_ID = 1:701705049338:web:fd154e2ecc7b82052e6543
