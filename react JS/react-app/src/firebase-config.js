import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdT6l7K4OSCbfuqgX1PmUiRK7PBafUcMM",
  authDomain: "woopa-73bf0.firebaseapp.com",
  projectId: "woopa-73bf0",
  storageBucket: "woopa-73bf0.appspot.com",
  messagingSenderId: "931283413344",
  appId: "1:931283413344:web:8214b5b7f0249284b05605",
  measurementId: "G-WH2TNTGGL5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

