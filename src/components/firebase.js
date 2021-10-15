import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRYUeQitivYsA5-KFB6K7cgrrCIGEQ2tc",

  authDomain: "clives-portfolio.firebaseapp.com",

  projectId: "clives-portfolio",

  storageBucket: "clives-portfolio.appspot.com",

  messagingSenderId: "690248541242",

  appId: "1:690248541242:web:8b2b59d218392293e14103",

  measurementId: "G-56NMWJ1YV6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore();

export {db};